// routes/registration.js

const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const Course = require('../models/Course');
const Student = require('../models/User');
const sendEmail = require('../utils/sendEmail');
const PDFDocument = require('pdfkit');
const getStream = require('get-stream');

// Register a course
router.post('/', async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    const existing = await Registration.findOne({ studentId, courseId });
    if (existing) return res.status(400).json({ msg: 'Already registered' });

    const reg = new Registration({ studentId, courseId });
    await reg.save();

    const student = await Student.findById(studentId);
    const course = await Course.findById(courseId);

    const message = `Hi ${student.name},\n\nYou have successfully registered for the course: ${course.name}.\n\nStatus: PENDING\n\nRegards,\nCourse Registration System`;
    await sendEmail(student.email, 'Course Registration Submitted', message);

    res.json({ msg: 'Registration submitted', reg });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get registrations by student
router.get('/:studentId', async (req, res) => {
  const registrations = await Registration.find({ studentId: req.params.studentId })
    .populate('courseId');
  res.json(registrations);
});

// Get all registrations
router.get('/', async (req, res) => {
  const registrations = await Registration.find()
    .populate('courseId')
    .populate('studentId');
  res.json(registrations);
});

// Update registration status and send PDF email
router.patch('/:id', async (req, res) => {
  let reg = null; // ✅ Declare reg here so it’s accessible in both try and catch

  try {
    console.log('➡️ PATCH /:id triggered');
    console.log('📦 Payload:', req.body);
    console.log('🆔 Registration ID:', req.params.id);

    const { status } = req.body;

    // 1. Fetch and populate the registration
    reg = await Registration.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).populate('studentId').populate('courseId');

    if (!reg) {
      console.error('❌ No registration found');
      return res.status(404).json({ msg: 'Registration not found' });
    }

    const student = reg.studentId;
    const course = reg.courseId;

    if (!student || !course) {
      console.warn('⚠️ Missing student or course:', reg._id);
      return res.status(400).json({ msg: 'Student or course info is missing.' });
    }

    if (!student.name || !student.email || !course.name) {
      console.warn('⚠️ Incomplete data for email or PDF:', { student, course });
      return res.status(400).json({ msg: 'Incomplete student/course details' });
    }

    console.log('✅ Student:', student.name, student.email);
    console.log('✅ Course:', course.name, course.program);

    // 2. Generate PDF
    const doc = new PDFDocument();
    doc.fontSize(20).text('Course Registration Summary', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Student Name: ${student.name}`);
    doc.text(`Email: ${student.email}`);
    doc.text(`Course: ${course.name}`);
    doc.text(`Program: ${course.program}`);
    doc.text(`Status: ${status.toUpperCase()}`);
    doc.text(`Date: ${new Date().toLocaleString()}`);
    doc.end();

    const streamToBuffer = (stream) => {
      return new Promise((resolve, reject) => {
      const chunks = [];
      stream.on('data', chunk => chunks.push(chunk));
      stream.on('end', () => resolve(Buffer.concat(chunks)));
      stream.on('error', reject);
      });
    };

    const pdfBuffer = await streamToBuffer(doc); // ✅ now works reliably


    const message = `Hi ${student.name},\n\nYour registration for "${course.name}" has been updated to: ${status.toUpperCase()}.\n\nPlease find the attached PDF summary.\n\nRegards,\nAdmin`;

    // 3. Send email
    try {
      await sendEmail(
        student.email,
        '📄 Course Registration Status Update',
        message,
        pdfBuffer,
        'RegistrationSummary.pdf'
      );
    } catch (emailErr) {
      console.error('❌ Failed to send email:', emailErr.message);
      return res.status(500).json({ msg: 'Failed to send email. Try again later.' });
    }

    console.log('✅ Email sent to:', student.email);
    res.json({ msg: 'Status updated and email sent', reg });

  } catch (err) {
  if (reg) {
    console.log('🔍 DEBUG studentId:', reg.studentId);
    console.log('🔍 DEBUG courseId:', reg.courseId);
    console.log('📨 Will send email to:', reg.studentId?.email);
  } else {
    console.log('⚠️ reg is null — registration failed before fetching.');
  }

  console.error('💥 Server error:', err.stack || err.message);
  res.status(500).json({ msg: 'Internal server error' });
  }

});



// Analytics endpoints
router.get('/stats/course-counts', async (req, res) => {
  const result = await Registration.aggregate([
    {
      $lookup: {
        from: 'courses',
        localField: 'courseId',
        foreignField: '_id',
        as: 'course'
      }
    },
    { $unwind: '$course' },
    {
      $group: {
        _id: '$course.name',
        count: { $sum: 1 }
      }
    },
    { $sort: { count: -1 } }
  ]);
  res.json(result);
});

router.get('/stats/faculty-distribution', async (req, res) => {
  const result = await Registration.aggregate([
    {
      $lookup: {
        from: 'courses',
        localField: 'courseId',
        foreignField: '_id',
        as: 'course'
      }
    },
    { $unwind: '$course' },
    {
      $group: {
        _id: '$course.faculty',
        count: { $sum: 1 }
      }
    },
    { $sort: { count: -1 } }
  ]);
  res.json(result);
});

router.get('/stats/yearly-trends', async (req, res) => {
  const result = await Registration.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: '%Y', date: '$createdAt' } },
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } }
  ]);
  res.json(result);
});

module.exports = router;

const Pdf = require('../models/pdf'); 

exports.getPdfs = async (req, res) => {
  try {
    const filter = {};
    const allowedFields = ['year', 'branch', 'semester', 'subject', 'type'];
    allowedFields.forEach(field => {
      if (req.query[field]) filter[field] = req.query[field];
    });
    const pdfs = await Pdf.find(filter);
    res.json(pdfs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postpdf = async (req, res, next) => {

    const { pdfUrl, year, branch, semester, subject, type, subtype } = req.body;
    console.log(req.body);
    if (!pdfUrl) {
      res.status(400);
      return next(new Error("pdfUrl fields are required"));
    }
  
    try {
       await Pdf.create({
  
        pdfUrl,
        year,
        branch,
        semester,
        subject,
        type,
        subtype
  
  
      });
  
      res.status(201).json({
        success: true,
        // pdfs,
        pdfUrl,
        year,
        branch,
        semester,
        subject,
        type,
        subtype
  
      });
    } catch (error) {
      console.log(error);
      res.status(500);
      next(error);
    }
  }

exports.deletePdf = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pdf.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'PDF not found' });
    }
    res.json({ success: true, message: 'PDF deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePdf = async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = req.body;
    const updated = await Pdf.findByIdAndUpdate(id, updateFields, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'PDF not found' });
    }
    res.json({ success: true, pdf: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
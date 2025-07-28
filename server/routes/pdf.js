const express = require("express");
const PdfRouter = express.Router();
const auth = require("../middleware/auth");
const { postpdf, getPdfs, deletePdf, updatePdf } = require("../controllers/pdf");


PdfRouter.post("/Upload", auth,  postpdf);
PdfRouter.get("/getpdfs", getPdfs);
PdfRouter.delete("/pdf/:id", auth, deletePdf);
PdfRouter.put("/pdf/:id", auth, updatePdf);

module.exports = PdfRouter;
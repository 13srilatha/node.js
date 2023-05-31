const pdfToExcelGenerator = require('pdf-to-excel')
try{
    pdfToExcelGenerator.genXlsx('elitmus.pdf','pdfToExcel.xlsx')
}catch(err){
    console.log("The error is : "+err)
}
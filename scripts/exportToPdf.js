function generatePDF() {
        
    // Choose the element id which you want to export.
    var element = document.getElementById('divToExport');
    var opt = {
        margin:       0.5,
        filename:     'myfile.pdf',
        image:        { type: 'pdf', quality: 1 },
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait',precision: '12' }
      };
    
    // choose the element and pass it to html2pdf() function and call the save() on it to save as pdf.
    html2pdf().set(opt).from(element).save();
  }
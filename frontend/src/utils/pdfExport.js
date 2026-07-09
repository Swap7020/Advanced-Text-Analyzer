import jsPDF from "jspdf";

export function exportPDF(data) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Advanced Text Analyzer Report", 20, 20);

  let y = 35;

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === "object") return;

    doc.setFontSize(12);
    doc.text(`${key}: ${value}`, 20, y);

    y += 8;

    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save("Text-Analysis-Report.pdf");
}
import { saveAs } from "file-saver";

export function exportCSV(data) {

    let csv = "Field,Value\n";

    Object.entries(data).forEach(([key, value]) => {

        if (typeof value === "object") return;

        csv += `${key},${value}\n`;

    });

    const blob = new Blob([csv], {
        type: "text/csv;charset=utf-8;"
    });

    saveAs(blob, "Text-Analysis.csv");

}
//https://nodejs.org/dist/latest-v16.x/docs/api/report.html
import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = "./14.report/report.json";

function sampleError() {
  throw new Error("Awokawoka");
}

sampleError();

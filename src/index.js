import BrowserElekiter from "./browser";
import RendererElekiter from "./renderer";

let ExportClass = process.type === 'browser' ? BrowserElekiter : RendererElekiter;
export default ExportClass;

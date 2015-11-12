const BrowserElekiter =  require('./browser');
const RendererElekiter = require('./renderer');

let ExportClass = process.type === 'browser' ? BrowserElekiter : RendererElekiter;
export default ExportClass;

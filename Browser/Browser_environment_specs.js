// Browser Environment Specifications


const userAgent = navigator.userAgent;
console.log('User Agent:', userAgent);

// Browser Capabilities
const browserInfo = {
  name: navigator.appName,
  version: navigator.appVersion,
  platform: navigator.platform,
  language: navigator.language,
};

console.log('Browser Info:', browserInfo);

// Screen Specifications
const screenSpecs = {
  width: screen.width,
  height: screen.height,
  availWidth: screen.availWidth,
};

console.log('Screen Specs:', screenSpecs);

// Window Information
const windowSpecs = {
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
};

console.log('Window Specs:', windowSpecs);

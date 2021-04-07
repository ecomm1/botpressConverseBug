"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// This is not required for the custom component, but it makes it easier to test this example
const botTemplates = [{
  id: 'custom-component-demo',
  name: 'Demo - Custom Components',
  desc: 'This module shows how to implement custom components on channel web'
}];
const entryPoint = {
  botTemplates,
  definition: {
    name: 'custom-component',
    menuIcon: 'none',
    menuText: 'Custom Component',
    fullName: 'My Custom Component',
    noInterface: true,
    // This prevents your module from being displayed in the menu, since we only add custom components here
    homepage: 'https://chatbot.ecommunicate.co.za'
  }
};
var _default = entryPoint;
exports.default = _default;
//# sourceMappingURL=index.js.map
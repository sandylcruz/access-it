const __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, 'raw', { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};
exports.__esModule = true;
const React = require('react');
const styled_components_1 = require('styled-components');

const StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(['\n  background-color: ', ';\n  color: ', ';\n  font-size: ', ';\n  width: ', ';\n  // height: 50px;\n  height: ', ';\n  border: ', ';\n  border-radius: 6px;\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: ', ';\n  }\n\n  &:active {\n    background-color: ', ';\n  }\n\n  &:focus {\n    background-color: ', ';\n\n    box-shadow: ', ';\n\n    &:active {\n      background-color: ', ';\n\n      color: ', ';\n    }\n  }\n\n  &:disabled {\n    background-color: #ededed;\n    color: #c9cdd1;\n    cursor: not-allowed;\n  }\n'], ['\n  background-color: ', ';\n  color: ', ';\n  font-size: ', ';\n  width: ', ';\n  // height: 50px;\n  height: ', ';\n  border: ', ';\n  border-radius: 6px;\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: ', ';\n  }\n\n  &:active {\n    background-color: ', ';\n  }\n\n  &:focus {\n    background-color: ', ';\n\n    box-shadow: ', ';\n\n    &:active {\n      background-color: ', ';\n\n      color: ', ';\n    }\n  }\n\n  &:disabled {\n    background-color: #ededed;\n    color: #c9cdd1;\n    cursor: not-allowed;\n  }\n'])), (_a) => {
  const { kind } = _a;
  return kind === 'basic'
    ? 'white'
    : kind === 'primary'
      ? '#29614d'
      : 'transparent';
}, (_a) => {
  const { kind } = _a;
  return (kind === 'primary' ? 'white' : '#0e3431');
}, (_a) => {
  const { buttonSize } = _a;
  return buttonSize === 'small'
    ? '15px'
    : buttonSize === 'medium'
      ? '18px'
      : '23px';
}, (_a) => {
  const { buttonSize } = _a;
  return buttonSize === 'small'
    ? '80px'
    : buttonSize === 'medium'
      ? '100px'
      : '120px';
}, (_a) => {
  const { buttonSize } = _a;
  return buttonSize === 'small'
    ? '35px'
    : buttonSize === 'medium'
      ? '40px'
      : '50px';
}, (_a) => {
  const { kind } = _a;
  return kind === 'secondary' ? 'transparent' : '1px solid #165549';
}, (_a) => {
  const { kind } = _a;
  return kind === 'basic'
    ? '#e2eeee'
    : kind === 'primary'
      ? '#1c4335'
      : '#e2eeee';
}, (_a) => {
  const { kind } = _a;
  return kind === 'primary' ? '143026' : '#dfecec';
}, (_a) => {
  const { kind } = _a;
  return kind === 'primary' ? '#10261e' : '#9ed6c3';
}, (_a) => {
  const { kind } = _a;
  return kind === 'primary'
    ? '#afd0d0 0px 0px 0px 5px'
    : '#cfe3e3 0px 0px 0px 5px';
}, (_a) => {
  const { kind } = _a;
  return kind === 'primary' ? '#9ed6c3' : '#2C6853';
}, (_a) => {
  const { kind } = _a;
  return (kind === 'primary' ? '#0e3431' : 'white');
});
const Button = React.memo((_a) => {
  const { buttonSize } = _a;
  const { children } = _a;
  const { disabled } = _a;
  const { kind } = _a;
  const { onClick } = _a;
  const { onKeyDown } = _a;
  return (React.createElement(StyledButton, {
    'aria-label': children, buttonSize, disabled, kind, onClick, onKeyDown, role: 'button',
  }, children));
});
exports.default = Button;
let templateObject_1;

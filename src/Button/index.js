"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var React = require("react");
var styled_components_1 = require("styled-components");
var StyledButton = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  font-size: ", ";\n  width: ", ";\n  // height: 50px;\n  height: ", ";\n  border: ", ";\n  border-radius: 6px;\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n  }\n\n  &:focus {\n    background-color: ", ";\n\n    box-shadow: ", ";\n\n    &:active {\n      background-color: ", ";\n\n      color: ", ";\n    }\n  }\n\n  &:disabled {\n    background-color: #ededed;\n    color: #c9cdd1;\n    cursor: not-allowed;\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  font-size: ", ";\n  width: ", ";\n  // height: 50px;\n  height: ", ";\n  border: ", ";\n  border-radius: 6px;\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n  }\n\n  &:focus {\n    background-color: ", ";\n\n    box-shadow: ", ";\n\n    &:active {\n      background-color: ", ";\n\n      color: ", ";\n    }\n  }\n\n  &:disabled {\n    background-color: #ededed;\n    color: #c9cdd1;\n    cursor: not-allowed;\n  }\n"])), function (_a) {
    var kind = _a.kind;
    return kind === "basic"
        ? "white"
        : kind === "primary"
            ? "#29614d"
            : "transparent";
}, function (_a) {
    var kind = _a.kind;
    return (kind === "primary" ? "white" : "#0e3431");
}, function (_a) {
    var buttonSize = _a.buttonSize;
    return buttonSize === "small"
        ? "15px"
        : buttonSize === "medium"
            ? "18px"
            : "23px";
}, function (_a) {
    var buttonSize = _a.buttonSize;
    return buttonSize === "small"
        ? "80px"
        : buttonSize === "medium"
            ? "100px"
            : "120px";
}, function (_a) {
    var buttonSize = _a.buttonSize;
    return buttonSize === "small"
        ? "35px"
        : buttonSize === "medium"
            ? "40px"
            : "50px";
}, function (_a) {
    var kind = _a.kind;
    return kind === "secondary" ? "transparent" : "1px solid #165549";
}, function (_a) {
    var kind = _a.kind;
    return kind === "basic"
        ? "#e2eeee"
        : kind === "primary"
            ? "#1c4335"
            : "#e2eeee";
}, function (_a) {
    var kind = _a.kind;
    return kind === "primary" ? "143026" : "#dfecec";
}, function (_a) {
    var kind = _a.kind;
    return kind === "primary" ? "#10261e" : "#9ed6c3";
}, function (_a) {
    var kind = _a.kind;
    return kind === "primary"
        ? "#afd0d0 0px 0px 0px 5px"
        : "#cfe3e3 0px 0px 0px 5px";
}, function (_a) {
    var kind = _a.kind;
    return kind === "primary" ? "#9ed6c3" : "#2C6853";
}, function (_a) {
    var kind = _a.kind;
    return (kind === "primary" ? "#0e3431" : "white");
});
var Button = React.memo(function (_a) {
    var buttonSize = _a.buttonSize, children = _a.children, disabled = _a.disabled, kind = _a.kind, onClick = _a.onClick, onKeyDown = _a.onKeyDown;
    return (React.createElement(StyledButton, { "aria-label": children, buttonSize: buttonSize, disabled: disabled, kind: kind, onClick: onClick, onKeyDown: onKeyDown, role: "button" }, children));
});
exports["default"] = Button;
var templateObject_1;

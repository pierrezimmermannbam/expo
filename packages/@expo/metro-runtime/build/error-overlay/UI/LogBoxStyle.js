/**
 * Copyright (c) 650 Industries.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export function getBackgroundColor(opacity) {
    return `rgba(0, 0, 0, ${opacity == null ? 1 : opacity})`;
    // return `rgba(51, 51, 51, ${opacity == null ? 1 : opacity})`;
}
export function getBackgroundLightColor(opacity) {
    return `rgba(69, 69, 69, ${opacity == null ? 1 : opacity})`;
}
export function getBackgroundDarkColor(opacity) {
    return `rgba(34, 34, 34, ${opacity == null ? 1 : opacity})`;
}
export function getWarningColor(opacity) {
    return `rgba(250, 186, 48, ${opacity == null ? 1 : opacity})`;
}
export function getWarningDarkColor(opacity) {
    return `rgba(224, 167, 8, ${opacity == null ? 1 : opacity})`;
}
export function getFatalColor(opacity) {
    return `rgba(243, 83, 105, ${opacity == null ? 1 : opacity})`;
}
export function getFatalDarkColor(opacity) {
    return `rgba(208, 75, 95, ${opacity == null ? 1 : opacity})`;
}
export function getErrorColor(opacity) {
    return `rgba(243, 83, 105, ${opacity == null ? 1 : opacity})`;
}
export function getErrorDarkColor(opacity) {
    return `rgba(208, 75, 95, ${opacity == null ? 1 : opacity})`;
}
export function getLogColor(opacity) {
    return `rgba(119, 119, 119, ${opacity == null ? 1 : opacity})`;
}
export function getWarningHighlightColor(opacity) {
    return `rgba(252, 176, 29, ${opacity == null ? 1 : opacity})`;
}
export function getDividerColor(opacity) {
    return `rgba(255, 255, 255, ${opacity == null ? 1 : opacity})`;
}
export function getHighlightColor(opacity) {
    return `rgba(252, 176, 29, ${opacity == null ? 1 : opacity})`;
}
export function getTextColor(opacity) {
    return `rgba(255, 255, 255, ${opacity == null ? 1 : opacity})`;
}
//# sourceMappingURL=LogBoxStyle.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateText = function (userData) {
    var stringDate = new Date().toString();
    return "\n  \u05D4\u05D9\u05D9, \u05E0\u05DB\u05D5\u05DF \u05DC\u05E2\u05DB\u05E9\u05D9\u05D5 " + stringDate + ",\n  \u05D9\u05D5\u05D6\u05E8 \u05E0\u05DB\u05E0\u05E1 \u05D5\u05DC\u05E9\u05DC\u05D7 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D3\u05E8\u05DA \u05D4\u05D0\u05EA\u05E8. \u05EA\u05D5\u05DB\u05DF \u05D4\u05D4\u05D3\u05D5\u05E2\u05D4:\n\n  \u05E9\u05DD: " + userData.fullName + "\n  \u05E0\u05D9\u05D9\u05D3: " + userData.phone + "\n  \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC: " + userData.email + "\n\n  \u05EA\u05D5\u05DB\u05DF \u05D4\u05D4\u05D5\u05D3\u05E2\u05D4:\n  " + userData.message + "\n ";
};
//# sourceMappingURL=generate-text.util.js.map
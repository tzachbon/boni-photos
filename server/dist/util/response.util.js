"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseHelper = function (body, isValid) {
    if (isValid === void 0) { isValid = true; }
    if (!isValid) {
        console.log('====================================');
        console.log('ERROR::', body);
        console.log('====================================');
    }
    return {
        isValid: isValid,
        body: body
    };
};
//# sourceMappingURL=response.util.js.map
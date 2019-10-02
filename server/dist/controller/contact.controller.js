"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var response_util_1 = require("../util/response.util");
var mail_util_1 = require("../util/mail.util");
var generate_text_util_1 = require("../util/generate-text.util");
exports.ContactController = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    var userData, subject, text, mailToAdmin, mailDetails, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userData = req.body;
                subject = "\u05D9\u05D5\u05D6\u05E8 \u05D7\u05D3\u05E9 \u05E9\u05DC\u05D7 \u05E2\u05DB\u05E9\u05D9\u05D5 \u05DE\u05D9\u05D9\u05DC \u05D3\u05E8\u05DA \u05D4\u05D0\u05EA\u05E8!";
                text = generate_text_util_1.generateText(userData);
                mailToAdmin = new mail_util_1.Mailer(subject, text);
                console.log('====================================');
                console.log(mailToAdmin.mailInfo);
                console.log('====================================');
                return [4, mailToAdmin.send()];
            case 1:
                mailDetails = _a.sent();
                res.status(201).json(response_util_1.responseHelper({
                    message: 'Message Sent',
                    mailDetails: mailDetails
                }));
                return [3, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json(response_util_1.responseHelper({
                    error: error_1
                }, false));
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
//# sourceMappingURL=contact.controller.js.map
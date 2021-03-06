"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_cron_1 = __importDefault(require("node-cron"));
var mail_util_1 = require("./mail.util");
var Counter = /** @class */ (function () {
    function Counter() {
        this.weekly = 0;
        this.daily = 0;
        this.sum = 0;
        node_cron_1.default.schedule('25 5 10 * * *', this.sendMailEveryDay.bind(this));
        node_cron_1.default.schedule('0 0 12 * * FRI', this.sendMailEveryWeek.bind(this));
    }
    Counter.prototype.sendMailEveryWeek = function () {
        return __awaiter(this, void 0, void 0, function () {
            var today, text, MailToAdmin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        today = new Date().toString();
                        text = "\n    \u05E0\u05DB\u05D5\u05DF \u05DC\u05E2\u05DB\u05E9\u05D9\u05D5:\n    " + today + "\n     \u05E0\u05DB\u05E0\u05E1\u05D5 \u05D4\u05E9\u05D1\u05D5\u05E2 " + this.weekly + "\n\n     \u05E1\u05DA \u05D4\u05DB\u05DC \u05E0\u05DB\u05E0\u05E1\u05D5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA:\n     " + this.sum + "\n    ";
                        MailToAdmin = new mail_util_1.Mailer("\u05D4\u05E9\u05D1\u05D5\u05E2 \u05D4\u05D9\u05D5 " + this.weekly + " \u05DB\u05E0\u05D9\u05E1\u05D5\u05EA", text);
                        return [4 /*yield*/, MailToAdmin.send()];
                    case 1:
                        _a.sent();
                        this.setWeeklyCount(0);
                        return [2 /*return*/];
                }
            });
        });
    };
    Counter.prototype.sendMailEveryDay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var today, text, MailToAdmin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        today = new Date().toString();
                        text = "\n    \u05E0\u05DB\u05D5\u05DF \u05DC\u05E2\u05DB\u05E9\u05D9\u05D5:\n    " + today + "\n    \u05E0\u05DB\u05E0\u05E1\u05D5 \u05D4\u05D9\u05D5\u05DD " + this.daily + "\n    \u05E0\u05DB\u05E0\u05E1\u05D5 \u05D4\u05E9\u05D1\u05D5\u05E2 " + this.weekly + "\n    \u05E0\u05DB\u05E0\u05E1\u05D5 \u05E1\u05DA \u05D4\u05DB\u05DC " + this.sum + "\n    ";
                        MailToAdmin = new mail_util_1.Mailer("\u05D4\u05D9\u05D5\u05DD \u05D4\u05D9\u05D5 " + this.daily + " \u05DB\u05E0\u05D9\u05E1\u05D5\u05EA", text);
                        return [4 /*yield*/, MailToAdmin.send()];
                    case 1:
                        _a.sent();
                        this.setDailyCount(0);
                        return [2 /*return*/];
                }
            });
        });
    };
    Counter.prototype.setWeeklyCount = function (weekly) {
        this.weekly = weekly;
    };
    Counter.prototype.setDailyCount = function (daily) {
        this.daily = daily;
    };
    Counter.prototype.updateCounter = function () {
        this.daily++;
        this.weekly++;
        this.sum++;
    };
    Object.defineProperty(Counter.prototype, "totalEnters", {
        get: function () {
            return this.sum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Counter.prototype, "weeklyCount", {
        get: function () {
            return this.weekly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Counter.prototype, "dailyCount", {
        get: function () {
            return this.daily;
        },
        enumerable: true,
        configurable: true
    });
    return Counter;
}());
exports.Counter = Counter;
//# sourceMappingURL=counter.util.js.map
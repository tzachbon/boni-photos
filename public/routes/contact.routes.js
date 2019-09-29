"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var contact_controller_1 = require("../controller/contact.controller");
exports.ContactRouter = express_1.default.Router();
exports.ContactRouter.post('/', contact_controller_1.ContactController);
//# sourceMappingURL=contact.routes.js.map
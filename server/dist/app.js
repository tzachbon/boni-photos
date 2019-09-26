"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var app = express_1.default();
var port = process.env.PORT || 3088;
app.use(body_parser_1.json({ limit: '500mb' }));
app.use(body_parser_1.urlencoded({ limit: '500mb', extended: true }));
app.listen(port);
console.log("Listening to " + port);
//# sourceMappingURL=app.js.map
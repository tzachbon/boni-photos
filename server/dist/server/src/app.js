"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = require("body-parser");
var express_1 = __importDefault(require("express"));
var headers_controller_1 = require("./controller/headers.controller");
var health_check_controller_1 = require("./controller/health-check.controller");
var counter_util_1 = require("./util/counter.util");
var app = express_1.default();
var port = process.env.PORT || 3088;
app.use(body_parser_1.urlencoded({ limit: '500mb', extended: true }));
app.use(headers_controller_1.headersController);
app.use('/api', health_check_controller_1.healthCheckController);
app.use(function (req, res, next) {
});
app.listen(port, function () {
    var counter = new counter_util_1.Counter();
    console.log("Listening to " + port);
});
//# sourceMappingURL=app.js.map
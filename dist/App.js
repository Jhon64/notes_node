"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var App = /** @class */ (function () {
    function App() {
        this.aplicacion = express_1.default();
        this.middlewares();
        this.configuraciones();
    }
    App.prototype.middlewares = function () {
        morgan_1.default("dev");
        cors_1.default();
        body_parser_1.default.urlencoded({ extended: true });
        body_parser_1.default.json();
    };
    App.prototype.configuraciones = function () {
        this.aplicacion.set("PORT", process.env.PORT || 3000);
    };
    App.prototype.rutas = function () { };
    App.prototype.listenToServer = function () {
        var _this = this;
        this.aplicacion.listen(this.aplicacion.get("PORT"), function () {
            console.log("levantando servidor en http://localhost:" + _this.aplicacion.get("PORT"));
        });
    };
    return App;
}());
exports.default = App;

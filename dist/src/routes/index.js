"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("../controller/index"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    index_1.default.search(req, res);
});
exports.default = router;

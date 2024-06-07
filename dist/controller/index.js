"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const searchController_1 = __importDefault(require("./searchController"));
const searchRepository_1 = __importDefault(require("../repositories/searchRepository"));
const index_1 = __importDefault(require("../service/pornhub/index"));
const searchRepository = new searchRepository_1.default(new index_1.default());
const searchController = new searchController_1.default(searchRepository);
exports.default = searchController;

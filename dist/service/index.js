"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./eporn/index"));
const index_2 = __importDefault(require("./xvideos/index"));
const index_3 = __importDefault(require("./pornhub/index"));
const AggregatedSearchService_1 = __importDefault(require("./AggregatedSearchService"));
const epornService = new index_1.default();
const xvideosService = new index_2.default();
const pornhubService = new index_3.default();
const aggregatedSearchService = new AggregatedSearchService_1.default([epornService, xvideosService, pornhubService]);
exports.default = aggregatedSearchService;

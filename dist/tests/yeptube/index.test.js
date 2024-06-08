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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../src/service/yeptube/index"));
const fs_1 = __importDefault(require("fs"));
const globals_1 = require("@jest/globals");
describe('YeptubeSearch', () => {
    let yeptubeSearch;
    let html;
    beforeEach(() => {
        yeptubeSearch = new index_1.default();
        html = fs_1.default.readFileSync('tests/mocks/yeptube.html', 'utf-8');
        global.fetch = globals_1.jest.fn(() => Promise.resolve(new Response(html, {
            status: 200,
            headers: { 'Content-type': 'text/html' }
        })));
    });
    test('search should scrape the videos', () => __awaiter(void 0, void 0, void 0, function* () {
        const videos = yield yeptubeSearch.search('elisa-sanches');
        expect(videos).toHaveLength(7);
    }));
});

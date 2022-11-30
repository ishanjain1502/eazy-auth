"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongo_1 = __importDefault(require("./config/mongo"));
(0, mongo_1.default)();
const PORT = 1337 || process.env.PORT;
app_1.default.listen(PORT, () => {
    console.log(`Server connected to server ${PORT}`);
});
//# sourceMappingURL=index.js.map
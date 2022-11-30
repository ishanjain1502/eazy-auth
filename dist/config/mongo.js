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
Object.defineProperty(exports, "__esModule", { value: true });
const { MongoClient } = require("mongodb");
// Connection URI
const uri = process.env.DATABASE_URL;
// Create a new MongoClient
const client = new MongoClient(uri);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect the client to the server (optional starting in v4.7)
            yield client.connect();
            // Establish and verify connection
            yield client.db("owner").command({ ping: 1 });
            console.log("Connected successfully to server");
        }
        finally {
            // Ensures that the client will close when you finish/error
            yield client.close();
        }
    });
}
exports.default = run;
//# sourceMappingURL=mongo.js.map
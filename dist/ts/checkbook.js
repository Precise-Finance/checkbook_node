"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbook = void 0;
const _ = require("lodash");
const resource_1 = require("./resource");
const check_1 = require("./endpoints/check");
const invoice_1 = require("./endpoints/invoice");
const subscription_1 = require("./endpoints/subscription");
const bank_1 = require("./endpoints/bank");
const User_1 = require("./endpoints/User");
class Checkbook {
    constructor(config) {
        if (!config.env || !_.includes(["demo", "sandbox"], config.env)) {
            config.env = "www";
        }
        if (config.bearer) {
            config.auth = "Bearer " + config.bearer;
        }
        else if (config.api_key && config.api_secret) {
            config.auth = config.api_key + ":" + config.api_secret;
        }
        else {
            throw "Invalid Authorization";
        }
        this.resource = new resource_1.Resource(config);
        this.checks = new check_1.Check(this.resource);
        this.invoices = new invoice_1.Invoice(this.resource);
        this.subscriptions = new subscription_1.Subscription(this.resource);
        this.banks = new bank_1.Bank(this.resource);
        this.users = new User_1.User(this.resource);
    }
}
exports.Checkbook = Checkbook;
//# sourceMappingURL=checkbook.js.map
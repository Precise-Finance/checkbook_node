"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check = void 0;
class Check {
    constructor(resource) {
        this.resource = resource;
    }
    list(query, callback) {
        return this.resource.request({
            method: "GET",
            uri: "/check",
            qs: query,
        }, callback);
    }
    get(check_id, callback) {
        return this.resource.request({
            method: "GET",
            uri: "/check/" + check_id,
        }, callback);
    }
    delete(check_id, callback) {
        return this.resource.request({
            method: "DELETE",
            uri: "/check/" + check_id,
        }, callback);
    }
    deposit(check_id, params, callback) {
        return this.resource.request({
            method: "POST",
            uri: "/check/deposit/" + check_id,
            body: params,
        }, callback);
    }
    sendDigitalCheck(params, callback, idempotencyKey) {
        return this.resource.request({
            method: "POST",
            uri: "/check/digital",
            body: params,
        }, callback, idempotencyKey);
    }
    sendPhysicalCheck(params, callback, idempotencyKey) {
        return this.resource.request({
            method: "POST",
            uri: "/check/physical",
            body: params,
        }, callback, idempotencyKey);
    }
    sendDirectCheck(params, callback, idempotencyKey) {
        return this.resource.request({
            method: "POST",
            uri: "/check/direct",
            body: params,
        }, callback, idempotencyKey);
    }
    sendMultipleChecksCSV(params, callback, idempotencyKey) {
        return this.resource.request({
            method: "POST",
            uri: "/check/csv",
            body: params,
        }, callback, idempotencyKey);
    }
    triggerWebhook(params, callback) {
        return this.resource.request({
            method: "PUT",
            uri: "/check/webhook/" + params.check_id,
            body: {
                status: params.status,
                options: params.return_code ? { return_code: params.return_code } : undefined,
            },
        }, callback);
    }
}
exports.Check = Check;
//# sourceMappingURL=check.js.map
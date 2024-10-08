import { Resource } from "../resource";
export declare class Bank {
    private readonly resource;
    constructor(resource: Resource);
    list(callback: (err: any, response: any) => void): void;
    institutions(callback: (err: any, response: any) => void): void;
    delete(bank_id: any, callback: (err: any, response: any) => void): void;
    instantAccountVerification(params: any, callback: (err: any, response: any) => void, idempotencyKey?: any): void;
    instantAccountVerificationPlaid(params: {
        processor_token: string;
    }, callback: (err: any, response: any) => void, idempotencyKey?: any): void;
    addBankAccount(params: any, callback: (err: any, response: any) => void, idempotencyKey?: any): void;
    releaseMicrodeposits(params: any, callback: (err: any, response: any) => void): void;
    verifyMicrodeposits(params: any, callback: (err: any, response: any) => void): void;
    update(bank_id: any, params: any, callback: (err: any, response: any) => void): void;
}

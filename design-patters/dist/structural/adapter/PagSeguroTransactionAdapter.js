"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PagSeguroTransactionAdapter {
    constructor(pagseguroTransaction) {
        this.trackNumber = pagseguroTransaction.code;
        this.amount = pagseguroTransaction.grossAmount;
        this.status = this.convertStatus(pagseguroTransaction.status);
    }
    convertStatus(status) {
        switch (status) {
            case '1':
                return 'waiting_payment';
            case '2':
                return 'paid';
            case '3':
                return 'refunded';
            default:
                return 'Unknown';
        }
    }
}
exports.default = PagSeguroTransactionAdapter;

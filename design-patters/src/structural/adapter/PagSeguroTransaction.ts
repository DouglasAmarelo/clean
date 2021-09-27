export default class PagSeguroTransaction {
  code: string;
  grossAmount: number;
  status: string;

  constructor(code: string, grossAmount: number, status: string) {
    this.code = code;
    this.grossAmount = grossAmount;
    this.status = status;
  }
}

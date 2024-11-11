import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (valor: number): void => {
        this.balance  += (valor + 10)
    }

}

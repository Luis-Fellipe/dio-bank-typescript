import { BonusAccount } from './class/bonusAccount';
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const usuario: PeopleAccount = new PeopleAccount(17, "Arthur", 5)
usuario.deposit(2000)
usuario.withdraw(750)

console.log(usuario);

const company: CompanyAccount = new CompanyAccount("Dio", 6)
company.getLoan(700)

console.log(company);

const bonusAccount: BonusAccount = new BonusAccount("Carlos", 8)

bonusAccount.deposit(100)

console.log(bonusAccount);
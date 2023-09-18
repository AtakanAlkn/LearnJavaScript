class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getAge() {
    return this.age;
  }
}

class Dog extends Animal {
  getAge() {
    return super.getAge() * 7;
  }
}
class Cat extends Animal {}

const doggy = new Dog("Doggy", 3, "Red", "5");
// console.log(doggy.getAge());

class PersonAccount {
  constructor(firstname, lastname, incomes, expenses) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = [incomes];
    this.expenses = [expenses];
  }
  totalIncome() {
    return this.incomes.reduce((acc, cur) => (acc += cur));
  }
  totalExpense() {
    return this.expenses.reduce((acc, cur) => (acc += cur));
  }
  accountInfo() {
    return `
    Name     :    ${this.firstname} 
    SurName  :    ${this.lastname}
    incomes  :    ${this.totalIncome()}
    expenses :    ${this.totalExpense()}
    Total Balance : ${this.accountBalanc()}
    `;
  }
  addIncome(income) {
    this.incomes.push(income);
  }
  addExpense(expense) {
    this.expenses.push(expense);
  }
  accountBalanc() {
    let balance = this.totalIncome() - this.totalExpense();
    return balance > 0 ? `+${balance}` : `${balance}`;
  }
}

const personAccount = new PersonAccount("Ataka", "Alkan", 1250, 1850);
personAccount.addIncome(1500);
personAccount.addExpense(200);
personAccount.addExpense(800);
personAccount.addIncome(1000);
console.log(personAccount.accountInfo());
console.log(personAccount.accountBalanc());

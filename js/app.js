class Calculator {
  constructor() {
    this.num1 = document.querySelector('#num1');
    this.num2 = document.querySelector('#num2');
    this.result = document.querySelector('#result');
    this.operation = document.querySelector('#operation');

    document.querySelector('#calculateBtn')
      .addEventListener('click', () => {

        this.compute();
      });
  }

  compute() {
    if (this.verify()) {
      switch (this.operation.value) {
        case 'add': this.add(); break;
        case 'subtract': this.subtract(); break;
        case 'multiply': this.multiply(); break;
        case 'divide': this.divide(); break;
      }
    }
  }

  verify() {
    let errorMsg = [];
    let isPass = true;

    if (this.num1.value === '') {
      errorMsg.push('the first number has not been filled in yet.');
      isPass = false;
    }

    if (this.num2.value === '') {
      errorMsg.push('the second number has not been filled in yet.')
      isPass = false;
    }

    if (! isPass) {
      alert(errorMsg.concat('\n'));
    }

    return isPass;
  }

  add() {
    this.result.innerHTML = Number(this.num1.value) + Number(this.num2.value);
  }

  subtract() {
    this.result.innerHTML = Number(this.num1.value) - Number(this.num2.value);
  }

  multiply() {
    this.result.innerHTML = Number(this.num1.value) * Number(this.num2.value);
  }

  divide() {
    const result = Number(this.num1.value) / Number(this.num2.value);
    this.result.innerHTML = result.toFixed(2);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const calculator = new Calculator();
})
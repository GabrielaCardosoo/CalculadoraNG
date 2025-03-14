import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calc_Bootstrap'
  currentInput: string = '';  // Entrada atual
  previousInput: string = ''; // Entrada anterior
  operator: string = '';      // Operador (+, -, *, /)

  // Captura os cliques nos botões
  handleClick(value: string) {
    if (!isNaN(parseFloat(value)) || value === '.') {
      this.appendNumber(value);
    } else if (['+', '-', '*', '/'].includes(value)) {
      this.setOperation(value);
    } else if (value === '=') {
      this.calculate();
    }
  }

  // Adiciona números ao display
  appendNumber(number: string) {
    this.currentInput += number;
  }

  // Define a operação matemática
  setOperation(op: string) {
    if (this.currentInput === '') return;
    if (this.previousInput !== '') {
      this.calculate();
    }
    this.operator = op;
    this.previousInput = this.currentInput;
    this.currentInput = '';
  }

  // Limpa o display
  clearDisplay() {
    this.currentInput = '';
    this.previousInput = '';
    this.operator = '';
  }

  // Calcula o resultado
  calculate() {
    if (this.previousInput === '' || this.currentInput === '') return;
    let result: number;

    switch (this.operator) {
      case '+':
        result = parseFloat(this.previousInput) + parseFloat(this.currentInput);
        break;
      case '-':
        result = parseFloat(this.previousInput) - parseFloat(this.currentInput);
        break;
      case '*':
        result = parseFloat(this.previousInput) * parseFloat(this.currentInput);
        break;
      case '/':
        if (parseFloat(this.currentInput) === 0) {
          alert('Erro: divisão por zero');
          return;
        }
        result = parseFloat(this.previousInput) / parseFloat(this.currentInput);
        break;
      default:
        return;
    }

    this.currentInput = result.toString();
    this.previousInput = '';
    this.operator = '';
  }
}

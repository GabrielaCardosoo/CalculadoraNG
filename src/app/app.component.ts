import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = '';  // Variável para armazenar os números digitados
  result = '';   // Variável para armazenar o resultado da operação
 
  handleClick(value: string) {
    if (value === '=') {
      // Aqui você pode usar uma função para calcular o valor
      try {
        this.result = eval(this.display);  // Calcula a expressão
      } catch (e) {
        this.result = 'Error';  // Caso tenha um erro na expressão
      }
    } else if (value === 'C') {
      this.clear();  // Se for 'C', limpa tudo
    } else {
      this.display += value;  // Caso contrário, adiciona o valor ao display
    }
  }
 
  clear() {
    this.display = '';  // Limpa o conteúdo digitado
    this.result = '';   // Limpa o resultado
  }
}
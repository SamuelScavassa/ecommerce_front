import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent {
  @Input() nome: string = '';
  @Input() descricao: string = '';
  @Input() preco: string = '0';
}

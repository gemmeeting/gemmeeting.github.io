import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-inscricoes',
  templateUrl: './tab-inscricoes.component.html',
  styleUrls: ['./tab-inscricoes.component.scss'],
})
export class TabInscricoesComponent {
  openInscricoesLink(): void {
    window.open('https://gemmeeting.eventkey.pt/geral/inseririnscricao.aspx?evento=2&formulario=2&chave=0000186665&login=false', '_blank');
  }
}

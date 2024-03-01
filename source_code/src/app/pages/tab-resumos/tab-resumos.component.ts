import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-resumos',
  templateUrl: './tab-resumos.component.html',
  styleUrls: ['./tab-resumos.component.scss'],
})
export class TabResumosComponent {
  openSubmeterResumoLink(): void {
    window.open('https://gemmeeting.eventkey.pt/geral/inserirresumo.aspx?evento=2&formulario=4&chave=0000283DB8&login=false', '_blank');
  }
}

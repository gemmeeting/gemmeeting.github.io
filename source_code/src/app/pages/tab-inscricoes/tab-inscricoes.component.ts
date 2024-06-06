import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab-inscricoes',
  templateUrl: './tab-inscricoes.component.html',
  styleUrls: ['./tab-inscricoes.component.scss'],
})
export class TabInscricoesComponent {
  openInscricoesLink(): void {
    window.open(environment.inscricoesLink, '_blank');
  }

  openSubmitAbstractLink(): void {
    window.open(environment.submitResumosLink, '_blank');
  }
}

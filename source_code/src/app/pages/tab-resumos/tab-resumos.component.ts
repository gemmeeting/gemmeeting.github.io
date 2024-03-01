import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab-resumos',
  templateUrl: './tab-resumos.component.html',
  styleUrls: ['./tab-resumos.component.scss'],
})
export class TabResumosComponent {
  openSubmeterResumoLink(): void {
    window.open(environment.submitResumosLink, '_blank');
  }
}

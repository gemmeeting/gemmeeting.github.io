import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab-contactos',
  templateUrl: './tab-contactos.component.html',
  styleUrls: ['./tab-contactos.component.scss'],
})
export class TabContactosComponent {
  openGoogleMapsLink() {
    window.open(environment.googleMapsLocationLink, '_blank');
  }

  openInscricoesLink(): void {
    window.open(environment.inscricoesLink, '_blank');
  }
}

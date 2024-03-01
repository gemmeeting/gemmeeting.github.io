import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-patrocinios',
  templateUrl: './tab-patrocinios.component.html',
  styleUrls: ['./tab-patrocinios.component.scss'],
})
export class TabPatrociniosComponent {
  openSponsorLink(sponsorLinkString: string): void {
    if (sponsorLinkString) {
      window.open(sponsorLinkString, '_blank');
    }
  }
}

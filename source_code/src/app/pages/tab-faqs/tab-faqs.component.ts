import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab-faqs',
  templateUrl: './tab-faqs.component.html',
  styleUrls: ['./tab-faqs.component.scss'],
})
export class TabFaqsComponent {
  expandAllFaqs = false;

  expandRetractAllFaqs(): void {
    this.expandAllFaqs = !this.expandAllFaqs;
  }

  openGoogleMapsLink() {
    window.open(environment.googleMapsLocationLink, '_blank');
  }
}

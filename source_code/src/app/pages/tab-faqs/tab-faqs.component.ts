import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-tab-faqs',
  templateUrl: './tab-faqs.component.html',
  styleUrls: ['./tab-faqs.component.scss'],
})
export class TabFaqsComponent {
  expandAllFaqs = false;

  constructor(private http: HttpClient) {}

  downloadPDF() {
    this.http.get('./assets/pdfs/FAQs_GEMMeeting2024.pdf', { responseType: 'blob' }).subscribe((res: any) => {
      const url = window.URL.createObjectURL(res);
      saveAs(url, 'FAQs_GEMMeeting2024.pdf');
    });
  }

  expandRetractAllFaqs(): void {
    this.expandAllFaqs = !this.expandAllFaqs;
  }

  openGoogleMapsLink() {
    window.open(environment.googleMapsLocationLink, '_blank');
  }

  openInscricoesLink(): void {
    window.open(environment.inscricoesLink, '_blank');
  }
}

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-tab-programa',
  templateUrl: './tab-programa.component.html',
  styleUrls: ['./tab-programa.component.scss'],
})
export class TabProgramaComponent {
  constructor(private http: HttpClient) {}

  downloadPDF() {
    this.http.get('./assets/pdfs/Programa_GEMMEETING_2024.pdf', { responseType: 'blob' }).subscribe((res: any) => {
      const url = window.URL.createObjectURL(res);
      saveAs(url, 'Programa_GEMMEETING_2024.pdf');
    });
  }
}

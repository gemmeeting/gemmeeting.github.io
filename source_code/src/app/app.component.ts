import { Component } from '@angular/core';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    library: FaIconLibrary,
    faConfig: FaConfig,
  ) {

    
    // importing all solid icons from font-awesome (heavy way of doing this,
    // but it's the easier and cleaner way instead of importing one by one only the ones we use)
    library.addIconPacks(fas); // solid
    faConfig.fixedWidth = true; // setting all icons to a fixed width (just in case...)

    const fullUrl = window.location.href;
    if (!fullUrl.includes('/#')) {
      // isto tenta resolver um bug que o site as vezes nao abria
      // o bug era porque os scripts principais do index.html nao estavam a fazer load pela ordem correta
      // forçar async off pareceu resolver mas vou deixar este aqui na mesma
      window.location.href = fullUrl.split('/')[0] + '/#home';
      window.location.reload();
    }
  }
}

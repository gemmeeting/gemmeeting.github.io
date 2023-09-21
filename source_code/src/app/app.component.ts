import { Component } from '@angular/core';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

const SCRIPT_PATH = './assets/scripts/slides.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gemmeeting';

  constructor(
    library: FaIconLibrary,
    faConfig: FaConfig,
  ) {
    let node = document.createElement('script');
    node.src = SCRIPT_PATH;
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('body')[0].appendChild(node);

    
    // importing all solid icons from font-awesome (heavy way of doing this,
    // but it's the easier and cleaner way instead of importing one by one only the ones we use)
    library.addIconPacks(fas); // solid
    faConfig.fixedWidth = true; // setting all icons to a fixed width (just in case...)

    const fullUrl = window.location.href;
    if (!fullUrl.includes('/#')) {
      // isto tenta resolver um bug que o site as vezes nao abria e fica bugado
      window.location.href = fullUrl.split('/')[0] + '/#home';
    }
  }
}

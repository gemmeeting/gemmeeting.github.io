import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, ISourceOptions } from 'tsparticles-engine';
import { Observable, Subscription } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  id = 'tsparticles';

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = 'http://foo.bar/particles.json';

  showMenu = false;

  hamburgerOpen = false;
  animateHamburgerClosing = false;

  expandAllFaqs = false;

  // menu scroll show hide
  previousScrollY = 0;
  previousScrollRoute = '';
  hideTopBar = false;

  /* or the classic JavaScript object */
  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: '#fff',
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -10,
    },
    fpsLimit: 20,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.grab,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffb300',
      },
      links: {
        color: '#ffb300',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 0.5, max: 2 },
      },
    },
    detectRetina: true,
  };

  observableWidth: Observable<any>;

  subscriptions = new Array();

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.observableWidth = this.breakpointObserver.observe('(min-width: 1000px)');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showMenu = true;
    }, 1000);

    this.observableWidth.subscribe(matches => {
      if (matches && this.hamburgerOpen) {
        this.closeHamburger();
      }
    });

    this.checkScrollHeight();
  }

  ngOnDestroy(): void {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach((subscription: Subscription) => {
        subscription.unsubscribe();
      });
    }
  }

  openGoogleMapsLink() {
    window.open('https://goo.gl/maps/kQ6cybC1yVkzgogZ8', '_blank');
  }

  openSponsorLink(sponsorLinkString: string): void {
    if (sponsorLinkString) {
      window.open(sponsorLinkString, '_blank');
    }
  }

  openHamburger(): void {
    this.hamburgerOpen = true;
  }

  closeHamburger(): void {
    this.animateHamburgerClosing = true;
    setTimeout(() => {
      this.hamburgerOpen = false;
      this.animateHamburgerClosing = false;
    }, 300);
  }

  menuClick(urlString: string): void {
    if (urlString) {
      // only adds the hashtag
      window.location.href = urlString;
    }

    this.closeHamburger();
  }

  openInscricoesLink(): void {
    window.open('https://gemmeeting.eventkey.pt/geral/inseririnscricao.aspx?evento=2&formulario=2&chave=0000186665&login=false', '_blank');
  }

  openSubmeterResumoLink(): void {
    window.open('https://gemmeeting.eventkey.pt/geral/inserirresumo.aspx?evento=2&formulario=4&chave=0000283DB8&login=false', '_blank');
  }

  expandRetractAllFaqs(): void {
    this.expandAllFaqs = !this.expandAllFaqs;
  }

  // verifica o scroll atual do content segundo a route ativa, e da hide/show da topbar
  checkScrollHeight() {
    const processData = (element: HTMLElement) => {
      if (element) {
        if (element.scrollTop > this.previousScrollY) {
          this.hideTopBar = true;
        } else if (element.scrollTop < this.previousScrollY) {
          this.hideTopBar = false;
        }

        this.previousScrollY = element.scrollTop;
      }
    };

    const checkRoute = () => {
      const activeScreenDiv = this.router.url?.replace('/#', '');

      if (this.previousScrollRoute !== activeScreenDiv) {
        this.previousScrollY = 0;
        this.hideTopBar = false;
      }

      this.previousScrollRoute = activeScreenDiv;

      // algumas rotas nao precisam

      if (activeScreenDiv === 'home') {
        const element = document.getElementById('content-home');
        if (element) processData(element);
      } else if (activeScreenDiv === 'equipa') {
        const element = document.getElementById('content-equipa');
        if (element) processData(element);
      } else if (activeScreenDiv === 'programa') {
        const element = document.getElementById('content-programa');
        if (element) processData(element);
      } else if (activeScreenDiv === 'abstracts') {
        const element = document.getElementById('content-abstracts');
        if (element) processData(element);
      } else if (activeScreenDiv === 'faqs') {
        const element = document.getElementById('content-faqs');
        if (element) processData(element);
      } else if (activeScreenDiv === 'sponsors') {
        const element = document.getElementById('content-sponsors');
        if (element) processData(element);
      }
    };

    window.addEventListener('wheel', event => {
      checkRoute();
    });

    window.addEventListener('touchmove', event => {
      checkRoute();
    });
  }
}

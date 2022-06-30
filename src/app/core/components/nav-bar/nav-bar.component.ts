import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthProcessingService } from '../../services/auth-processing.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(
    private authProcessingService: AuthProcessingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initItems();
  }

  initItems() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home pi-power-off',
        command: () => this.router.navigate(['']),
      },
      {
        label: 'Déconnexion',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.logout(),
      },
    ];
  }

  logout() {
    this.authProcessingService.logout();
  }
}

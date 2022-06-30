import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthProcessingService } from '../../services/auth-processing.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private authProcessingService: AuthProcessingService) {}

  ngOnInit(): void {
    this.initItems();
  }

  initItems() {
    this.items = [
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

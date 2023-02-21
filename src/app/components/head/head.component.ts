import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  banner = 'assets/logos/banner.png';
  account = 'assets/logos/account.png';
  name = 'Nombre';
  rank = 'Rango';
  labels = '#labels';

}
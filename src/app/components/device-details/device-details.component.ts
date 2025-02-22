import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-device-details',
  imports: [MatListModule],
  templateUrl: './device-details.component.html',
  styleUrl: './device-details.component.scss'
})
export class DeviceDetailsComponent {
  public deviceOptions = [
    {
      label: 'iphone',
      value: '112'
    },
    {
      label: 'computer',
      value: 'asus'
    },
  ];
}

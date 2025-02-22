import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-device-list',
  imports: [MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule],
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.scss'
})
export class DeviceListComponent {
  public devices: IDeviceDataInterface[] = [
    {
      position: '1',
      name: 'iPhone',
      model: '16 pro max',
      id: '12345',
      date: '19.02.2025'
    }];
  public displayedColumns = '';
}

export interface IDeviceDataInterface {
  position: string;
  name: string;
  model: string;
  id: string;
  date: string;
}

import { Component } from '@angular/core';
import { WaitlistComponent } from '../../components/waitlist/waitlist.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WaitlistComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

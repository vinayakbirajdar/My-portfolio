import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'app/assets/resume/VinayakBirajdarResume.pdf';
    link.download = 'Vinayak_Birajdar_Resume.pdf';
    link.click();
  }

}

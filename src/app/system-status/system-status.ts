import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-system-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './system-status.html',
  styleUrls: ['./system-status.css']
})
export class SystemStatusComponent { // Make sure it's exported as SystemStatusComponent
  showOptimal = false;
  showWarning = false;
  showCritical = false;

  toggleStatusDetails(type: string) {
    // Close all first
    this.showOptimal = false;
    this.showWarning = false;
    this.showCritical = false;

    // Open the clicked one
    switch (type) {
      case 'optimal':
        this.showOptimal = true;
        break;
      case 'warning':
        this.showWarning = true;
        break;
      case 'critical':
        this.showCritical = true;
        break;
    }
  }
}
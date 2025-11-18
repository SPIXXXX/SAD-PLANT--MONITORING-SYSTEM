import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-watering',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './watering.html',
  styleUrls: ['./watering.css']
})
export class WateringComponent { // Make sure it's exported as WateringComponent
  intensityValue = 50;
  wateringActive = false;
  timeRemaining = '00:30';
  showModal = false;
  scheduleTime = '12:00';
  selectedDays: string[] = [];
  schedules: any[] = [];

  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  private countdownInterval: any;

  updateIntensity(event: any) {
    this.intensityValue = event.target.value;
  }

  startWatering() {
    this.wateringActive = true;
    let timeLeft = 30;

    this.countdownInterval = setInterval(() => {
      timeLeft--;
      const mins = Math.floor(timeLeft / 60);
      const secs = timeLeft % 60;
      this.timeRemaining = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      
      if (timeLeft <= 0) {
        this.stopWatering();
      }
    }, 1000);
  }

  stopWatering() {
    this.wateringActive = false;
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    this.timeRemaining = '00:30';
  }

  openScheduleModal() {
    this.showModal = true;
  }

  closeScheduleModal() {
    this.showModal = false;
    this.selectedDays = [];
    this.scheduleTime = '12:00';
  }

  toggleDay(day: string, event: any) {
    if (event.target.checked) {
      this.selectedDays.push(day);
    } else {
      this.selectedDays = this.selectedDays.filter(d => d !== day);
    }
  }

  saveSchedule() {
    if (!this.scheduleTime || this.selectedDays.length === 0) {
      alert('Please select a time and at least one day');
      return;
    }

    const schedule = {
      id: Date.now(),
      time: this.scheduleTime,
      days: this.selectedDays.join(', ')
    };

    this.schedules.push(schedule);
    this.closeScheduleModal();
  }

  removeSchedule(id: number) {
    this.schedules = this.schedules.filter(s => s.id !== id);
  }
}
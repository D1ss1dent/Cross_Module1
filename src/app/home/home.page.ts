import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputFormComponent } from '../components/input-form/input-form.component';
import { SequenceService } from '../services/sequence.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, InputFormComponent],
})
export class HomePage {
  sequence: number[] = [];
  randomNumbers: number[] = [];
  sum: number = 0;
  product: number = 1;
  average: number = 0;

  constructor(private sequenceService: SequenceService) { }

  onFormSubmit(count: number) {
    if (count <= 0) {
      this.randomNumbers = [];
      this.sequence = [];
      this.sum = 0;
      this.product = 1;
      this.average = 0;
      return;
    }

    const firstNumber = this.sequenceService['getRandomPrime']();
    const otherNumbers = Array.from({ length: count - 1 }, () => Math.floor(Math.random() * (101 - 5 + 1)) + 5);
    this.randomNumbers = [firstNumber, ...otherNumbers];

    this.sequence = this.sequenceService.generateSequence(this.randomNumbers);
    this.sum = this.sequenceService.calculateSum(this.sequence);
    this.product = this.sequenceService.calculateProduct(this.sequence);
    this.average = this.sequenceService.calculateAverage(this.sequence);
  }
}
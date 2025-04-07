import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SequenceService {
  private isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  private findFirstPrimeDivisor(num: number): number | null {
    if (this.isPrime(num)) {
      return null;
    }
    for (let i = 2; i <= num; i++) {
      if (num % i === 0 && this.isPrime(i)) {
        return i;
      }
    }
    return null;
  }

  private getRandomPrime(): number {
    const primes = [];
    for (let i = 5; i <= 101; i++) {
      if (this.isPrime(i)) {
        primes.push(i);
      }
    }
    const randomIndex = Math.floor(Math.random() * primes.length);
    return primes[randomIndex];
  }

  generateSequence(randomNumbers: number[]): number[] {
    const sequence: number[] = [];
    let previousNumber = randomNumbers[0];

    for (let i = 0; i < randomNumbers.length; i++) {
      const currentNumber = randomNumbers[i];

      if (i === 0) {
        sequence.push(currentNumber);
        previousNumber = currentNumber;
      } else {
        if (this.isPrime(currentNumber)) {
          previousNumber = currentNumber + 7;
        } else {
          const divisor = this.findFirstPrimeDivisor(currentNumber);
          if (divisor) {
            previousNumber = currentNumber + 2;
          } else {
            previousNumber = currentNumber + previousNumber;
          }
        }

        sequence.push(previousNumber);
      }
    }

    return sequence;
  }

  calculateSum(sequence: number[]): number {
    return sequence.reduce((sum, num) => sum + num, 0);
  }

  calculateProduct(sequence: number[]): number {
    return sequence.reduce((product, num) => product * num, 1);
  }

  calculateAverage(sequence: number[]): number {
    return sequence.length > 0
      ? this.calculateSum(sequence) / sequence.length
      : 0;
  }
}
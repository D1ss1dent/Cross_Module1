import { TestBed } from '@angular/core/testing';
import { SequenceService } from './sequence.service';

describe('SequenceService', () => {
  let service: SequenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SequenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isPrime', () => {
    it('should return true for prime numbers', () => {
      expect(service['isPrime'](13)).toBeTrue();
      expect(service['isPrime'](37)).toBeTrue();
      expect(service['isPrime'](101)).toBeTrue();
    });

    it('should return false for non-prime numbers', () => {
      expect(service['isPrime'](64)).toBeFalse();
      expect(service['isPrime'](9)).toBeFalse();
      expect(service['isPrime'](1)).toBeFalse();
    });
  });

  describe('findFirstPrimeDivisor', () => {
    it('should return the first prime divisor of a number', () => {
      expect(service['findFirstPrimeDivisor'](64)).toBe(2);
      expect(service['findFirstPrimeDivisor'](15)).toBe(3);
      expect(service['findFirstPrimeDivisor'](49)).toBe(7);
    });

    it('should return null for prime numbers', () => {
      expect(service['findFirstPrimeDivisor'](13)).toBeNull();
      expect(service['findFirstPrimeDivisor'](37)).toBeNull();
    });
  });

  describe('generateSequence', () => {
    it('should generate a sequence of the correct length', () => {
      const randomNumbers = [13, 64, 37];
      const sequence = service.generateSequence(randomNumbers);
      expect(sequence.length).toBe(randomNumbers.length);
    });

    it('should follow the rules for generating the sequence', () => {
      const randomNumbers = [13, 64, 37];
      const sequence = service.generateSequence(randomNumbers);

      const expectedSequence = [13, 66, 44];

      expect(sequence).toEqual(expectedSequence);
    });
  });

  describe('calculateSum', () => {
    it('should calculate the sum of a sequence', () => {
      const sequence = [13, 66, 44];
      expect(service.calculateSum(sequence)).toBe(123);
    });
  });

  describe('calculateProduct', () => {
    it('should calculate the product of a sequence', () => {
      const sequence = [13, 66, 44];
      expect(service.calculateProduct(sequence)).toBe(37752);
    });
  });

  describe('calculateAverage', () => {
    it('should calculate the average of a sequence', () => {
      const sequence = [13, 66, 44];
      expect(service.calculateAverage(sequence)).toBeCloseTo(41, 0);
    });

    it('should return 0 for an empty sequence', () => {
      const sequence: number[] = [];
      expect(service.calculateAverage(sequence)).toBe(0);
    });
  });
});
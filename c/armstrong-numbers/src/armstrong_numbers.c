#include "armstrong_numbers.h"
#include <math.h>

int count_digits(int candidate) {
  int count = 0;
  int mod;
  while (candidate > 0) {
    mod = candidate % 10;
    candidate -= mod;
    candidate /= 10;
    count++;
  }
  return count;
}

int calculate_armstrong_number(int digit_count, int candidate) {
  int accumulator = 0;
  int mod;
  while (candidate > 0) {
    mod = candidate % 10;
    accumulator += pow(mod, digit_count);
    candidate -= mod;
    candidate /= 10;
  }
  return accumulator;
}

int is_armstrong_number(int candidate) {
  if (candidate == 0) {
    return 1;
  }
  int digit_count = count_digits(candidate);
  int armstrong_number = calculate_armstrong_number(digit_count, candidate);
  return armstrong_number == candidate;
}

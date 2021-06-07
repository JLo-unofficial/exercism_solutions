#include "armstrong_numbers.h"
#include <math.h>

// localized static helper function
// count_digits accepts an int and returns the number of digits
static int count_digits(int candidate) {
  // Use for loop to increment count more succinctly
  int count = 0;
  for (; candidate > 0; candidate /= 10) {
    count++;
  }
  return count;
}

int is_armstrong_number(int candidate) {
  int digit_count = count_digits(candidate);
  // Use for loop to calculate armstrong number more succinctly
  int armstrong_number = 0;
  for (; candidate > 0; candidate /= 10) {
    int mod = candidate % 10;
    armstrong_number += pow(mod, digit_count);
  }

  return armstrong_number == candidate;
}

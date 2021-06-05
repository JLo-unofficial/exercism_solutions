#include "armstrong_numbers.h"
#include <math.h>

// local static helper function
static int count_digits(int candidate) {
  int count = 0;
  // more succinct loop to increment count
  for (; candidate > 0; candidate /= 10) {
    count++;
  }
  return count;
}

int is_armstrong_number(int candidate) {
  int digit_count = count_digits(candidate);
  int armstrong_number = 0;
  for (int i = candidate; i > 0; i /= 10) {
    armstrong_number += pow(i % 10, digit_count);
  }
  return armstrong_number == candidate;
}

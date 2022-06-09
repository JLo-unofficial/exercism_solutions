#include "hamming.h"
#include <string.h>

/**
 * @brief Compute the hamming difference between two strings of equal length
 *
 * @param lhs Left sequence
 * @param rhs Right sequence
 * @return Number of positions that differ
 */
int compute(const char *lhs, const char *rhs) {
  int lhs_length = strlen(lhs);
  int rhs_length = strlen(rhs);

  if (lhs_length != rhs_length) {
    return -1;
  }

  int count = 0;
  for (int i = 0; i < lhs_length; i++) {
    if (lhs[i] != rhs[i]) {
      count += 1;
    }
  }
  return count;
}

#include "hamming.h"
#include <string.h>

/**
 * @brief Compute 
 *
 * @param lhs [TODO:parameter]
 * @param rhs [TODO:parameter]
 * @return [TODO:return]
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

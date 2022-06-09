#include "etl.h"

int convert(const legacy_map *input, const size_t input_len, new_map **output) {
  int new_map_length = 0;
  for (unsigned int i = 0; i < input_len; i++) {
    for (unsigned int j = 0; j < strlen(input[i].keys); j++) {
      new_map_length++;
    }
  }

  new_map result[new_map_length];
  for (unsigned int i = 0; i < input_len; i++) {
    for (unsigned int j = 0; j < strlen(input[i].keys); j++) {
      result[i].key = input[i].keys[j];
      result[i].value = input[i].value;
    }
  }

  *output = result;
  return new_map_length;
}

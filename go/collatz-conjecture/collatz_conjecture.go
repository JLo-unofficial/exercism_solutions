package collatzconjecture

import "errors"

var counter int

func CollatzConjecture(n int) (int, error) {
  if n < 1 {
    return 0, errors.New("Input is invalid")
  }
  counter = 0
  for n > 1 {
    if n%2 == 0 {
      n /= 2
    } else {
      n = 3*n+1
    }
    counter++
  }
  return counter, nil
}

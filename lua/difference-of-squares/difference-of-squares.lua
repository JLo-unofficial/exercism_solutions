-- Returns the square of the summation of integers from 1 to n
local function square_of_sum(n)
  return (((n+1)*n)/2)^2
end

-- Returns the summation of squares from 1^2 to n^2
local function sum_of_squares(n)
  return (n*(n+1)*(2*n+1))/6
end

-- Returns the difference between the square of sums and the sum of squares
local function difference_of_squares(n)
  return square_of_sum(n) - sum_of_squares(n)

end

return {
  square_of_sum = square_of_sum,
  sum_of_squares = sum_of_squares,
  difference_of_squares = difference_of_squares
}

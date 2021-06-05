local calculate_product = function(numeric_string)
  -- Simple loop to calculate product from string of digits
  local result = 1
  for digit, _ in string.gmatch(numeric_string, '.') do
    -- Slight optimizationj
    if digit == '0' then
      return 0
    end

    result = result * tonumber(digit)
  end
  return result
end

local calculate_lsp = function(params)
  -- Error handling
  if #params.digits < params.span then
    error('Span cannot be larger than length of digits')
  elseif params.span < 0 then
    error('Span cannot be negative')
  end

  -- Simple loop to find largest values
  local largest = 0
  for idx = 1, (#params.digits - params.span + 1) do
    local indices = { ['start'] = idx, ['end'] = idx + params.span - 1 }
    local numeric_substring = params.digits:sub(indices['start'], indices['end'])
    local product = calculate_product(numeric_substring)
    if product > largest then
      largest = product
    end
  end
  return largest
end

return calculate_lsp

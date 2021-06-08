--- Simple binary search implementation on a sorted table of ints
-- @module binary-search
--- Find the midpoint index given a range of indices
-- @tparam int start_idx starting index to search
-- @tparam int end_idx ending index of range
-- @treturn int calculated midpoint index
-- @function find_midpoint
local find_midpoint = function(start_idx, end_idx)
  local mid = end_idx - start_idx
  if mid % 2 == 0 then
    return (mid / 2) + start_idx
  else
    return ((mid + 1) / 2) + start_idx
  end
end

--- Binary search funcion
-- @tparam table array sorted list of integers
-- @tparam int target Value to find in passed in array
-- @treturn int Index at which target was found in array; returns -1 if target not in array
return function(array, target)
  local arr_len = #array

  -- Return if array if empty
  if arr_len < 1 then
    return -1
  end

  -- Check extremeties to see if the target is in the array
  -- If the first element is larget than the target, the element does not exist in the array
  if array[1] > target then
    return -1
  elseif array[1] == target then
    return 1
  end

  -- If the last element is smaller than the target, the element does not exist in the array
  if array[#array] < target then
    return -1
  elseif array[#array] == target then
    return #array
  end

  -- Create range table with ranges and midpoint
  local range = { 1, find_midpoint(1, #array), #array }
  while range[3] - range[1] > 0 do
    if target == array[range[1]] then
      return range[1]
    elseif target > array[range[1]] then
      range[1] = range[2]
      range[2] = find_midpoint(range[1], range[3])
    elseif target < array[range[1]] then
      range[3] = range[2]
      range[2] = find_midpoint(range[1], range[3])
    end
  end
  return -1

end

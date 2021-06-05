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

--- Range metatable to hold indices when searching for target value
-- @field start Starting index for range
-- @field end Ending index for range
-- @field calls A count which increments whenever mid is accessed
-- @field mid A function call to find the midpoint using the start and end values of the table
-- @table range
local range = setmetatable({ ['start'] = 1, ['end'] = nil, calls = 0 }, {
  __index = function(self, key)
    if key == 'mid' then
      self.calls = self.calls + 1
      return find_midpoint(self['start'], self['end'])
    end
  end,
})

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

  -- Begin searching through array for target
  range['end'] = #array
  local max_iterations = range['mid']
  -- Set an upper bound to iterations equal to initial calculated midpoint
  while range.calls <= max_iterations do
    local mid_idx = range['mid']
    local target_val = array[mid_idx]

    if target == target_val then
      return mid_idx
    elseif target > target_val then
      range['start'] = mid_idx
    elseif target < target_val then
      range['end'] = mid_idx
    end
  end

  -- Target not found in array
  return -1

end

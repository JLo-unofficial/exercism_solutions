-- Set metatable to keep all letter points
-- If key is not in table, simply return 0
local letter_points = setmetatable({
  A = 1,
  B = 3,
  C = 3,
  D = 2,
  E = 1,
  F = 4,
  G = 2,
  H = 4,
  I = 1,
  J = 8,
  K = 5,
  L = 1,
  M = 3,
  N = 1,
  O = 1,
  P = 3,
  Q = 10,
  R = 1,
  S = 1,
  T = 1,
  U = 1,
  V = 4,
  W = 4,
  X = 8,
  Y = 4,
  Z = 10,
}, {
  __newindex = function()
    return 0
  end,
})

local score = function(word)
  -- Simple loop to accumulate points per word
  local points = 0
  for letter, _ in word:gmatch('.') do
    points = points + letter_points[letter:upper()]
  end
  return points
end

return { score = score }

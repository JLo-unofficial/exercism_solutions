return {
  valid = function(s)

    -- Hold key/value pair for terminal/inital bracket pairs respectively
    local complement = { [']'] = '[', [')'] = '(', ['}'] = '{' }

    -- Table will act like a stack and hold previously seen brackets
    local seen_brackets = {}

    -- Iterate through input string "s" for bracket characters
    local bracket_patterns = '[%[%](){}]'
    for bracket, _ in string.gmatch(s, bracket_patterns) do

      -- If the current bracket is a terminal bracket and matches with the last
      -- bracket in the seen_brackets stack, pop the last bracket from the stack
      if complement[bracket] and seen_brackets[#seen_brackets] == complement[bracket] then
        table.remove(seen_brackets)
      else
        table.insert(seen_brackets, bracket)
      end
    end

    -- A valid string should result in an empty table
    return #seen_brackets == 0

  end,
}

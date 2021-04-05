local house = {}


-- Global variable to hold all verses
VERSES = {
  {
    noun = "house that Jack built",
    verb = "lay in"
  },
  {
    noun = "malt",
    verb = "ate"
  },
  {
    noun = "rat",
    verb = "killed"
  },
  {
    noun = "cat",
    verb = "worried"
  },
  {
    noun = "dog",
    verb = "tossed"
  },
  {
    noun = "cow with the crumpled horn",
    verb = "milked"
  },
  {
    noun = "maiden all forlorn",
    verb = "kissed"
  },
  {
    noun = "man all tattered and torn",
    verb = "married"
  },
  {
    noun = "priest all shaven and shorn",
    verb = "woke"
  },
  {
    noun = "rooster that crowed in the morn",
    verb = "kept"
  },
  {
    noun = "farmer sowing his corn",
    verb = "belonged to"
  },
  {
    noun = "horse and the hound and the horn",
    verb = ""
  }
}


-- Converts current verse as line
local create_verse = function(verse)
  return table.concat({
    "that",
    verse.verb,
    "the",
    verse.noun
  }, " ")
end


-- Returns specified verse
house.verse = function(which)
  local verse = {"This is the "..VERSES[which].noun}

  for i=which-1, 1, -1 do
    table.insert(verse, create_verse(VERSES[i]))
  end

  return table.concat(verse, "\n").."."
end


-- Returns the enitire contents of VERSES
house.recite = function()
  local song = {}

  for i=1,#VERSES do
    table.insert(song, house.verse(i))
  end
  return table.concat(song, "\n")

end


return house

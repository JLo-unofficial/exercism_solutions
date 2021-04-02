local house = {}


house.verses = {}
table.insert(house.verses, {
  noun = "house that Jack built",
  verb = "lay in"
})

table.insert(house.verses, {
  noun = "malt",
  verb = "ate"
})

table.insert(house.verses, {
  noun = "rat",
  verb = "killed"
})

table.insert(house.verses, {
  noun = "cat",
  verb = "worried"
})

table.insert(house.verses, {
  noun = "dog",
  verb = "tossed"
})

table.insert(house.verses, {
  noun = "cow with the crumpled horn",
  verb = "milked"
})

table.insert(house.verses, {
  noun = "maiden all forlorn",
  verb = "kissed"
})

table.insert(house.verses, {
  noun = "man all tattered and torn",
  verb = "married"
})

table.insert(house.verses, {
  noun = "priest all shaven and shorn",
  verb = "woke"
})

table.insert(house.verses, {
  noun = "rooster that crowed in the morn",
  verb = "kept"
})

table.insert(house.verses, {
  noun = "farmer sowing his corn",
  verb = "belonged to"
})

table.insert(house.verses, {
  noun = "horse and the hound and the horn",
  verb = ""
})


-- Converts current verse as line
house.create_verse = function(verse)
  return table.concat({
    "that",
    verse.verb,
    "the",
    verse.noun
  }, " ")
end


-- Returns specified verse
house.verse = function(which)
  local verse = {"This is the "..house.verses[which].noun}

  for i=which-1, 1, -1 do
    table.insert(verse, house.create_verse(house.verses[i]))
  end

  return table.concat(verse, "\n").."."
end


-- Returns the enitire contents of house.verses
house.recite = function()
  local song = {}

  for i=1,#house.verses do
    table.insert(song, house.verse(i))
  end
  return table.concat(song, "\n")

end


return house

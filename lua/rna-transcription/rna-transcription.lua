local translation = { A = 'U', T = 'A', C = 'G', G = 'C' }

-- Neat use of gsub
return function(strand)
  return strand:gsub('.', function(nucleotide)
    return translation[nucleotide]
  end)
end

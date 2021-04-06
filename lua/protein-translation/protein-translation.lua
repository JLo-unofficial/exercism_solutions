CODONS = {node=nil, children={}, value=nil}

function CODONS.insert(codon_trie, rna_triplet, protein)
  local current_node = codon_trie
  for _,nucleotide in ipairs(rna_triplet) do
    if current_node.children[nucleotide] == nil then
      current_node.children[nucleotide] = {node=nucleotide, children={}, value=nil}
    end
    current_node = current_node.children[nucleotide]
  end
  current_node.value = protein
end

function CODONS.get(codon_trie, rna_triplet)
  local current_node = codon_trie
  for _, nucleotide in ipairs(rna_triplet) do
    if current_node.children[nucleotide] == nil then
      return nil
    end
    current_node = current_node.children[nucleotide]
  end
  return current_node.value
end

local function translate_codon(codon)

end

local function translate_rna_strand(rna_strand)

end

return {
  codon = translate_codon,
  rna_strand = translate_rna_strand
}

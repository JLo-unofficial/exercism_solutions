"
" Given a phrase, return a dictionary containing the count of occurrences of
" each word.
"
" Example:
"
"   :echo WordCount('olly olly in come free')
"   {'olly': 2, 'come': 1, 'in': 1, 'free': 1}
"
function! WordCount(phrase) abort
  let result = {}

  for word in split(phrase)
    let result[word] = get(result, word) + 1
  endfor

  return result
endfunction

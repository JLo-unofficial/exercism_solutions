const rainSounds = new Map<number, string>([
  [3, "Pling"],
  [5, "Plang"],
  [7, "Plong"],
])

/**
* @param value - [TODO:description]
* @returns [TODO:return]
*/
export function convert(value: number): string {
  let result = ''
  rainSounds.forEach((sound: string, operand: number) => {
    if (value % operand == 0) {
      result = `${result}${sound}`
    }
  })
  return result.length > 0 ? result : `${value}`
}

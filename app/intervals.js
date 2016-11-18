const WHITE = 'WHITE',
      BLACK = 'BLACK'


const pattern = [WHITE, BLACK, WHITE, BLACK, WHITE, WHITE, BLACK, WHITE, BLACK, WHITE, BLACK, WHITE]

export default (count, callback) => {
  const intervals = []
  
  for (let i=0; i < count; i++) {
    intervals.push(pattern[i % 12])
  }

  return intervals.map(callback)
}

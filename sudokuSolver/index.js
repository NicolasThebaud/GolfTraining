var g = [
  [0,0,8,4,0,3,5,0,6],
  [0,0,3,1,0,2,0,0,4],
  [0,4,5,7,0,0,0,9,0],
  [6,9,0,0,0,5,0,0,7],
  [0,8,0,0,0,0,0,5,0],
  [4,0,0,3,0,0,0,1,8],
  [0,7,0,0,0,6,2,4,0],
  [1,0,0,5,0,7,8,0,0],
  [8,0,6,9,0,1,3,0,0]
];

(() => {
  let print_ = g => console.log([...g].join('\n')),
      solve = g => {
        let findCell = () => [].concat(...g).indexOf(0),
            linearCheck = (g, row, column, n) => {
              const line = g.map(row => row[column])
              const rowLineIntersection = g[row].concat(line)
              return !rowLineIntersection.includes(n)
            },
            boxCheck = (g, i, j, n) => {
              const box = g.slice(i * 3, i * 3 + 3)
                              .map(row => row.slice(j * 3, j * 3 + 3))
              return !box.includes(n)
            },
            cell = findCell(),
            r = (cell / 9) >> 0,
            d = cell % 9

        if (cell == -1) return true
        for (let n = 1; n <= 9; n++) {
          if (linearCheck(g, r, d, n) && boxCheck(g, (r / 3) >> 0, (d / 3) >> 0, n)) {
            g[r][d] = n
            if (solve(g)) return true
            g[r][d] = 0
          }
        }
        return false
      }

  solve(g)
  print_(g)
})(g)

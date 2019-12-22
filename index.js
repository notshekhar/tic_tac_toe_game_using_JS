let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let number_of_players = 2

let grid = new Grid(3, 3, Cell, ctx)
let players = new Array(new Player('x', grid, ctx), new Player('o', grid, ctx))
let turn = 0
let winner
let win = false
grid.show()
canvas.onclick = e => {
    if (win) {
        console.log('game over')
    } else {

        let x = e.layerX
        let y = e.layerY
        let posI, posJ
        let width = ctx.canvas.width
        let height = ctx.canvas.height
        let cells_width = parseInt(width / grid.cols)
        let cells_height = parseInt(height / grid.rows)
        for (let i = 0; i < grid.rows; i++) {
            for (let j = 0; j < grid.cols; j++) {
                if (x >= i * cells_width && x < i * cells_width + cells_width) {
                    posI = i
                }
                if (y >= j * cells_height && y < j * cells_height + cells_height) {
                    posJ = j
                }
            }
        }
        let t = players[turn]
        if (turn == 0) {
            turn = 1
        } else {
            turn = 0
        }
        document.querySelector('.turn').innerHTML = `${players[turn].name.toUpperCase()}-Turn`
        if (!grid.grid[posI][posJ].occupied) {
            grid.grid[posI][posJ].holder = true
            grid.grid[posI][posJ].player = t
            grid.grid[posI][posJ].occupied = true
            t.tracker.push(grid.grid[posI][posJ])
        }
        if (t.checkWin()) {
            console.log(t)
            win = t.checkWin()
            winner = t
            document.querySelector('.turn').innerHTML = `${winner.name.toUpperCase()}-Win`
            document.querySelector('.reset').disabled = false
        }
        grid.update()
    }
}

document.querySelector('.reset').onclick = () => {
    grid = new Grid(3, 3, Cell, ctx)
    players = new Array(new Player('x', grid, ctx), new Player('o', grid, ctx))
    turn = 0
    winner = ''
    win = false
    grid.show()
    document.querySelector('.reset').disabled = true
    document.querySelector('.turn').innerHTML = "X-Turn"
}
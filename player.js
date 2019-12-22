class Player {
    constructor(name, grid, ctx) {
        this.name = name
        this.grid = grid
        this.ctx = ctx
        this.tracker = []
    }
    check(a, b) {
        return this.tracker.includes(this.grid.grid[a][b])
    }
    checkWin() {
        let conditions = new Array()
        conditions[0] = (this.check(0, 0) && this.check(1, 0) && this.check(2, 0))
        conditions[1] = (this.check(0, 0) && this.check(0, 1) && this.check(0, 2))
        conditions[2] = (this.check(0, 0) && this.check(1, 1) && this.check(2, 2))
        conditions[3] = (this.check(1, 0) && this.check(1, 1) && this.check(1, 2))
        conditions[4] = (this.check(2, 0) && this.check(2, 1) && this.check(2, 2))
        conditions[5] = (this.check(0, 1) && this.check(1, 1) && this.check(2, 1))
        conditions[6] = (this.check(0, 2) && this.check(1, 2) && this.check(2, 2))
        conditions[7] = (this.check(0, 2) && this.check(1, 1) && this.check(2, 0))

        let win = false 
        for(let i=0; i<conditions.length; i++){
            win = win||conditions[i]
        }
        return win
    }
}
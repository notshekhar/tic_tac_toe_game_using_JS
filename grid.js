class Grid {
    constructor(row, column, object, ctx) {
        this.rows = row
        this.cols = column
        this.ctx = ctx
        this.grid = []
        for (let i = 0; i < this.rows; i++) {
            this.grid[i] = new Array()
            for (let j = 0; j < this.cols; j++) {
                this.grid[i][j] = new object(i, j)
            }
        }
    }
    show() {
        let width = this.ctx.canvas.width
        let height = this.ctx.canvas.height
        let cells_width = parseInt(width / this.cols)
        let cells_height = parseInt(height / this.rows)
        for (let j = 0; j < this.rows; j++) {
            for (let i = 0; i < this.cols; i++) {
                this.ctx.beginPath()
                this.ctx.fillStyle = 'white'
                this.ctx.rect(i * cells_width, j * cells_height, cells_width, cells_width)
                this.ctx.fill()
                this.ctx.stroke()
            }
        }
    }
    update() {
        let width = this.ctx.canvas.width
        let height = this.ctx.canvas.height
        let cells_width = parseInt(width / this.cols)
        let cells_height = parseInt(height / this.rows)
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let cell = this.grid[i][j]
                if (cell.holder) {
                    if (cell.player.name == 'x') {
                        this.ctx.beginPath()
                        line(this.ctx, 'black', 10, i * cells_width, j * cells_height, i * cells_width + cells_width, j * cells_height + cells_height)
                        line(this.ctx, 'black', 10, i * cells_width + cells_width, j * cells_height, i * cells_width, j * cells_height + cells_height)
                    } else if (cell.player.name == 'o') {
                        this.ctx.beginPath()
                        this.ctx.arc(i * cells_width + cells_width / 2, j * cells_height + cells_height / 2, cells_width/2, 0, 2*Math.PI)
                        this.ctx.stroke()
                    }
                }
            }
        }
    }
}



//draw a line on canvas
function line(ctx, stroke, width, x, y, nx, ny) {
    ctx.beginPath()
    ctx.strokeStyle = stroke
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = width
    ctx.moveTo(x, y)
    ctx.lineTo(nx, ny)
    ctx.stroke()
}
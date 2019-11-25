class Rectangle {
    private width: number
    private height: number
    private color: string

    constructor(width: number, heigth: number, color: string) {
        this.width = width
        this.height = heigth
        this.color = color
    }

    public getColor(): string {
        return this.color
    }

    public getPerimeter(): number {
        return this.width * 2 + this.height * 2
    }

    public getSquare(): number {
        return this.height * this.width
    }
}

function hasColor(color: string) {
    return function(figure: Rectangle) {
        return figure.getColor() === color
    }
}

let figure: Rectangle = new Rectangle(5, 5, "red")

console.log(hasColor("red")(figure))

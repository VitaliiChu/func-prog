class Rectangle {
    constructor(
        private width: number,
        private height: number,
        private color: string,
        private name: string
    ) {}

    public getColor(): string {
        return this.color
    }

    public getPerimeter(): number {
        return this.width * 2 + this.height * 2
    }

    public getSquare(): number {
        return this.height * this.width
    }

    public getName(): string {
        return this.name
    }
}

function hasColor(color: string) {
    return function(figure: Rectangle) {
        return figure.getColor() === color
    }
}

function map<T>(f: (value: T, index: number, array: T[]) => unknown): Function {
    return (arr: T[]) => arr.map(f)
}

function filter<T>(
    f: (value: T, index: number, array: T[]) => boolean
): Function {
    return (arr: T[]) => arr.filter(f)
}

function reduce<T>(
    f: (total: T, currentValue: T, currentIndex: number, array: T[]) => T,
    initialValue: T
): Function {
    if (initialValue != undefined)
        return (arr: T[]) => arr.reduce(f, initialValue)
    else return (arr: T[]) => arr.reduce(f)
}

let figures: Rectangle[] = [
    new Rectangle(5, 5, "red", "first"),
    new Rectangle(2, 3, "black", "second")
]

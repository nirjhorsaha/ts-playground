{
    interface Square {
        kind: "square";
        size: number;
    }

    interface Rectangle {
        kind: "rectangle";
        height: number;
        width: number;
    }

    type Shape = Square | Rectangle;

    const calculateShape = (shape: Shape) => {
        if ("size" in shape) {
            console.log(shape.size * shape.size);
        } else {
            console.log(shape.height * shape.width);
        }
    };

    const squareShape: Square = {
        kind: "square",
        size: 5,
    };
    const rectangleShape: Rectangle = {
        kind: "rectangle",
        height: 8,
        width: 7,
    };

    calculateShape(rectangleShape);
}

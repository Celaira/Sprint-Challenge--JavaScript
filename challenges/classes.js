// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(attributes) {
        this.propLength = attributes.propLength;
        this.width = attributes.width;
        this.height = attributes.height;
    }

    volume(length, width, height) {
        return length * width * height;
    }

    surfaceArea(length, width, height) {
        return 2 * (length * width + length * height + width * height);
    } 
}


const cuboid = new CuboidMaker({
    propLength: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume(cuboid.propLength, cuboid.width, cuboid.height)); // 100
console.log(cuboid.surfaceArea(cuboid.propLength, cuboid.width, cuboid.height)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
    constructor(cubeAttribs) {
    super(cubeAttribs)



    }
    volume(length) {
        return this.propLength * 3;
    }

    surfaceArea(length) {
        return 6 * (this.propLength * this.propLength);
    }
}

const cube = new CubeMaker({
    propLength: 5,
    width: 3,
    height: 5
});

console.log(cube.volume(cube.propLength), cube.surfaceArea(cube.propLength));
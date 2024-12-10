"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Takephoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
// const mohit = new Takephoto('Test', 'Test'); -> We cannot make objects for abstract class
class Instagram extends Takephoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
// const mohit = new Instagram('Test', 'Test'); -> This is allowed and this is how you will create an instance.
const mohit = new Instagram('Test', 'Test', 3);

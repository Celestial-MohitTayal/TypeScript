abstract class Takephoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void   //abstract method do not need any implementation means no {}
    getReelTime(): number {
        //some complex calculation
        return 8;
    }
}

// const mohit = new Takephoto('Test', 'Test'); -> We cannot make objects for abstract class

class Instagram extends Takephoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

// const mohit = new Instagram('Test', 'Test'); -> This is allowed and this is how you will create an instance.
const mohit = new Instagram('Test', 'Test', 3);
export {}
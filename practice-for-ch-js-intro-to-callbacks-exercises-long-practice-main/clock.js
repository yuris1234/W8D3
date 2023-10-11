class Clock {
    constructor() {
        let date = new Date();
        this.hour = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
        const tickbind = this._tick.bind(this);
        setInterval(this.tickbind, 1000);
    }
    
    printTime() {
        console.log(`${this.hour}:${this.minutes}:${this.seconds}` );

    }
    _tick() {
     this.seconds += 1;
     this.printTime();   
    }
}








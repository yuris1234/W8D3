class Clock {
    debugger
    constructor() {
        debugger
        let date = new Date();
        this.hour = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
       
        setInterval(this.tickbind, 1000);

    }
    const tickbind = this._tick.bind(this);
    
      
    printTime() {
        console.log(`${this.hour}:${this.minutes}:${this.seconds}` );

    }
    _tick() {
     this.seconds += 1;
    //  console.log("Test");
    // debugger;
     this.printTime();   
    }

  

}






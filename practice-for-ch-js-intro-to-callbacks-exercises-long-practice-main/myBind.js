
Function.prototype.myBind = function(context, ...bind_time_args) {
    return (...call_time_args) => this.call(context,  ...call_time_args,...bind_time_args);
}


// turnOn.myBind(lamp, 1,2,3) 


// testing code 

class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function(a) {
    console.log("Turning on " + this.name);
    console.log(a);
  };
  
  const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
//   const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp,2);

  
//   boundTurnOn(1); // should say "Turning on a lamp"
  myBoundTurnOn(1); // should say "Turning on a lamp"
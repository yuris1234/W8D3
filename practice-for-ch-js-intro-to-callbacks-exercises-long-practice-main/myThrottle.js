Function.prototype.myThrottle = function(i) {
    let tooSoon = false;
    return () => {
        if(tooSoon === false) {
            tooSoon = true;
            setTimeout(() => {
                tooSoon = false;
                this();
            }, i)
        }
    } 
}

class Neuron {
    fire() {
      console.log("Firing!");
    }
    constructor(cell) {
        this.cell = cell;
    }
  }
  
  const neuron = new Neuron(1);
  // When you create a new Neuron,
  // you can call #fire as frequently as you want
  
  // The following code will try to #fire the neuron every 10ms. Try it in the console:
//   const interval = setInterval(() => {
//     neuron.fire();
//   }, 10);
  
//   // You can use clearInterval to stop the firing:
//   clearInterval(interval);
  
  // Using Function#myThrottle, you should be able to throttle
  // the #fire function of your neuron so that it can fire only
  // once every 500ms:
  

  neuron.fire = neuron.fire.myThrottle(3000);
  
  setInterval(() => {
    neuron.fire();
  }, 1000);
//   debugger;
//   interval();
  
  // This time, if your Function#myThrottle worked correctly,
  // the Neuron#fire function should only be able to execute
  // every 500ms, even though you're still trying to invoke it
  // every 10ms!
  
  // If you want this behavior for ALL neurons, you can do the same logic in the
  // constructor:
  
//   class Neuron {
//     constructor() {
//       this.fire = this.fire.myThrottle(500);
//     }
  
//     fire() {
//       console.log("Firing!");
//     }
//   }


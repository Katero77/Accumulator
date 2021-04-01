"use strict";


/**
 * 
 * @param {number} startingValue
 * @returns object 
 */


function Accumulator(startingValue) {
 if(!new.target){
  return new Accumulator(startingValue);
}
  this.value = isFinite(startingValue) ? +startingValue : 0;
}

function AccumulatorProto(){
  if(!new.target){
    return new AccumulatorProto();
  }
  this.read = function() {
    while(true){
      const userValue = +prompt("number");
      if(!isNaN(userValue)){
        this.value += userValue;
        break;
      }
      else{
        alert("Invalid input. Try again!");
      }
    }
  };
}
Accumulator.prototype = new AccumulatorProto();

const accumulator = new Accumulator();
accumulator.read();
accumulator.read();
console.log(accumulator.value);

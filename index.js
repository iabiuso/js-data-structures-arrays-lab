// Write your solution here!



const drivers = ["Milo", "Otis", "Garfield"];



//----------- Destructibe ------------------//

function destructivelyAppendDriver(name){
drivers.push("Ralph");
}

function destructivelyPrependDriver(name){
    drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
}
//---------- Unchanged --------------------//
function appendDriver(name){
  return [...drivers, "Broom"];
}

function prependDriver(name){
    return ["Arnold", ...drivers]
}

function removeLastDriver(){
    let driverCopy = drivers.slice(0, drivers.length - 1);
    return driverCopy
}

function removeFirstDriver(){
    let driverSecCopy = drivers.slice(1,3);
    return driverSecCopy
}
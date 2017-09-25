function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  var spy = "HELLO";
  spy.toUpperCase() === spy;
  console.log(spy);
}

function logWhisper(string){
  var spy = "hello";
  spy.toLowerCase() === spy;
  console.log(spy);
}

function sayHiToGrandma(string){
  if (string != string.toLowerCase()){
    return "I can\'t hear you!";
  }
}

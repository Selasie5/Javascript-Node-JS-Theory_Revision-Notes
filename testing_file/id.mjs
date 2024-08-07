export function  id(x){
  return x;
}

export function divideCallback(x,y, callback){
  if(y === 0)
  {
    callback(new Error("Division by zero is not allowed"));
  }
  else
}
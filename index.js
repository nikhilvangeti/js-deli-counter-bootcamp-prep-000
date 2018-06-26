var katzDeliLine = [];


function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  console.log(name + 'is' + katzDeliLine.length + 'in position');
  return katzDeliLine.length;
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine[0] === null)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
  console.log('nowServing '+ katzDeliLine[0]);
  return katzDeliLine[0];
  }
}

function currentLine(katzDeliLine)
{
  if(katzDeliLine.length === 0)
  {
    return 'The line is currently empty'
  }
}
takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
 
currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
 
nowServing(katzDeliLine); // "Currently serving Ada."
 
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"
 
takeANumber(katzDeliLine, "Matz"); // "3"
 
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
 
nowServing(katzDeliLine); // "Currently serving Grace."
 
currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
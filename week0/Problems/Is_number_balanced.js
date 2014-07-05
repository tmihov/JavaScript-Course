"use strict";

var is_number_balanced = function(n) {
  var first_half = [];
  var second_half = [];

  if(n.length === 1)
    return true;

  else {
  var number_list = n.toString().split("");
  var mid = parseInt(number_list.length/2, 10);

  if(number_list.length % 2 === 0) {
    for(var l = 0; l < number_list[mid-1]; l++)
      first_half.push(number_list[l]);

    for(var k = number_list[mid-1]; k < number_list.length; k++)
      second_half.push(number_list[k]);
  }

  else {
  for(var i = 0; i < number_list[mid-1]; i++)
    first_half.push(number_list[i]);

  for(var j = number_list[mid]; j < number_list.length; j++)
    second_half.push(number_list[j]);
  }

/*  console.log(number_list[mid]);
  console.log(first_half);
  console.log(second_half);*/
  var first = first_half.reduce(function(a, b) {return a + b;});
  var second = second_half.reduce(function(a, b) {return a + b;});
    console.log(first);
  console.log(second);
  return first === second;
  }

};

console.log(is_number_balanced(1238033));
exports.is_number_balanced = is_number_balanced;

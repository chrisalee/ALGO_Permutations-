// strings part deux
// 1)all permutations
// create a function that returns all permutations of a given string.
// 
// given "team" => 
// returns ["team", "tema", "taem", "tame", "tmen", "tmae",
//          "etom", "etma", "eatm", "eamt", "emta", "emat",
//          "atem", "atme", "aetm", "aemt", "amte", "amet",
//          "mtea", "mtae", "meta", "meat", "mate", "maet"]

function getAllPermutations(str){
  var output = [];
  if(str.length === 1){
    output.push(str);
    return output;
  }
  for(var i = 0; i < str.length; i++){
    let first = str[i];
    let others = str.substring(0,i) + str.substring(i+1);
    let inner = getAllPermutations(others);
    
    for( var j = 0; j < inner.length; j++){
      output.push(first + inner[j]);
    }
  }
  console.log(output);
  return output;
}

// getAllPermutations("team");
// getAllPermutations("car");
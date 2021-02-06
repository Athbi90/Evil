let floors = 4; //how many floors

buildTower(floors); //function call

//print the return using iteration method 😁

/** 
 * 😈 Introduce to you The evil javascript tower 😈
function recieves number of floors to build a tower
the function returns an array as the following

e.g.
*****[tower of 1 floor]*****
[
  '*'
]
*****[tower of 3 floors]*****
[
  '  *  ', 
  ' *** ', 
  '*****'
]
*****[tower of 6 floors]*****
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/
function buildTower(nFloors) {

  let i = 1
  let y = nFloors
 let flr = []
 let groundSpaces =""
  function stars(i){
      let starsFloor =""
      let x = i + (i - 1)
      for (z=0; z<x; z++){
          starsFloor = `*${starsFloor}`
           } groundSpaces = groundSpaces+starsFloor
           return flr.push(groundSpaces)
  } 
 function floors(y){
      let spaces =""
       let a = 0
   while (a<y){
   spaces = ` ${spaces}`
   a++ 

} return groundSpaces = spaces }       

  while ( i<=nFloors ){
      floors(y)
      stars(i)
      i++
     y-- 
  } flr.forEach(t => console.log(t))
}



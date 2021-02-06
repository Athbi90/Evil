// printer for (int i = 0; i < nums.length; i++) {
    //System.out.println(nums[i]);
//////////////////////////
//function stars(i){
  //  let flr =[]
   // let starsFloor =""
    //let x = i + (i - 1)
    //for (y=0; y<x; y++){
     //   starsFloor = `*${starsFloor}`
    //} return flr = flr.push(starsFloor)
//}

//function floors(num){
 //   let spaces =""
  //  console.log(spaces)
   // let a = 0
    //while (a<num){
     //   spaces = ` ${spaces}`
      ///  a++ 
    //} 
    
  //      return spaces       
//}

function buildTower(nFloors) {
    let i = 1
    let y = nFloors
   let flr = []
   let groundSpaces =""
   //let starsFloor =""
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
        // console.log(spaces)
         let a = 0
     while (a<y){
     spaces = ` ${spaces}`
     a++ 

 } return groundSpaces = spaces        
}

    while ( i<=nFloors ){
        
        floors(y)
        stars(i)
       //flr.map(y => floors(y))
     // console.log(flr)
        i++
       y--
       //flr = flr.splice(0)    
    } flr.forEach(t => console.log(t))
}
    

   

//console.log(`${floorstoarray(5)}`)
//console.log(``)
//console.log(`${floorstoarray(5)}`)

//console.log(`${floors(6)}${stars(1)}`)
//console.log(`${floors(5)}${stars(2)}`)
//console.log(`${floors(4)}${stars(3)}`)
//console.log(`${floors(3)}${stars(4)}`)
//console.log(`${floors(2)}${stars(5)}`)
//console.log(`${floors(1)}${stars(6)}`)
buildTower(10)


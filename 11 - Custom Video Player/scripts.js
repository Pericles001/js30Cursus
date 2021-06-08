let number = [5,4,10,23,12]

function tester(num){
  if(num % 2 != 0 ){
    console.log('Weird')
  }else{
    if(num <= 5 && num >= 2){
      console.log('Not Weird')
    }else if(num >= 6 && num <= 20 ){
      console.log('Weird')
    }else{
      console.log('Not Weird')
    }
  } 
}

number.forEach((elem, index)=>{
  tester(elem)
})
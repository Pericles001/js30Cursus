let grades =  [-5,105,95,75,05,15,25,35,45,55,65]


function gradingStudents(arr){
arr.forEach((elem, index)=>{
   if(elem < 38){
       arr.splice(index, 1)
   }
   console.log(arr)
})
return 'try'
}

gradingStudents(grades)
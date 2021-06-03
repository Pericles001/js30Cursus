let grades = [-5, 105, 95, 75, 05, 15, 25, 35, 45, 55, 65];

function gradingStudents(arr) {
  arr.forEach((elem, index) => {
    if (elem < 38 && arr[index+1] < 38) {
      arr.splice(index, 2);
    }else if(elem < 38){
        arr.splice(index, 1);
    }
    console.table(elem, arr[index+1])
  });

  return "try";
}

gradingStudents(grades);
/*


  */

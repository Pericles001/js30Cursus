let grades = [-5, 105, 95, 75, 05, 15, 25, 35, 45, 55, 65, 87, 17, 67];

function gradingStudents(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 38) {
            arr.forEach((elem, index) => {

                if (elem < 38 && arr[index + 1] < 38) {
                    arr.splice(index, 2);
                } else if (elem < 38) {
                    arr.splice(index, 1);
                } else if (arr[index + 1] < 38) {
                    arr.splice(index + 1, 1);
                }
            });
        }
    }

    return (arr);
}

gradingStudents(grades);
/*


  */
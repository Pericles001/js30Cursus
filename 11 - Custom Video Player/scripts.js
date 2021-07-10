/* test for another purpose
let grades = [-5, 105, 95, 75, 05, 15, 25, 35, 45, 55, 65, 87, 17, 67];

function splitToDigit(n) {
    return (n + "").split("").map((i) => {
        return Number(i);
    });
}

function gradingStudents(arr) {
    //bloc one: delete values below 38

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

    //bloc two : split numbers
    let tmp;
    let lastDigit = [];

    for (let i = 0; i < arr.length; i++) {

        tmp = (arr.toString().split(""));

    }
    console.log(tmp);
    console.log(lastDigit)
    return console.table(arr);
}

gradingStudents(grades);
*/

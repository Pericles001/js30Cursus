/* test for another purpose
let grades = [-5, 105, 95, 75, 05, 15, 25, 35, 45, 55, 65, 87, 17, 67];

function splitToDigit(n) {
    return (n + "").split("").map((i) => {
        return Number(i);
    });
}

function gradingStudents(arr) {
    //block one: delete values below 38

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

    //block two : split numbers
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

/* Get our elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/*Build our functions */

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();

}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
  
}

function handleProgress(){
    const percent = (video.currentTime / video.duration)* 100;
    progressBar.style.flexBasis = `${percent}%`;
}
/* Hook up the event listeners */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate ));

ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate ));


      const hourHand = document.querySelector(".hour-hand");
      const minHand = document.querySelector(".min-hand");
      const secondHand = document.querySelector(".second-hand");

      // function to calculate degree

      const calcDegree = (time, max) => (time / max) * 360 + 90;

      setInterval(function () {
        const now = new Date();
        const secondDegrees = (second / 60) * 360 + 90;
        secondHand.style.transform = `rotate(${calcDegree(
          now.getSeconds(),
          60
        )}deg)`;

        minHand.style.transform = `rotate(${calcDegree(
          now.getMinutes(),
          60
        )}deg)`;

        hourHand.style.transform = `rotate(${calcDegree(
          now.getHours(),
          24
        )}deg)`;
        console.log(hour + ":" + minute + ":" + second);
      }, 1000);
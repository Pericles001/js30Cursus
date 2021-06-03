const dogs = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 },
  ];

  function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
  }

  // Regular
  console.log(dogs);
  // Interpolated
  const interpolation = "💩";
  console.log(
    "testing interpolation: %s <-- this should be pops",
    interpolation
  );
  console.log(
    `this is interpolation test: ${interpolation} <--this should be pops`
  );
  // Styled
  console.log("%c styling maybe ? ", "font-size:1.2em;color:blue;");
  // warning!
  console.warn("Hey you are displaing a warning");
  // Error :|
  console.error("error 404");
  // Info
  console.info("just wanted to inform ");
  // Testing
  const tester = document.querySelector("p");
  console.assert(tester.classList.contains("expected-class-name"), "NOPE!");
  // clearing
  console.clear();
  // Viewing DOM Elements
  console.dir(tester);
  // Grouping together
  dogs.forEach((dog) => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`${dog.name}`);
    console.log(`${dog.name}`);
    console.log(`${dog.name}`);
    console.groupEnd(`${dog.name}`);
  });
  // counting
  console.count("hello");
  console.count("counter");
  console.count("hello");
  console.count("counter");
  // timing
  console.time('fetch data timer')
  fetch('https://api.github.com/users/nitishdayal')
  .then(data=>data.json)
  .then(data=>{
    console.timeEnd('fetch data timer')
    console.log(data)
  })
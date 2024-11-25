function par(name,delay){
   return new Promise((resolve) => {
        setTimeout(() => {
          console.log(name);
          resolve(name);
        }, delay);
      });
}

console.log("start print");
//Parallel
Promise.all([
  par("Gayatri", 1000),
  par("Chandu", 2000),
  par("Jaswanth", 1000)
]).then(() => {
  console.log("All names printed");
});

//Sequnce
console.log("start print");

par("Gayatri", 1000)
  .then(() => par("Chandu", 2000))
  .then(() => par("Jaswanth", 1000))
  .then(() => {
    console.log("All names printed");
  });
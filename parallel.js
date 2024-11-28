function par(name,delay){
   return new Promise((resolve) => {
        setTimeout(() => {
          display(name);
          resolve(name);
        }, delay);
      });
}
function display(message) {
  const fileDiv = document.getElementById("para");
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  fileDiv.appendChild(messageElement);
}

display("start print");
//Parallel
Promise.all([
  par("Gayatri", 1000),
  par("Chandu", 2000),
  par("Jaswanth", 1000)
]).then(() => {
  display("All names printed");
});


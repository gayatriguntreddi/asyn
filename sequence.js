
//Sequence
function par1(name,delay){
    return new Promise((resolve) => {
         setTimeout(() => {
            display1(name);
           resolve(name);
         }, delay);
       });
  }
  function display1(message) {
    const fileDiv = document.getElementById("seq");
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    fileDiv.appendChild(messageElement);
}
  
display1("start print");
  par1("Gayatri", 1000)
    .then(() => par1("Chandu", 2000))
    .then(() => par1("Jaswanth", 1000))
    .then(() => {
        display1("All names printed");
    });
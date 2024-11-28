

function downloadFile(fileName, delay, shouldFail = true) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          displayMessage(`Downloaded: ${fileName}`);
          resolve(fileName);
          
        } else {
            reject(`Failed to download: ${fileName}`);
        }
      }, delay);
    });
  }
  function displayMessage(message) {
    const fileDiv = document.getElementById("file");
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    fileDiv.appendChild(messageElement);
}
  
displayMessage("Starting file downloads...");
  
  downloadFile("File1.txt", 1000)
    .then(() => downloadFile("File2.txt", 1500,false)) 
    .then(() => downloadFile("File3.txt", 2000, true)) 
    .then(() => downloadFile("File4.txt", 1200)) 
    .then(() => {
      displayMessage("All files downloaded successfully!");
    })
    .catch((error) => {
      displayMessage(`Error occurred: ${error}`);
    });
  
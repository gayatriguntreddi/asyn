function downloadFile(fileName, delay, shouldFail = true) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
            console.log(`Downloaded: ${fileName}`);
          resolve(fileName);
          
        } else {
            reject(`Failed to download: ${fileName}`);
        }
      }, delay);
    });
  }
  
  console.log("Starting file downloads...");
  
  downloadFile("File1.txt", 1000)
    .then(() => downloadFile("File2.txt", 1500,false)) 
    .then(() => downloadFile("File3.txt", 2000, true)) 
    .then(() => downloadFile("File4.txt", 1200)) 
    .then(() => {
      console.log("All files downloaded successfully!");
    })
    .catch((error) => {
      console.error(`Error occurred: ${error}`);
    });
  
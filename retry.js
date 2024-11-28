 function fetchWithRetry(url, retries) {
    let attempt = 0;
    let errors = [];

    while (attempt < retries) {
        try {
            const response =  fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data =  response.json();
            return data;
        } catch (error) {
            attempt++;
            errors.push(`Attempt ${attempt}: ${error.message}`); 
            if (attempt === retries) throw new Error(errors.join("<br>"));
        }
    }
}
 function main() {
    const apiURL = "https://api.publicapis.org/entries"; 
    const maxRetries = 3;
    const resultDiv = document.getElementById("result");

    try {
        const data =  fetchWithRetry(apiURL, maxRetries);
        resultDiv.textContent = `Success: ${JSON.stringify(data)}`;
    } catch (error) {
        resultDiv.innerHTML = `Error:<br>${error.message}`;
    }
}

main();
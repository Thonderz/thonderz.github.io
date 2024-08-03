let isSending = false;
let progress = 0;
const progressBar = document.getElementById("progress");
const sendButton = document.getElementById("sendButton");
const diamondsTable = document.getElementById("diamondsTable");

function startSending() {
    if (isSending) return;
    isSending = true;
    progress = 0;
    sendButton.disabled = true;
    progressBar.style.width = "0%";
    progressBar.innerText = "0%";
    
    let interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        progressBar.innerText = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            isSending = false;
            sendButton.disabled = false;
            addDiamond();
        }
    }, 300); // 30 seconds (300 ms * 100)
}

function addDiamond() {
    let row = diamondsTable.insertRow();
    let cell = row.insertCell(0);
    cell.innerText = "Elmas gönderildi";
}

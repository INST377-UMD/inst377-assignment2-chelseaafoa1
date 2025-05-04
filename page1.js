//QUOTES
function quote2(){
    fetch(`https://zenquotes.io/api/random`)
    .then((resp) => resp.json())
    .then((data) => {
    console.log(data)
      const quote=data[0].q;
      const author=data[0].a;
      document.getElementById("quote1").innerHTML = `"${quote}"<br>—${author}`
    })  

.catch((error) => {
    console.error("Error fetching quote:", error);
    document.getElementById("quote1").innerHTML = "Failed to load quote.";
});
}

//CHANGE PAGE COLOR
function changePageColor (color){
    document.body.style.backgroundColor = color;
}

//NAVIGATE TO PAGE
function navigateToPage(page){
    const lowerCasePage=page.toLowerCase();
    window.location.href=lowerCasePage+ ".html";
}
//AUDIO
function loadCommands() {
    if (annyang) {
        // Let's define a command.
        const commands = {
            'hello': () => { alert('Hello world!'); },
            'change the color to *color': changePageColor,
            'navigate to *page': navigateToPage
        };

        // Add our commands to annyang
        annyang.addCommands(commands);


        // Start listening.
        annyang.start();
    }

}

//AUDIO
function turnOnAudio(){
    if (annyang){
        annyang.start();
        alert("Audio commands are now ON.");
    }
}
function turnOffAudio(){
    if (annyang){
        annyang.abort();
        alert("Audio commands are now off.");

    }
}

function initializePage(){
    quote2();
    loadCommands();
}

if (annyang){
    const commands = {
        "search *ticker": function(ticker){
            document.getElementById("ticker").value=ticker.toUpperCase()
            document.getElementById('days').value="30";
            lookupStockData();
        }
    };
    annyang.addCommands(commands);
    annyang.start();
}
// Call initializePage on page load
window.onload = initializePage;




function dateTime() {
    let now = new Date();
    let option ={weekday: 'short',month:'short',day:'numeric',year:'numeric'};
    let toDate = now.toLocaleDateString('en-US',option);

    document.getElementById("new-date").innerText = toDate;
    
}
dateTime();



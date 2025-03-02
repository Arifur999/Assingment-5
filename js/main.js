let comButtons = document.querySelectorAll(".com-button");
for (let i = 0; i < comButtons.length; i++) {
    const comBtn = comButtons[i];

    comBtn.addEventListener("click", function () {
        comBtn.style.pointerEvents = "none";
        event.target.classList.add("bg-gray-300");

        const num = document.getElementById("num").innerText;
        const sumNum = document.getElementById("sum-num").innerText;
        const convertedNum = parseInt(num);
        const convertedSumNum = parseInt(sumNum);

        if (convertedSumNum > 0) {
            const sum = convertedSumNum + 1;
            document.getElementById("sum-num").innerText = sum;

        }
        if (convertedNum > 0) {
            const subtraction = convertedNum - 1;
            document.getElementById("num").innerText = subtraction;
            alert("Bord updated sucssesful");
        }
        if (convertedNum <= 1) {
            alert("congrates!!!you complete all task");
        }

        let taskHeadElement = comBtn.querySelector(".task-head");
        let taskHeadText = taskHeadElement ? taskHeadElement.innerText : "No task heading"; 
       

        let now = new Date();
        let formattedTime = now.toLocaleDateString("en-US", {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true

        })



        
        let allTask = document.getElementById("all-task")
        let newParagraph = document.createElement('p');
        newParagraph.classList.add(
            'p-4',
            'bg-[#F4F7FF]',
            'rounded-lg',
            'm-2'

        );
        newParagraph.innerText = ` ${taskHeadText}at ${formattedTime}`
        allTask.appendChild(newParagraph);






    })

}
document.getElementById("clear-history").addEventListener("click", function () {
    document.getElementById("all-task").innerHTML = "";
});


document.getElementById("theme-btn").addEventListener("click", function () {

})
function getRandomColor() {
    let getRandomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return getRandomColor;
}
document.getElementById("theme-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
})


document.getElementById("home-dsk").addEventListener("click", function () {
    window.location.href = "second.html";

})



function dateTime() {
    let now = new Date();
    let option = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    let toDate = now.toLocaleDateString('en-US', option);

    document.getElementById("new-date").innerText = toDate;

}
dateTime();



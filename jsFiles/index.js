function showwRow() {
    document.querySelector(".hiddenRow").classList.remove("hiddenRow");
    document.querySelector(".jsButton").classList.add("hiddenRow");
}

function plySnd() {
    var snd = new Audio("sounds/no.mp3");
    snd.play();
}
let nameText = document.getElementById("myName");

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function changeText() {
    setTimeout(function () {
        nameText.innerText = "JulianXDD, A Developer";
    }, 0);

    setTimeout(function () {
        nameText.innerText = "JulianXDD, A Hacker";
    }, 1500);

    setTimeout(function () {
        nameText.innerText = "JulianXDD, A Gamer";
    }, 3000);
}

var intervalID = window.setInterval(changeText, 4500);
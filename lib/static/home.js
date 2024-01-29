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
        document.title = "Example!";
    }, 0);

    setTimeout(function () {
        document.title = "Example :)";
    }, 1500);

    setTimeout(function () {
        document.title = "Javascript!";
    }, 3000);
}

var intervalID = window.setInterval(changeText, 4500);
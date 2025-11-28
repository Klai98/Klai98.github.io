function makeBigger() {
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pt";
}

function applyFancy() {
    let text = document.getElementById("textInput");

    if (document.getElementById("fancyRad").checked) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function mooify() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase();

    let sentences = text.split(".");

    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-MOO";
        }
        sentences[i] = words.join(" ");
    }

    textArea.value = sentences.join(". ");
}

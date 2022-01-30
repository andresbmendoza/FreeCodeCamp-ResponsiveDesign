function initState() {
    document.getElementById("allSelector").style.textDecoration = "underline";
    document.getElementById("allSelector").style.textDecorationThickness = "3px";
    document.getElementById("allSelector").style.color = "#1b4d6d";
    document.getElementById("projectSelector").style.textDecoration = "none";
    document.getElementById("localSelector").style.textDecoration = "none";
    document.getElementById("news1").style.display = "";
    document.getElementById("news2").style.display = "";
    document.getElementById("news3").style.display = "";
    document.getElementById("news4").style.display = "none";
}

function setUnderLine(selector) {
    document.getElementById("allSelector").style.textDecoration = "none";
    document.getElementById("allSelector").style.color = "#404040";
    document.getElementById("projectSelector").style.textDecoration = "none";
    document.getElementById("projectSelector").style.color = "#404040";
    document.getElementById("localSelector").style.textDecoration = "none";
    document.getElementById("localSelector").style.color = "#404040";
    document.getElementById(selector).style.textDecoration = "underline";
    document.getElementById(selector).style.textDecorationThickness = "3px";
    document.getElementById(selector).style.color = "#1b4d6d";
}

function projects() {
    document.getElementById("news1").style.display = "";
    document.getElementById("news2").style.display = "none";
    document.getElementById("news3").style.display = "none";
    document.getElementById("news4").style.display = "none";
}
  
  function local() {
    document.getElementById("news1").style.display = "none";
    document.getElementById("news2").style.display = "";
    document.getElementById("news3").style.display = "";
    document.getElementById("news4").style.display = "";
}


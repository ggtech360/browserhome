function buttonClick() {
    var kkk = document.getElementById("searchBox").value;
    var link = "https://duckduckgo.com/?q=" + kkk;
    window.location = link;
    document.getElementById("searchBox").value = "";
}
var input = document.getElementById("searchBox");
input.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
})



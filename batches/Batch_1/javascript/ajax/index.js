
  var xhttp = new XMLHttpRequest();
var paraelem = document.getElementById('jsondata');

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log(this.responseText);
     var resText = JSON.parse(this.responseText)
     paraelem.innerHTML = resText.title;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhttp.send();



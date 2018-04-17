var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
   if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var responseText = xhttp.responseText
       var tableData = JSON.parse(responseText);
       var col = [];
       for (var i = 0; i < tableData.length; i++) {
           for (var key in tableData[i]) {
               // console.log(col.indexOf(key))  
               if (col.indexOf(key) === -1) {
                   col.push(key);
                   console.log(col)
               }
           }
       }
       var table = document.createElement("table");
       table.setAttribute('border', 1)
       var tr = table.insertRow();
       for (var i = 0; i < col.length; i++) {
           var th = document.createElement("th"); // TABLE HEADER.
           // th.innerHTML = col[i];
           th.innerHTML = col[i];
           console.log(col[i])
           tr.appendChild(th);
           for (var i = 0; i < tableData.length; i++) {
               tr = table.insertRow(-1);
               for (var j = 0; j < col.length; j++) {
                   var tabCell = tr.insertCell(-1);
                   tabCell.innerHTML = tableData[i][col[j]];
                   // console.log(tableData[i][col[j]])
               }
               var divContainer = document.getElementById("showData");
               divContainer.innerHTML = "";
               divContainer.appendChild(table);
           }
       }
   }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/", true);
xhttp.send();
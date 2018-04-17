
var xhttp = new XMLHttpRequest();

obj = {
	name:username.value,
	password:password.value
}

 xhttp.onreadystatechange = function(){
 	if(this.readyState == 4 && this.status == 200){
 		document.getElementById('showData').innerHTML = xhttp.responseText;
 		// console.log(xhttp.responseText)
 		var res = JSON.parse(xhttp.responseText);
 		console.log(res)
 		// for(var item in res){
 		// 	console.log(item)
 		// 	var li = document.createElement('li');
 		// 	li.innerHTML = res[item];
 		// 	showData.appendChild(li)

 		
 		// }
 	}
 }

 xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');

 xhttp.send();
// var a = [2,2,3,4,5,6,2,3,3]

// function num(a){
// 	for(var i = 0;i<a.length;i++){
// 		for(var j = i+1;j<a.length; j++){
// 			if(a[i]==a[j]){
// 				console.log(a[i])
// 			}
			
// 		}
// 	}
// }

// num(a);
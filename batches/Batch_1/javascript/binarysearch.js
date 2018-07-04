var arr = [1,2,3,4,5,6,7,8,9,10];



function binary_search(arr,target){
	let left = 0;
	let right = arr.length - 1;
	while(left<=right){
		const mid = left + Math.floor((right - left)/2);
		if(arr[mid] === target){
			return mid; 
		}
		if(arr[mid]<target){
			left = mid + 1;
		}
		else {
			right = mid - 1;
		}
	}
		return -1;

}

console.log(binary_search(arr,5))

// mini-max
var minmaxarr = [1,2,3,4,5]
// function miniMaxSum(arr) {
//     // Complete this function

//     var min = 0;
//     var max = 0;
//     arr.sort((a,b) => a-b);
//     min = arr.reduce((acc, cur) => acc += cur) - arr[arr.length - 1];
//     max = arr.reduce((acc, cur) => acc += cur) - arr[0];
       
//     console.log(min , max);
// }

// miniMaxSum(minmaxarr)


 function miniMaxSum(arr) {
    var min = 0;
    var max = 0;
    arr.sort();
    for(var i=0;i<arr.length-1;i++){
        min += arr[i];
        max += arr[i+1];
    }
    return min +' '+ max;

}

console.log(miniMaxSum(minmaxarr));

var candles = [2,3,5,5,7]

function birthdayCakeCandles(n, ar) {
   var count = 0;
   var max = 0;
   for(let i = 0; i < ar.length; i++) {
        if(ar[i] > max) {
            max = ar[i];
        }
    }
    for(var i=0;i<ar.length;i++){
        if(ar[i] === max){
            count++;
        }
    }
    return count;

}

console.log(birthdayCakeCandles(5, candles))


// time conversion

function timeConversion(input) {debugger;
  
    var hours = parseInt(input.substring(0, input.indexOf(':')));
    var minutes = parseInt(input.substring(input.indexOf(':') + 1, input.lastIndexOf(':')));
    var seconds = parseInt(input.substring(input.lastIndexOf(':') + 1, input.lastIndexOf(':') + 3));

   console.log(hours+':'+minutes+':'+ seconds)
   var newHours;
   if(hours === 12){
   	newHours = 0;
   }
   else{
   	newHours = hours;
   }

   var shift;
   if(input.toLowerCase().indexOf('pm') > -1){
   	shift = 12;

   }
   else{
   	shift = 0;
   }
       var formatedHours = format((newHours + shift).toString());
    var formatedMinutes = format(minutes.toString());
    var formatedSeconds = format(seconds.toString());
 console.log(formatedHours + ":" + formatedMinutes + ":" + formatedSeconds);
     function format(numString) {
        if(numString.length === 1) {
            return "0" + numString;
        }
        return numString;
    }

}

timeConversion('1:33:55pm');
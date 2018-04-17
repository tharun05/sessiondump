  /*variabes*/

  var num = 10;
  console.log(typeof num);
  var str = 'string';
  console.log(typeof str);
  var bool = true;

  console.log(typeof bool);

  var arr = [1, 2, 3, 4, 5, 'dasda', true, null];
  console.log(arr);

  num = 30;
  console.log(num);

  var empty = null;
  console.log(typeof empty);

  var err = undefined;

  console.log(empty == err);

  var NAN = NaN;

  console.log(typeof NAN);
  console.log('------*-------')

  // var divClassName = document.getElementsByClassName('tharun');
  // var divId = document.getElementById('tharun');
  // divId.style.color = 'red';
  // divId.style.border = '2px solid';

  var play = 'cricket';

  var play = 'cricket';
  console.log(play === play);


  var obj = {
      name: 'digitallync'
  }
  obj1 = {
      name: 'digitallync'
  }
  console.log(obj === obj)


  console.log('FUCNCTIONS')

  function greet() {
      var local = "localvariable";
      console.log('welcome on board');

  }


  greet();

  var greeting = function(str, str1) {
      return str + ' ' + str1
  }

  console.log(greeting('welcome to anonymous function', 'digitallync'));



  // arrays

  console.log('ARRAYS');

  var arr = [12, 2, 3, 4, 8, 5, 6, 'tharun', {name:'kumar'}];

  for(var item of arr){
    console.log(item)
  }

  // arr.forEach(function(elem) {
  //   console.log(elem*3)
  // })
  // console.log(arr.pop());

  // console.log(arr);

  // console.log(arr.slice(1,6));

  // console.log(arr);


//   console.log(arr.splice(1,4));

//   console.log(arr.indexOf('tharun'))


// var mappedarray = arr.map(function(item){
//     console.log(item *3)
// })

// // Objetcs 

// var firstname = 'arun';
// var lastname = "dillikar"
var person = {
    firstname:'tharun',
    lastname:'dillikar',
    fullname:function(){
        console.log(this.firstname +' '+ this.lastname)
    }
}


var funconst = function(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = function(){
        console.log(this.firstname+ ' ' + this.lastname)
    }
}

var unknown = new funconst('ronald','trumph'); 
var unknown1 = new funconst('tharun','dillikar'); 

console.log(JSON.stringify(unknown));


// console.log(unknown1);

// for(var item in unknown){
//     console.log(unknown[item])
// }




// person.fullname();

// var employee = Object.create(null);

// employee.name = 'samuel';
// employee.age = '30';

// console.log(employee)
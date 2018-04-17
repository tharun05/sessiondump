console.log('welocoe to javascript')

    // int a = 10;
    var a;
    var b;
    a = 'string';
    b = 10.3;
    console.log(typeof a);
    console.log(typeof b);

    var bool = true;
    console.log(typeof bool);


    var undef = undefined;

    console.log(typeof undef);

    var empty = null;

    console.log(empty === undef);


    var nan = NaN;

    console.log(typeof nan);

    function person(firstname, lastname) {
        return firstname + ' ' + lastname
        

    }
    console.log(person('tharun', 'dillikar'));


    /*anonymous function*/

    var personOne = function() {
        console.log('digitallync technologies')
    }

    console.log(typeof personOne)
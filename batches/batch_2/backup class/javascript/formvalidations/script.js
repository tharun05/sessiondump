function formValidate(){
	var uid = document.registration.userid;
	var passid = document.registration.passid;
	var uname = document.registration.username;
	var ucountry = document.registration.country;
	var uzip = document.registration.zip;
	var uemail = document.registration.email;
	var umsex = document.registration.msex;
	var ufsex = document.registration.fsex;
	var uadd = document.registration.address;


	if(userid_validation(uid,5,12)){
		if(passid_validation(passid,7,12)){
			if(allletters(uname)){
				if(alphanumeric(uadd)){
					if(countryselect(ucountry)){
						if(allnumeric(uzip)){
							if(validateEmail(uemail)){
								if(validatesex(umsex,ufsex)){

								}
							}
						}
					}
				}
			}
		}
	}
	return false;


}


function userid_validation(uid,mx,my){
	var uid_len = uid.value.length;

	if(uid_len == 0 || uid_len >=my || uid_len < mx){
		alert("User ID should not be empty /length shud be between" + mx+ 'to' + my);
		uid.focus();
		return false;
	}
}

function passid_validation(passid, mx,my){
	var passid_len = passid.value.length;

	if(passid_len == 0 || passid_len>=my || passid_len<mx){
		alert('Password shud not be empty / length be between' +mx+ 'to' +my);
		passid.focus();
		return false;
	}
}

function alphanumeric(uadd){
	var letters = /^[a-zA-Z0-9_]*$/;

	if(uadd.value.match(letters)){
		return true;
	}
	else{
		alert('user address must have alphanumeric characters only')
		uadd.focus();
		return false;
	}
}

function allletters(uname){
	var letters = /^[A-Za-z]+$/;
	if(uname.value.match(letters)){
		return true;
	}
	else{
		alert('User name shud not contain numbers');
		return false;
	}
}

function countryselect(ucountry){
	if(ucountry.value == "Default"){
		alert('Select your country from the list')
		ucountry.focus();
		return false;
	}
	else{
		return true;
	}

}

function allnumeric(uzip){
	var numbers = /^[0-9]*$/;

	if(uzip.value.match(numbers)){
		return true;
	}
	else{
		alert('zip code must have numeric characters only')
		uzip.focus();
		return false;
	}
}

function validateEmail(uemail){
	var emailFormat = '';

	if(uemail.value.match(emailFormat)){
		return true;
	}
	else{
		alert('you have entered invalid email address');
		uemail.focus();
		return false;
	}
}

function validatesex(umsex, ufsex){
	var x=0;
	if(umsex.checked){
		x++;
	}
	if(ufsex.checked){
		x++
	}
	if(x == 0){
		alert('select Male/Female');
		umsex.focus();
		return false;
	}
	else{
		alert("Form Successfully Submitted");
		return true;
	}


}

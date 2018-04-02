function validate(){
	var a = document.myForm.Email.value;
	if(a.indexOf('@')<=0){
		document.getElementById("Message").innerHTML="** invalid @ position";
		return false;
		
	}
	if(a.charAt(a.length-4)!= '.'){
		document.getElementById("Message").innerHTML="** invalid . position";
		return false;
	}
	
	if(a.charAt(a.length-3)!= '.'){
		document.getElementById("Message").innerHTML="** invalid . position";
		return false;
	}
}
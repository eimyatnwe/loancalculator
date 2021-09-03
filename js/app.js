// UI

const terms = document.getElementById("years");
const bubble = document.querySelector(".bubble");

const loanform = document.getElementById("loan-form");
const loader = document.getElementById("loading");
const resultel = document.getElementById("result");

//Event Listener
terms.addEventListener("input",function(){

	const val = terms.value;
	// console.log(val);

	bubble.textContent = val > 1 ?  `${val} months` : `${val} month`;

});

loanform.addEventListener("submit",function(e){

	// console.log("hay");

	// show loader
	loader.style.display = "block";

	//hide result
	resultel.style.display = "none";

	setTimeout(calculateresult,1000);

	e.preventDefault();
});


function calculateresult(){

	const amount = document.getElementById("amount");
	const interest = document.getElementById("interest");

	const monthlypayment = document.getElementById("monthly-payment");
	const totalinterest = document.getElementById("total-interest");
	const totalpayment = document.getElementById("total-payment");

	const getprincipal = parseFloat(amount.value);
	// console.log(getprincipal);
	const getinterest = parseFloat(interest.value);
	const getterm = parseFloat(terms.value);

	// console.log(getterm);

	const monthly = Math.round(getprincipal * (getterm * getinterest)/100);

	if(monthly){
		monthlypayment.value = ((getprincipal+monthly)/getterm).toFixed(2);
		totalinterest.value =monthly.toFixed(2);
		totalpayment.value = (monthlypayment.value*getterm).toFixed(2);

	//hide loader 
	loader.style.display = "none";

	//show result
	resultel.style.display = "block";
  }else{
  	//show error

  	showerror("Please Check Your amount");
  }
}

function showerror(message){

	loader.style.display = "none";

	const errordiv = document.createElement("div");

	errordiv.className = "alert alert-danger";

	errordiv.appendChild(document.createTextNode(message));

	const card = document.querySelector(".card");
	const heading = document.getElementById("heading");

	card.insertBefore(errordiv,heading);

	errordiv.style.textAlign = "center";

	setTimeout(clearerror,2000);

}

function clearerror(){
	document.querySelector(".alert").remove();
}

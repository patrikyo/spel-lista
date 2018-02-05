window.onload = function(){

	//animation
	$("#spel-lista ul li").on("mouseenter", function(){
		$(this).animate({"top": "-10px"});
	});

	$("#spel-lista ul li").on("mouseout", function(){
		$(this).animate({"top": "10px"});
	});
	//radera
	var spelLista = document.getElementById("spel-lista");
	spelLista.addEventListener("click" , raderaSpel);
	
	function raderaSpel(e){
		if(e.target.nodeName === "SPAN" && e.target.className === "radera"){
			var target = e.target.parentElement
         $(target).hide(1000);	
		}
	}

	//Lägg till spel
	var laegTillForm = document.forms["laegtill-och-filtrera"];
	laegTillForm.addEventListener("submit" , laegTill);

	function laegTill(e){
		e.preventDefault();
		var inputFaelt = laegTillForm.querySelector("input[type='search']");
		if(inputFaelt.value === ""){
			alert("du måste ange en titel");
		}
		else{
			var li = document.createElement("li");
			var spanTitel = document.createElement("span");
			spanTitel.className="titel";
			spanTitel.textContent= inputFaelt.value;

			var spanRadera = document.createElement("span");
			spanRadera.className="radera";
			spanRadera.textContent="radera";

			li.appendChild(spanTitel);
			li.appendChild(spanRadera);
			document.querySelector("#spel-lista ul").appendChild(li);
		}
	}

  	//sök efter spel
	var sokForm = document.forms["searchBar"];
    var soekRuta = sokForm.querySelector("input[type='search']");

	soekRuta.addEventListener("keyup",function(){
	  	var inputVaerde = this.value.toLowerCase();
	  	var spelListaTitlar = document.querySelectorAll("#spel-lista ul li");
	
	  	spelListaTitlar.forEach(function(spelTitel){
		  	var titel = spelTitel.querySelector("span[class='titel']").textContent;
		  	if(titel.toLowerCase().indexOf(inputVaerde) === -1){
		  		spelTitel.style.display = "none";
		  	}
		  	else
		  	{
		  		spelTitel.style.display = "block";
		  	}		
	  	});
    });

	//visa göm(checkbox)
	var filtrera = document.forms["laegtill-och-filtrera"].querySelector("input[type='checkbox']");
	var lista = document.getElementById("spel-lista");
	
	filtrera.addEventListener("change",function(){
		if(filtrera.checked){
	  		lista.style.display = "none";
	  	}
	    else{
	  		lista.style.display = "block";
	    }
	});

	//tabbar
	var tabbar = document.querySelector("#tabbed-container .tabs");
	var paneler = document.querySelectorAll("#tabbed-container div.panel");

	tabbar.addEventListener("click" , function(e)
	{
		if(e.target.nodeName === "LI")
		{
			var klickadPanel = document.querySelector(e.target.dataset.target);

				paneler.forEach(function(panel)
			{
				console.log(panel);
				if(panel == klickadPanel)
				{
					panel.classList.add("aktiv");
				}else
				{
					panel.classList.remove("aktiv");
				}
			});	
		}
	});
 };

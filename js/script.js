//Validar Nome
function validaNome(nomeid) {
	   var formulario = document.getElementById("formulario");
	  if(nomeid.nome.value == "" || nomeid.nome.value == null || nomeid.nome.value.lenght < 3) {
		  alert("Por favor, Digite o seu nome.");
		   nomeid.nome.focus();
		       return false;
    }
}
	

//validar o CPF digitado

validar = function () {
    var formulario = document.getElementById("formulario");
    var cpfid = formulario.cpf;
    var re_cpfid = /^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/;

    if(re_cpfid.test(cpfid.value)){
        alert("CPF válido");}
        else{
            alert("CPF inválido");
    }

//validar o RG digitado

validar = function () {
    var formulario = document.getElementById("formulario");
    var rgid = formulario.rgid;
    var re_rgid = /^([\d]{2})([\d]{3})([\d]{3})([\d]{1})$/;

    if(re_rgid.test(rg.value)){
        alert("RG válido");}
        else{
            alert("RG inválido");
    }

function validaSexo(sexoid) {
	 var formulario = document.getElementById("formulario");
	 escolhaSexo = -1;
	 for(x = sexoid.sexo.lenght -1; x > -1; x--) {
		if(sexoid.sexo[x].checked) {
			   escolhaSexo = x;
			          }
    }
		if(escolhaSexo == -1) {
        alert("qual o seu sexo?");
        sexoid.sexo[0].focus();
        return false;
    }
}
//validar CEP
function validaCep(cepid){
		var formulario = document.getElementById("formulario");
			exp = /\d{2}\.\d{3}\-\d{3}/
        if(!exp.test(cepid.value))
                alert('Numero de Cep Valido');
				else{
					alert('Numero de Cep Invalido!');
}



//validar telefone Fixo
function validaTelefone(telid){
     var formulario = document.getElementById("formulario");  
	   exp = /\(\d{2}\)\ \d{4}\-\d{4}/
        if(!exp.test(telid.value))
                alert('Numero de Telefone Invalido!');
				else{
					alert('Numero de Telefone Invalido!');
}

//validar telefone celular
function validaTelefone(celid){
        var formulario = document.getElementById("formulario");
			exp = /\(\d{2}\)\ \d{5}\-\d{4}/
        if(!exp.test(celid.value))
                alert('Numero de Celular valido!');
			else{
					alert('Numero de Celular Invalido!');
}



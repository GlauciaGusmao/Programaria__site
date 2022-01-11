document.getElementById("botaoEnviar").addaEventlistener("click",validaFormulario)


function validaFormulario(){
  if(document.getElementById("nome").value !="" &&             document.getElementById("email").value!="" &&             document.getElementById("telefone").value!=""){            alert("Protinho Você receberá as novidades por 
 " email.")
}else{
    alert("Por farvor, preencha os caompos nome e      email !")
  }
}

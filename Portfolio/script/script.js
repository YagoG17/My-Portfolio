document.getElementById('from-contato').addEventListener(
 'submit', function(e) {e.preventDefault();

// Pega os valores dos campos
 const nome = document.getElementById ('nome').Value;
 
 const email = document.getElementById('email').Value;

 const mensagem = document.getElementById('mensagem').Value;

// Exibe uma mensagem de agradecimento
 alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`); 

});
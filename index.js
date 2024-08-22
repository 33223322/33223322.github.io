var bienvenida = "Recuerdas el apodo que te puse¿ aver, cual es✨: ";
var data = prompt(bienvenida);
var comentario = "Asi es, Mi hermosa pepita";
alert(comentario);
var aea = "Sabes es que, no se como volver hablarte, despues de ser un completo idiota contigo"
alert(aea);
var a = "Se que esto no es mucho, pero espero te saque una sonrisita:)"
alert(a);
var e = "Come, toma awita, Abrigate y cuidate mucho miamor... es que me importa tu vida<3"
alert(e);
//Imprimir el nombre de la persona y transformalo a mayúsculas
document.getElementById("data").innerHTML = data.toUpperCase();

const yesBtn = document.querySelector('#yesBtn');

//ESCRIBIR LO QUE PASARA EN CASO DE QUE SÍ
yesBtn.addEventListener('click', function(){
    alert('Sabia que me ibas a perdonar:c, lo siento, teamo mucho no me dejes, no quero que te vayas, no quero irme, soy muy feliz estando contigo, cuando estoy contigo, estoy en mi hogar, no quiero que se vaya eso:c PORFAVOR:cccc TE EXTRAÑO TANTO'); //Puedes mandar los mensajes que quieras
    location.href = 'https://www.youtube.com/watch?v=VEsf5CfpLMI'; //Cambiar el URL en YouTube de la canción que quieras 
});

const noBtn = document.querySelector('#noBtn');

//NO MOVER NADA AQUÍ
noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);

    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});

 

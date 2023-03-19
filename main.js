//Definir as variáveis necessárias.
x = 0;
y = 0;
drawCircle = "";
drawRect = "";

//Definir e inicializar a variável SpeechRecognition.

var SpeechRecognition = window.webkitSpeechRecognition;

 // Definir e inicializar variáveis de reconhecimento. 
var recognition = new SpeechRecognition();

//Criar a função start().

function start()
{
    document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale."; 
    recognition.start();
} 
 // Adicionar o código na função recognition.onresult.

recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "A fala foi reconhecida como: " + content; 
      if(content =="círculo")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Desenhando um círculo."; 
        drawCircle = "set";
      }
      if(content =="retângulo")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Desenhando um retângulo."; 
        drawRect = "set";
      }
}

//Criar a função para criar tela.

function setup() {
  canvas = createCanvas(900, 600);
}

//Criar a função draw() e adicione código nela.

function draw() {
  if(drawCircle == "set")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "UCírculo desenhado. ";
    drawCircle = "";
  }

  if(drawRect == "set")
  {
    rect(x,y,70,50);
    document.getElementById("status").innerHTML = "Retângulo desenhado. ";
    drawRect = "";
  }

}








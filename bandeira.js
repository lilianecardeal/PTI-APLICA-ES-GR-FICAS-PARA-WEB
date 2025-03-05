window.onload = function() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    // Definir a largura e altura do canvas (caso necessário)
    canvas.width = 300;
    canvas.height = 200;

    // Desenhar o fundo branco da bandeira
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Desenhar o círculo vermelho da bandeira
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let radius = 60; // Ajustado para manter proporção

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
};

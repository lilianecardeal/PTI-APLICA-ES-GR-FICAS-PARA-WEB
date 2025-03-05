# 📌 Landing Page - Senac

Este projeto é uma Landing Page desenvolvida com **HTML, CSS e JavaScript (Canvas)** para ilustrar o uso de estilização avançada com **CSS** e manipulação gráfica via **Canvas**.

## 📌 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Canvas)

## 📌 Estrutura do Projeto

📂 **/projeto**
  - 📄 `index.html` → Estrutura principal da página.
  - 🎨 `styles.css` → Estilização da página.
  - 🎨 `senac.png` → Logo do Senac.
  - 🎨 `bandeira.js` → Script para desenhar a bandeira do Japão via Canvas.

## 📌 Como Executar o Projeto

1️⃣ **Clone o repositório:**
```bash
 git clone https://github.com/seuusuario/projeto-senac.git
```

2️⃣ **Abra o arquivo `index.html`** em um navegador.

## 📌 Funcionalidades Implementadas

✅ **Cabeçalho estilizado** com fundo escuro e título centralizado.  
✅ **Formulário de contato** com campos de entrada e botão estilizado.  
✅ **Imagem do Senac** centralizada na página.  
✅ **Bandeira do Japão** gerada dinamicamente com **Canvas**.  
✅ **Rodapé personalizado** com direitos reservados.

## 📌 Estrutura do Código

### **📄 index.html**
- Contém a estrutura da página.
- Inclui o formulário de contato e o `<canvas>` para a bandeira do Japão.
- Importa `styles.css` e `bandeira.js`.

### **🎨 styles.css**
- Define o layout da página.
- Estiliza o cabeçalho, formulário e imagens.

### **🎨 bandeira.js**
- Usa o elemento `<canvas>` para desenhar a bandeira do Japão.

## 📌 Exemplo de Código JavaScript (bandeira.js)
```js
window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    // Desenho do retângulo branco
    ctx.fillStyle = "white";
    ctx.fillRect(50, 50, 200, 120);
    ctx.strokeStyle = "black";
    ctx.strokeRect(50, 50, 200, 120);
    
    // Desenho do círculo vermelho
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(150, 110, 40, 0, Math.PI * 2);
    ctx.fill();
};
```

## 📌 Melhorias Futuras 🚀
- Adicionar responsividade ao formulário.
- Melhorar a acessibilidade.
- Implementar animações para elementos visuais.

## 📌 Autor
Desenvolvido por **[Seu Nome]** - 2025. 🚀

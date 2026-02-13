const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.transition = "0.3s";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

function yesClicked(){

document.body.innerHTML = `

<div class="love-page">

<h1 class="love-text">
You just made my world brighter 🌎✨ <br><br>
From the moment I met you, <br>
everything started feeling special 💕 <br><br>

Your smile is my favourite view 😊 <br>
Your voice is my favourite song 🎵 <br>
And your love is my biggest strength ❤️<br><br>

Thank you for being mine 🥰<br>
I promise to love you forever 💍💖
</h1>

</div>

`;
}

let links = document.querySelectorAll("header a");
links.forEach(link => {
   link.addEventListener("click", async function(event){
       event.preventDefault();
       let href = this.href;
       let data = await fetch(href);
       document.querySelector("#conteiner").innerHTML = await data.text();
       window.location.hash = this.getAttribute("data-hash");
   }); 
});

async function start(){
let hash = window.location.hash;
hash = hash.substr(1);
if (!hash){
 hash = "main";
}

let data = await fetch(`${hash}.html`);
document.querySelector("#conteiner").innerHTML = await data.text();
}
start();

window.addEventListener("hashchange", function(){
start();
});
let pierre= document.getElementById('pierre');
pierre.addEventListener('click',()=>{
    combat('pierre')
});

let feuille= document.getElementById('feuille');
feuille.addEventListener('click',()=>{
    combat('feuille')
});

let ciseaux= document.getElementById('ciseaux');
ciseaux.addEventListener('click',()=>{
    combat('ciseaux')
});


function combat(joueur){
    let tableau=['pierre','feuille','ciseaux'];
    let aleatoire=Math.floor(Math.random()*3);
    let bot=tableau[aleatoire];
    console.log(bot);
    let resultat= document.getElementsByClassName('resultat');
    if(bot==joueur){
        resultat[0].textContent="egalité"
    }
    else if(bot=="pierre" && joueur=="feuille"){
        resultat[0].textContent="joueur gagne"
    }
    else if(bot=="feuille" && joueur=="ciseaux"){
        resultat[0].textContent="joueur gagne"
    }
    else if(bot=="ciseaux" && joueur=="pierre"){
        resultat[0].textContent="joueur gagne"
    }
    else{
        resultat[0].textContent="joueur perd"
    }
}

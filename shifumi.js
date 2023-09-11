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
    let resultat = document.getElementById('resultatMatch');
    let choixJoueur= document.getElementById('choixJoueur');
    let choixOrdi= document.getElementById('choixOrdi');
    choixJoueur.textContent=joueur;
    choixOrdi.textContent=bot;
    if(bot==joueur){
        resultat.textContent="Égalité"
    }
    else if(bot=="pierre" && joueur=="feuille"){
        resultat.textContent= "Joueur gagne"
    }
    else if(bot=="feuille" && joueur=="ciseaux"){
        resultat.textContent="Joueur gagne"
    }
    else if(bot=="ciseaux" && joueur=="pierre"){
        resultat.textContent="Joueur gagne"
    }
    else{
        resultat.textContent="Joueur perd"
    }
}

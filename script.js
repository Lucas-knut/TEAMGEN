//Après moults tests et recherches, je suis tombé sur un algorithme connu "le mélange de Fisher-Yates".
//Celui ci permet de parcourir notre tableau de droite à gauche avec une boucle.
//On prends la valeur de l'élément de notre tableau (le dernier, avant dernier et ainsi de suite) la poste dans une variable temporaire,
//on tire un nombre aleatoire entre 0 et la taille de notre tableau et on permute les deux valeurs et on réhitère jusqu'à avoir fait ceci avec toutes les valeurs


var perso = {
    id : null,
    nom : "",
    dispo : {
        lundi : null,
        mardi : null,
        mercredi : null,
        jeudi : null,
        vendredi : null
    }
}
var yohan = Object.assign({}, perso)
yohan.id = 0
yohan.nom = "yohan"
yohan.dispo.lundi = false

var lucas = Object.assign({}, perso)
lucas.id = 1
lucas.nom = "lucas"

var sidney = Object.assign({}, perso)
sidney.id = 2
sidney.nom = "sidney"

var maxime = Object.assign({}, perso)
maxime.id = 3
maxime.nom = "maxime"


var marylise = Object.assign({}, perso)
marylise.id = 4
marylise.nom = "marylise"

var tamara = Object.assign({}, perso)
tamara.id = 5
tamara.nom = "tamara"

var alexandre = Object.assign({}, perso)
alexandre.id = 6
alexandre.nom = "alexandre"


var juan = Object.assign({}, perso)
juan.id = 7
juan.nom = "juan"

var valentin = Object.assign({}, perso)
valentin.id = 8
valentin.nom = "valentin"

var raph = Object.assign({}, perso)
raph.id = 9
raph.nom = "raph"

var laurène = Object.assign({}, perso)
laurène.id = 10
laurène.nom = "laurène"


var noureddine = Object.assign({}, perso)
noureddine.id = 11
noureddine.nom = "noureddine"

var vincent = Object.assign({}, perso)
vincent.id = 12
vincent.nom = "vincent"

var maïalen = Object.assign({}, perso)
maïalen.id = 13
maïalen.nom = "maïalen"

var fanny = Object.assign({}, perso)
fanny.id = 14
fanny.nom = "fanny"

var personnes = []
personnes.push(yohan,lucas,sidney,maxime,marylise,tamara,alexandre,juan,valentin,raph,laurène,noureddine,vincent,maïalen,fanny)
//var personnes = ["yohan", "lucas", "sidney", "maxime", "marylise", "tamara", "alexandre", "juan", "valentin", "raph", "laurène", "noureddine", "vincent", "maïalen", "fanny"]
var table1 = document.getElementById("table1")
var table2 = document.getElementById("table2")
console.log(personnes);



var btn = document.getElementById("btn")

//Ajout de la partie qui génére un tableau HTML avec tous les apprenants
var tableBase = document.getElementById("basetab")

personnes.forEach(element => {
    var tbr = document.createElement("tr")
    tbr.append(element.nom)
    tableBase.appendChild(tbr)
    
});




//afin d'avoir plus de randomisation dans l'algo j'ai décider de faire un premmier tirage qui me permet de pas avoir le même tableau de départ pour tous les tirages
for (i = personnes.length -1 ; i >0 ; i--) {
    var rdm = Math.floor(Math.random() * (i+1))
    var temp = personnes[i]
    personnes[i] = personnes[rdm]
    personnes[rdm] = temp
}




btn.addEventListener("click", () => {

    //ici je vérifie si table1 a des enfants, si oui j'enclenche 2 boucles while afin de supprimer les enfants des 2 tableaux
    if(table1.hasChildNodes){
        while(table1.firstChild){
            table1.removeChild(table1.lastChild)
        }
        while(table2.firstChild){
            table2.removeChild(table2.lastChild)
        }
    }
   
  
    //En ayant remarqué mes erreurs sur la v1, et après m'y être penché dessus,
    //je me suis dis qu'il était temps de repartir à zero.
    //la technique utilisée ici m'a permis de jouer avec le random et de retourner le tableau "randomisé"
    //à chaque itération, je permute 2 éléments de mon tableau jusque l'avoir fait avec tout le monde 

    for (i = personnes.length -1 ; i >0 ; i--) {
        var rdm = Math.floor(Math.random() * (i+1))
        var temp = personnes[i]
        personnes[i] = personnes[rdm]
        personnes[rdm] = temp
    }

    //ce qui simplifie pas mal pour la suite maintenant il suffit de couper notre tableau en 2 grâce à slice
    var gr1 = personnes.slice(0, 8)
    var gr2 = personnes.slice(8, 15)
   

    //pour finir deux petites forEach pour chaques tableaux 
    //avec creation des tr et envois des personnes dedans et remplissage des 2 tables avec tout ceci

    gr1.forEach(element => {
        var tr = document.createElement("tr")
        tr.append(element.nom)
        if(element.dispo.lundi === false || element.dispo.mercredi === false || element.dispo.vendredi === false ){
            table2.appendChild(tr)
        }else {
            table1.appendChild(tr)
        }
    });

    gr2.forEach(element => {
        var tr = document.createElement("tr")
        tr.append(element.nom)
        if(element.dispo.mardi === false || element.dispo.jeudi === false){
            table1.appendChild(tr)
        }else {
            table2.appendChild(tr)
        }
    });
})



//Après moults tests et recherches, je suis tombé sur un algorithme connu "le mélange de Fisher-Yates".
//Celui ci permet de parcourir notre tableau de droite à gauche avec une boucle.
//On prends la valeur de l'élément de notre tableau (le dernier, avant dernier et ainsi de suite) la poste dans une variable temporaire,
//on tire un nombre aleatoire entre 0 et la taille de notre tableau et on permute les deux valeurs et on réhitère jusqu'à avoir fait ceci avec toutes les valeurs


//récupération des éléments du dom

var personnes = ["yohan", "lucas", "sidney", "maxime", "marylise", "tamara", "alexandre", "juan", "valentin", "raph", "laurène", "noureddine", "vincent", "maïalen", "fanny"]
var table1 = document.getElementById("table1")
var table2 = document.getElementById("table2")



var btn = document.getElementById("btn")


//afin d'avoir plus de randomisation dans l'algo j'ai décider de faire un premmier tirage qui me permet de pas avoir le même tableau de départ pour tous les tirages
for (i = personnes.length -1 ; i >0 ; i--) {
    var rdm = Math.floor(Math.random() * (i+1))
    var temp = personnes[i]
    personnes[i] = personnes[rdm]
    personnes[rdm] = temp
}




btn.addEventListener("click", () => {
  
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
        tr.append(element)
        table1.appendChild(tr)

    });

    gr2.forEach(element => {
        var tr = document.createElement("tr")
        tr.append(element)
        table2.appendChild(tr)

    });

})

//quelques choses reste à bosser genre le fait de reset les tableaux à l'appel du btn 
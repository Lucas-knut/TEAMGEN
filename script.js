//      Creation des personnes       

var perso = {
    nom: "",
    g1: false,
    g2: false
}

var yohan = Object.assign({}, perso)
yohan.nom = "Yohan"

var lucas = Object.assign({}, perso)
lucas.nom = "Lucas"

var sidney = Object.assign({}, perso)
sidney.nom = "Sidney"

var maxime = Object.assign({}, perso)
maxime.nom = "Maxime"

var marylise = Object.assign({}, perso)
marylise.nom = "Marylise"

var tamara = Object.assign({}, perso)
tamara.nom = "Tamara"

var alexandre = Object.assign({}, perso)
alexandre.nom = "Alexandre"

var juan = Object.assign({}, perso)
juan.nom = "Juan"

var valentin = Object.assign({}, perso)
valentin.nom = "Valentin"

var raph = Object.assign({}, perso)
raph.nom = "Raph"

var laurène = Object.assign({}, perso)
laurène.nom = "Laurène"

var noureddine = Object.assign({}, perso)
noureddine.nom = "Noureddine"

var vincent = Object.assign({}, perso)
vincent.nom = "Vincent"

var maïalen = Object.assign({}, perso)
maïalen.nom = "Maïalen"

var fanny = Object.assign({}, perso)
fanny.nom = "Fanny"

//      Récupération ou envois des datas dans le localStorage

//localStorage.removeItem("personnes")
function getsetLocalStr() {
    if (localStorage.length == 0) {
        var personnes = []
        personnes.push(yohan, lucas, sidney, maxime, marylise, tamara, alexandre, juan, valentin, raph, laurène, noureddine, vincent, maïalen, fanny)

        localStorage.setItem("personnes", JSON.stringify(personnes))
        return personnes
    } else {
        var personnes = JSON.parse(localStorage.getItem("personnes"))
        return personnes
    }
}

var personnes = getsetLocalStr()


//      Récupération du DOM
var table1 = document.getElementById("table1")
var table2 = document.getElementById("table2")
var btn = document.getElementById("btn")


//      Ajout de la partie qui génére et affiche un tableau HTML avec tous les apprenants
var tableBase = document.getElementById("basetab")
personnes.forEach(element => {
    var tbr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.append(element.nom)
    tbr.append(td1)

    var td2 = document.createElement("td")
    var chck1 = document.createElement("input")
    chck1.type = 'checkbox'
    chck1.addEventListener("change", () => {
        if (element.g1 == false) {
            element.g1 = true
        } else if (element.g1 == true) {
            element.g1 = false
        }
    })
    td2.appendChild(chck1)
    tbr.append(td2)

    var td3 = document.createElement("td")
    var chck2 = document.createElement("input")
    chck2.type = 'checkbox'
    chck2.addEventListener("change", () => {
        if (element.g2 == false) {
            element.g2 = true
        } else if (element.g2 == true) {
            element.g2 = false
        }
    })
    td3.appendChild(chck2)
    tbr.append(td3)

    tableBase.appendChild(tbr)
});


//      Mélange du tableau

function shuffleArr(personnes) {

    for (i = personnes.length - 1; i > 0; i--) {
        var rdm = Math.floor(Math.random() * (i + 1))
        var temp = personnes[i]
        personnes[i] = personnes[rdm]
        personnes[rdm] = temp
    }
    return personnes
}
shuffleArr(personnes)




//      Répartition des groupes

var group1 = []
var group2 = []

btn.addEventListener("click", function dispoGrps() {

    for (i = 0; i < personnes.length; i++) {
        if (i % 2 == 0) {
            if (personnes[i].g1 == false) {
                group1.push(personnes[i])
            } else if (personnes[i].g1 == true) {
                group2.push(personnes[i])
            }

        } else {
            if (personnes[i].g2 == false) {
                group2.push(personnes[i])
            } else if (personnes[i].g2 == true) {
                group1.push(personnes[i])
            }


        }
    }
    //      Affichage des groupes 1 et 2


    group1.forEach(element => {
        var tr = document.createElement("tr")
        tr.append(element.nom)
        table1.appendChild(tr)
    });


    group2.forEach(element => {
        var tr = document.createElement("tr")
        tr.append(element.nom)
        table2.appendChild(tr)
    });

}
)







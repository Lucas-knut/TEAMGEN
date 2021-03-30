var personnes = ["yohan","lucas","sidney","maxime","marylise","tamara","alexandre","juan","valentin","raph","laurène","noureddine","vincent","maïalen","fanny"]
var table1 = document.getElementById("table1")
var table2 = document.getElementById("table2")

//les deux tableaux ci dessous serviront à acceuillir les deux groupes

var tab1 = []
var tab2 = []



personnes.forEach(element => {
   
        //creation et insertion des tr contenant les noms des personnes
        var personne = element
        var tr = document.createElement("tr")
        console.log(personne);
        tr.append(personne)
       
        //creation d'une variable qui contiendra un aleatoire entre 0 et 1 
        var rdm = Math.random()
            //si ce nb est plus grand que 0.5 (la moitier) et que la longeur du tableau n'excéde pas 8 
            // on envoies l'element dans le premier tableau 
        
            if(rdm>0.5 && tab1.length < 8){
                
                table1.appendChild(tr)
                tab1.push(element)
            //sinon ça part dans le second tableau 
            }else{
            
                table2.appendChild(tr)
                tab2.push(element)
            }
        }
     );




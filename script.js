var personnes = ["yohan","lucas","sidney","maxime","marylise","tamara","alexandre","juan","valentin","raph","laurène","noureddine","vincent","maïalen","fanny"]
var table1 = document.getElementById("table1")
var table2 = document.getElementById("table2")

var tab1 = []
var tab2 = []


//creation et insertion des tr contenant les personnes des personnes
personnes.forEach(element => {
   

        var personne = element
        var tr = document.createElement("tr")
        console.log(personne);
        tr.append(personne)
       
        var rdm = Math.random()
    
            if(rdm>0.5 && tab1.length < 8){
                
                table1.appendChild(tr)
                tab1.push(element)
            }else{
            
                table2.appendChild(tr)
                tab2.push(element)
            }
        }
     );




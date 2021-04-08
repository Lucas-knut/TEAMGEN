var btn = document.getElementById("btn")

function getStudents(callback){
    var personnes =  ["yohan","lucas","sidney","maxime","marylise","tamara","alexandre","juan","valentin","raph","laurène","noureddine","vincent","maïalen","fanny"]
    setTimeout(()=> {
        callback(personnes)
    },2000)
    showPersonnes(personnes)
};

function showPersonnes(personnes){
    personnes.forEach(element => {
       var tr =  document.createElement("tr")
       tr.append(element)
        basetab.appendChild(tr)
    });
}


btn.addEventListener("click", () => {

    getStudents((studs=> {
        var group1 = studs.slice(0)
        aleat=[]

        while(aleat.length <7) {
            aleat.push(group1.splice(Math.floor(Math.random()*group1.length),1)[0])
        }
        updateView(group1,aleat)
    }))
})

function updateView(group1,aleat) {
    group1.forEach(element => {
        var tr = document.createElement("tr")
        tr.append(element)
        table1.appendChild(tr)
    });
    aleat.forEach(element => {
        var tr = document.createElement("tr")
        tr.append(element)
        table2.appendChild(tr)
    });
}
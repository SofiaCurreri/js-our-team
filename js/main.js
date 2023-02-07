// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto

//INFO MEMBRI
// Wayne Barnett		Founder & CEO			wayne - barnett - founder - ceo.jpg
// Angela Caroll		Chief Editor			angela - caroll - chief - editor.jpg
// Walter Gordon		Office Manager			walter - gordon - office - manager.jpg
// Angela Lopez		    Social Media Manager	angela - lopez - social - media - manager.jpg
// Scott Estrada		Developer				scott - estrada - developer.jpg
// Barbara Ramos		Graphic Designer		barbara - ramos - graphic - designer.jpg



// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];


// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

console.log(team);
for (const member of team) {
    console.log("nome: " + member.nome);
    console.log("ruolo: " + member.ruolo);
    console.log("foto: " + member.foto);
}


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
const teamMembers = document.getElementById("team");

// for (let i = 0; i < team.length; i++) {
//     teamMembers.innerHTML += team[i].nome + "<br>" + team[i].ruolo + "<br>" + team[i].foto + "<br><br>";
// }


// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// for (let i = 0; i < team.length; i++) {
//     teamMembers.innerHTML += `
//     ${team[i].nome} 
//     <br>
//     ${team[i].ruolo} 
//     <br>
//     <img src = "./img/${team[i].foto}"> 
//     <br><br>`;
// }


// BONUS 2:
// Organizzare i singoli membri in card / schede

for (let i = 0; i < team.length; i++) {
    teamMembers.innerHTML += `
    <div class = "card text-center mx-4 my-5"> 
        <img src = "./img/${team[i].foto}"> 
        <h2 class = "mt-3"> ${team[i].nome} </h2>
        <h4 class = "mt-1 mb-3"> ${team[i].ruolo} </h4>
    </div>`;
}
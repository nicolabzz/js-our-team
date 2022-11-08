/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!


Questi sono i dati delle persone:
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

//creazione array di oggetti
let arrayStartTeamCards = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    }
];

cardCreator(); //attivazione della function appena il programma viene lanciato

//function che permette di creare una nuova card
document.getElementById("addMemberButton").addEventListener(
    "click",
    function () {
        const addName = document.getElementById("name").value; 
        const addRole = document.getElementById("role").value; 
        const addImg = document.getElementById("image").value; 
        const addMember = {
            name: addName,
            role: addRole,
            img: addImg
        }
        arrayStartTeamCards.push(addMember);
        cardCreator();
    }
);


//function che permette di creare le card, verra lanciara appena inizia il programma
function cardCreator() {
    const divContainer = document.querySelector('.team-section');
    let chiave = '';

    for (let i = 0; i < arrayStartTeamCards.length; i++) {
        const nameX = arrayStartTeamCards[i].name;
        const roleX = arrayStartTeamCards[i].role;
        const imgX = arrayStartTeamCards[i].img;
        chiave +=
        `<div class="user-card">
            <div class="card-image">
                <img src="img/${imgX}" alt="${nameX}">
            </div>
            <div class="card-text">
                <h3>${nameX}</h3>
                <h5>${roleX}</h5>
            </div>
        </div>`;
    };
    divContainer.innerHTML = chiave;
};
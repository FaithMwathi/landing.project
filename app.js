const containerEl = document.querySelector(".container")

let careers = ["webDev","Software Engineer","youtuber","musician","instructor"]

let careerIndex = 0

let character = 0;

updateText();

function updateText(){
   character++;
    containerEl.innerHTML = 
    ` <h1 >I am ${careers[careerIndex].slice(0,1) === "i" ? "an" : "a"47} ${careers[careerIndex].slice(0,character)}</h1>`;
    setTimeout(updateText,400);
    
    if(character === careers[careerIndex].length){
        careerIndex++;
        character = 0;
    }
    if(careerIndex===careers.length){

        careerIndex = 0

    }



}



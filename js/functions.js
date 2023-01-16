class character {
    constructor(name, age, height, weight, hobbies, birthday, speed, startingSpeed, might, startingMight, sanity, startingSanity, knowledge, startingKnowledge) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.hobbies = hobbies;
        this.birthday = birthday;
        this.speed = speed;
        this.startingSpeed = startingSpeed;
        this.might = might;
        this.startingMight= startingMight;
        this.sanity = sanity;
        this.startingSanity = startingSanity;
        this.knowledge = knowledge;
        this.startingKnowledge = startingKnowledge;
    }
}

longfellow = new character(
    "Professor Longfellow",
    57,
    180,
    69,
    "Gaelic Music, Drama, Fine Wines",
    "July 27th",
    [0, 2, 2, 4, 4, 5, 5, 6, 6], 4,
    [0, 1, 2, 3, 4, 5, 5, 6, 6], 3,
    [0, 1, 3, 3, 4, 5, 5, 6, 7], 3,
    [0, 4, 5, 5, 5, 5, 6, 7, 8], 5
    )

function checkStartingTrait(trait, num){
    let radios = document.getElementsByName(trait);
    
    for(let i = 1; i < radios.length; i++){
        if(radios[i].value == num){
            radios[i].checked = true;
            break;
        }
    }
}

function selectCharacter(character){
    document.getElementById('Age').value = character.age;
    document.getElementById('Height').value = character.height;
    document.getElementById('Weight').value = character.weight;
    document.getElementById('Hobbies').value = character.hobbies;
    document.getElementById('Birthday').value = character.birthday;
    //document.getElementById('speed0Label').innerHTML = character.speed[0];
    document.getElementById('speed1Label').innerHTML = character.speed[1];
    document.getElementById('speed2Label').innerHTML = character.speed[2];
    document.getElementById('speed3Label').innerHTML = character.speed[3];
    document.getElementById('speed4Label').innerHTML = character.speed[4];
    document.getElementById('speed5Label').innerHTML = character.speed[5];
    document.getElementById('speed6Label').innerHTML = character.speed[6];
    document.getElementById('speed7Label').innerHTML = character.speed[7];
    document.getElementById('speed8Label').innerHTML = character.speed[8];
    checkStartingTrait("Speed", character.startingSpeed);
    //document.getElementById('might0Label').innerHTML = character.might[0];
    document.getElementById('might1Label').innerHTML = character.might[1];
    document.getElementById('might2Label').innerHTML = character.might[2];
    document.getElementById('might3Label').innerHTML = character.might[3];
    document.getElementById('might4Label').innerHTML = character.might[4];
    document.getElementById('might5Label').innerHTML = character.might[5];
    document.getElementById('might6Label').innerHTML = character.might[6];
    document.getElementById('might7Label').innerHTML = character.might[7];
    document.getElementById('might8Label').innerHTML = character.might[8];
    checkStartingTrait("Might", character.startingMight);
    //document.getElementById('sanity0Label').innerHTML = character.sanity[0];
    document.getElementById('sanity1Label').innerHTML = character.sanity[1];
    document.getElementById('sanity2Label').innerHTML = character.sanity[2];
    document.getElementById('sanity3Label').innerHTML = character.sanity[3];
    document.getElementById('sanity4Label').innerHTML = character.sanity[4];
    document.getElementById('sanity5Label').innerHTML = character.sanity[5];
    document.getElementById('sanity6Label').innerHTML = character.sanity[6];
    document.getElementById('sanity7Label').innerHTML = character.sanity[7];
    document.getElementById('sanity8Label').innerHTML = character.sanity[8];
    checkStartingTrait("Sanity", character.startingSanity);
    //document.getElementById('knowledge0Label').innerHTML = character.knowledge[0];
    document.getElementById('knowledge1Label').innerHTML = character.knowledge[1];
    document.getElementById('knowledge2Label').innerHTML = character.knowledge[2];
    document.getElementById('knowledge3Label').innerHTML = character.knowledge[3];
    document.getElementById('knowledge4Label').innerHTML = character.knowledge[4];
    document.getElementById('knowledge5Label').innerHTML = character.knowledge[5];
    document.getElementById('knowledge6Label').innerHTML = character.knowledge[6];
    document.getElementById('knowledge7Label').innerHTML = character.knowledge[7];
    document.getElementById('knowledge8Label').innerHTML = character.knowledge[8];
    checkStartingTrait("Knowledge", character.startingKnowledge);

}
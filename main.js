import  {phrases}  from "./phrases.js";

const btn = document.getElementById('btnCheck')
const phraseShowText = document.getElementById('phraseShow');
const championName = document.getElementById('championName');

const getFullInfoChampion = phrases.map((index, frase, champion)=>{
    return index, frase, champion
})

const championInfo = {
    champion: {...getFullInfoChampion[0]}
}

let random = Math.floor(Math.random() * phrases.length)

btn.addEventListener('click', checkChampion)

function checkChampion(){
    let strChampionNameCorrectly = showPhrase()

    if(championName.value == strChampionNameCorrectly){
        alert("Acertou")
    }else if(!championName.value){
        alert("Digite o nome")
    }
    else{
        alert("Errou");
    }
}

function showPhrase(id, phrase, name){
    id = championInfo.champion[random].id
    phrase = championInfo.champion[random].phrase
    name = championInfo.champion[random].champion
    let storage = championName.value
    console.log(storage)

    if(id == championInfo.champion[random].id){
        phraseShowText.innerHTML = phrase
    }else{
        phraseShowText.innerHTML = `Error`
    }

    return name
}

showPhrase()
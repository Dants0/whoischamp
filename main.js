import { phrases } from "./phrases.js";

const btn = document.getElementById('btnCheck')
const phraseShowText = document.getElementById('phraseShow');
const championName = document.getElementById('championName');
const checkbox = document.getElementById("checkbox");
const sun = document.querySelector('.fa fas-sun');

const getFullInfoChampion = phrases.map((index, frase, champion) => {
    return index, frase, champion
})

const championInfo = {
    champion: { ...getFullInfoChampion[0] }
}

let random = Math.floor(Math.random() * phrases.length)

btn.addEventListener('click', checkChampion)

function checkChampion() {
    let strChampionNameCorrectly = showPhrase()

    if (championName.value == strChampionNameCorrectly) {
        alert("Acertou")
    } else if (!championName.value) {
        alert("Digite o nome")
    }
    else {
        alert("Errou");
    }
}

function showPhrase(id, phrase, name) {
    id = championInfo.champion[random].id
    phrase = championInfo.champion[random].phrase
    name = championInfo.champion[random].champion

    if (id == championInfo.champion[random].id) {
        phraseShowText.innerHTML = phrase
    } else {
        phraseShowText.innerHTML = `Error`
    }

    return name
}

checkbox.addEventListener("change", () => {
    if (document.body.classList.toggle("dark") == true) {
        document.getElementById('title').style.color = "#f1f1f1"
        document.getElementById('phraseShow').style.color = "#f1f1f1"
        document.getElementById('phrase').style.color = "#f1f1f1"
        document.getElementById('desc').style.color = "#f1f1f1"
    } else {
        document.getElementById('title').style.color = "#000"
        document.getElementById('phraseShow').style.color = "#000"
        document.getElementById('phrase').style.color = "#000"
        document.getElementById('desc').style.color = "#000"
    }
})


showPhrase()
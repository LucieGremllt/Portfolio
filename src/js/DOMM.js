import {changeTheme} from "./background.js";
import {loadLanguage} from "./i18n.js";

document.getElementById("Projects").addEventListener("click", () => {
    if(!document.getElementById("Projects").classList.contains("disabled")){
        window.location.href = "projects.html";
    }
});

document.getElementById("Home").addEventListener("click", () => {
    if(!document.getElementById("Home").classList.contains("disabled")) {
        window.location.href = "index.html";
    }
});

const type = document.querySelectorAll("section nav button")
const articles = document.querySelectorAll(".type1")

type.forEach(element => {
    element.addEventListener("click", ()=>{
        if(!element.classList.contains("disabled")){
            type.forEach(e =>{
                if(e.classList.contains("disabled")){
                    e.classList.remove("disabled");
                }
            })
            element.classList.add("disabled");
            SortElem(articles, element.getAttribute("data-i18n"));
            changeTheme(element.getAttribute("data-i18n"));
        }
    })
})

function SortElem(elements, type){
    elements = [...elements];
    let elementsSorted= [];
    elements.forEach( element => {
        element.classList.remove("hidden");
        if(element.classList.contains(`${type}`)){
            elementsSorted.push(element);
        }
        else {
            element.classList.add("hidden");
        }
    })
    elements.sort((a,b) => {
    const dateA = a.querySelector("h3").textContent.trim();
    const dateB = b.querySelector("h3").textContent.trim();

    const [monthA, yearA] = dateA.split("/").map(Number);
    const [monthB, yearB] = dateB.split("/").map(Number);

    const valueA = yearA * 100 + monthA;
    const valueB = yearB * 100 + monthB;

    return valueB - valueA;
    })
    elementsSorted.forEach(section => document.querySelector("body").appendChild(section));
}

const cards = document.querySelectorAll(".card")
cards.forEach(card => {
    const toggle = card.querySelector(".toggleButton");
    toggle.addEventListener("click", ()=>{
        const cardContent = card.querySelector(".cardContent")
        const cardButton = card.querySelector(".toggleButton");
        if(cardContent.classList.contains("open")){
            cardContent.classList.remove("open");
            cardButton.dataset.i18n="more";
            const language = localStorage.getItem("language") || "fr";
            loadLanguage(language);
        }
        else{
            cardContent.classList.add("open");
            cardButton.dataset.i18n="less";
            const language = localStorage.getItem("language") || "fr";
            loadLanguage(language);
        }
    })
})
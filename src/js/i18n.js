export async function loadLanguage(lang) {
    localStorage.setItem("language", lang);
    const response = await fetch(`langages/${lang}.json`);
    const translations = await response.json();
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        element.innerHTML = translations[key];
    });
}

window.addEventListener("DOMContentLoaded", ()=>{
    const language = localStorage.getItem("language") || "fr";
    loadLanguage(language);
})


/**
 * passer la langue en français
 */
document.getElementById("fr").addEventListener("click", ()=>{
    loadLanguage("fr");
})
/**
 * passer la langue en anglais
 */
document.getElementById("en").addEventListener("click", ()=>{
    loadLanguage("en");
})
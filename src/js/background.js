const background = document.querySelector(".background");

export function changeTheme(type){

    document
        .querySelector(".bg.active")
        ?.classList.remove("active");

    document
        .querySelector(".bg." + `bg${type}`)
        .classList.add("active");

}


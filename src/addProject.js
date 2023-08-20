export default function onClickAddProject() {
    const plusSign = document.querySelector("#new-project-button")
    plusSign.addEventListener("click", popUpAddProject)
}

function popUpAddProject() {
    const popUpFormContainer = document.querySelector("#pop-up-add-project")
    popUpFormContainer.style.display = "flex"
    const formX = document.querySelector("#form-x2")
    formX.addEventListener("click", () => {
        popUpFormContainer.style.display = "none";
    })  
}


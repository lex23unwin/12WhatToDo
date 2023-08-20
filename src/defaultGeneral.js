export default function defaultGeneral() {
    const icon = document.querySelector("#new-task-button")
    icon.addEventListener("click", () => {
        const mainTasksContentNone = document.querySelector("#main-tasks-content-none")
        mainTasksContentNone.style.display = "none"
        const mainTasksContentForm = document.querySelector("#main-tasks-content-form")
        mainTasksContentForm.style.display = "flex"
        const formX = document.querySelector("#form-x")
        formX.addEventListener("click", () => {
            const form = document.querySelector("#form-id")
            form.reset();
            mainTasksContentForm.style.display = "none";
            mainTasksContentNone.style.display = "flex";
        })
    })
}
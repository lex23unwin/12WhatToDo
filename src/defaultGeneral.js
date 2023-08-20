export default function defaultGeneral() {
    const icon = document.querySelector("#new-task-button")
    icon.addEventListener("click", () => {
        const mainTasksContentNone = document.querySelector("#main-tasks-content-none")
        mainTasksContentNone.style.display = "none"
        const mainTasksContentForm = document.querySelector("#main-tasks-content-form")
        mainTasksContentForm.style.display = "flex"
    })
}
export default function onClickWeekTab() {
    const weekTab = document.querySelector("#week")
    weekTab.addEventListener("click", clearFormBox)
}

function clearFormBox() {
    const mainTasksContentForm = document.querySelector("#main-tasks-content-form")
    const formId = document.querySelector("#form-id")
    formId.reset();
    if (mainTasksContentForm.style.display === "flex")
    {
        mainTasksContentForm.style.display = "none";
    }
    maybeShowNoneContent();
}

function maybeShowNoneContent() {
    const mainTasksContentNone = document.querySelector("#main-tasks-content-none")
    const mainTasksContent = document.querySelector("#main-tasks-content")
    if (mainTasksContent.hasChildNodes() === false)
    {
        mainTasksContentNone.style.display = "flex";
        renderHeader();
    }
    else {
        clearMainTasksContainer();
    }
}

function clearMainTasksContainer() {
    const mainTasksContent = document.querySelector("#main-tasks-content")
    while (mainTasksContent.hasChildNodes())
    {
        mainTasksContent.removeChild(mainTasksContent.lastChild)
    }
    const mainTasksContentNone = document.querySelector("#main-tasks-content-none")
    mainTasksContentNone.style.display = "flex";
    renderHeader();
}

function renderHeader() {
    const mainContainer = document.querySelector("#main-container")

    const mainTasksHeader = document.querySelector("#main-tasks-header")
    mainTasksHeader.textContent = "This Week's Tasks";

    const mainTasksContent = document.querySelector("#main-tasks-content")

    const mainTasksContentNone = document.querySelector("#main-tasks-content-none")
    const icon = document.querySelector("#new-task-button");
    icon.addEventListener("click", newTodayTask);
}

function newTodayTask() {
    const mainTasksContentNone = document.querySelector("#main-tasks-content-none")
    mainTasksContentNone.style.display = "none";
    const mainTasksContentForm = document.querySelector("#main-tasks-content-form")
    mainTasksContentForm.style.display = "flex";
    const formX = document.querySelector("#form-x")
    formX.addEventListener("click", () => {
        const form = document.querySelector("#form-id")
        form.reset();
        mainTasksContentForm.style.display = "none";
        mainTasksContentNone.style.display = "flex";
    })
}
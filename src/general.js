export default function onClickGeneralTab() {
    const generalTab = document.querySelector("#general")
    console.log("about to run clearFormBox")
    generalTab.addEventListener("click", clearFormBox)
}

function clearFormBox() {
    const mainTasksContentForm = document.querySelector("#main-tasks-content-form")
    const formId = document.querySelector("#form-id")
    formId.reset();
    console.log("reset form")
    if (mainTasksContentForm.style.display === "flex")
    {
        mainTasksContentForm.style.display = "none";
    }
    console.log("about to do maybeSHowNoneContent")
    maybeShowNoneContent();
}

function maybeShowNoneContent() {
    const mainTasksContentNone = document.querySelector("#main-tasks-content-none")
    const mainTasksContent = document.querySelector("#main-tasks-content")
    if (mainTasksContent.hasChildNodes() === false)
    {
        mainTasksContentNone.style.display = "flex";
        console.log("about to do renderHeader")
        renderHeader();
    }
    else {
        console.log("about to do clearMainTasksContainer")
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
    console.log("no child nodes in content, so NOW about to do renderHeader")
    renderHeader();
}

function renderHeader() {
    const mainContainer = document.querySelector("#main-container")

    const mainTasksHeader = document.querySelector("#main-tasks-header")
    mainTasksHeader.textContent = "General Tasks";

    const mainTasksContent = document.querySelector("#main-tasks-content")

    const mainTasksContentNone = document.querySelector("#main-tasks-content-none")
    const icon = document.querySelector("#new-task-button");
    console.log("add icon event listener for +")
    icon.addEventListener("click", newTodayTask);
}

function newTodayTask() {
    console.log("got into newTodayTask")
    const mainTasksContentNone = document.querySelector("#main-tasks-content-none")
    mainTasksContentNone.style.display = "none";
    console.log("made none none")
    const mainTasksContentForm = document.querySelector("#main-tasks-content-form")
    mainTasksContentForm.style.display = "flex";
    console.log("add event listnere for x")
    const formX = document.querySelector("#form-x")
    formX.addEventListener("click", () => {
        const form = document.querySelector("#form-id")
        form.reset();
        mainTasksContentForm.style.display = "none";
        mainTasksContentNone.style.display = "flex";
    })
}


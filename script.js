const inputForm = document.querySelector(".inputForm");
const inputTitle = document.querySelector(".inputTitle");
const inputdescp = document.querySelector(".inputdescp");
const addtaskPage = document.querySelector(".addTaskModule");
const addtaskBtn = document.querySelector(".addTaskBtn");

const TodoSection = document.querySelector(".tododrop");
const InprogSection = document.querySelector(".inprogdrop");
const completedSection = document.querySelector(".completedrop");

const allSections = [
    TodoSection,
    InprogSection,
    completedSection
];

let draggedItem = null;
let taskdata = {};

function makeTaskDraggable(task) {
    task.addEventListener("dragstart", () => {
        draggedItem = task;
    });
}

function createTask(title, desc) {
    const task = document.createElement("div");

    task.className =
        "task bg-blue-400 rounded-2xl p-4 flex justify-between gap-4 cursor-grab shrink-0";

    task.draggable = true;

    task.innerHTML = `
        <div>
            <h2 class="font-bold text-xl">${title}</h2>
            <p class="mt-2">${desc}</p>
        </div>

        <div class="flex items-end">
            <button class="bg-red-500 px-4 py-2 rounded-xl text-white deleteBtn">
                Delete
            </button>
        </div>
    `;

    makeTaskDraggable(task);

    task.querySelector(".deleteBtn").addEventListener("click", () => {
        task.remove();
        updateCount();
        saveTask();
    });

    return task;
}

function updateCount() {
    allSections.forEach(section => {
        const count = section.parentElement.querySelector(".count");
        count.textContent = section.querySelectorAll(".task").length;
    });
}

function saveTask() {
    taskdata = {};

    allSections.forEach(section => {
        taskdata[section.classList[0]] = Array.from(
            section.querySelectorAll(".task")
        ).map(task => ({
            title: task.querySelector("h2").textContent,
            desc: task.querySelector("p").textContent
        }));
    });

    localStorage.setItem("taskdata", JSON.stringify(taskdata));
}

function loadTask() {
    const data = JSON.parse(localStorage.getItem("taskdata"));

    if (!data) return;

    for (const sectionName in data) {
        const section = document.querySelector(`.${sectionName}`);

        data[sectionName].forEach(taskData => {
            const task = createTask(taskData.title, taskData.desc);
            section.appendChild(task);
        });
    }

    updateCount();
}

function onDragFeature(section) {
    section.addEventListener("dragover", e => {
        e.preventDefault();
    });

    section.addEventListener("dragenter", e => {
        e.preventDefault();

        section.classList.add(
            "border-2",
            "border-dashed",
            "border-white",
            "scale-105",
            "transition-all",
            "duration-200"
        );
    });

    section.addEventListener("dragleave", () => {
        section.classList.remove(
            "border-2",
            "border-dashed",
            "border-white",
            "scale-105",
            "transition-all",
            "duration-200"
        );
    });

    section.addEventListener("drop", e => {
        e.preventDefault();

        section.appendChild(draggedItem);

        section.classList.remove(
            "border-2",
            "border-dashed",
            "border-white",
            "scale-105",
            "transition-all",
            "duration-200"
        );

        updateCount();
        saveTask();
    });
}

function formInputFeature() {
    addtaskBtn.addEventListener("click", () => {
        addtaskPage.style.display = "block";
    });

    inputForm.addEventListener("submit", e => {
        e.preventDefault();

        const title = inputTitle.value.trim();
        const desc = inputdescp.value.trim();

        if (!title || !desc) return;

        const task = createTask(title, desc);

        TodoSection.appendChild(task);

        updateCount();
        saveTask();

        inputForm.reset();
        addtaskPage.style.display = "none";
    });
}

allSections.forEach(onDragFeature);

formInputFeature();

loadTask();

updateCount();
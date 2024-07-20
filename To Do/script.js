const task_input = document.getElementById("task_input");
const tasks = document.getElementsByClassName("tasks");

function add_task(){
    let task_template = `
                <span>${task_input.value}</span>
                <div class="task_controller">
                    <i class="fa-solid fa-check check"></i>
                    <i class="fa-solid fa-trash-can delete"></i>
                </div>
    `;
    const element = document.createElement("div");
    element.classList.add("task");
    element.innerHTML= task_template.trim();
    tasks[0].appendChild(element);

    element.addEventListener("click",task_controller);

    task_input.value = "";
}

function task_controller(e){
    console.log(e.target.classList.contains("check"),e.target);
    if(e.target.classList.contains("check")){
       e.target.parentNode.parentNode.childNodes[0].style.textDecoration = "line-through";
    }

    if(e.target.classList.contains("delete")){
        e.target.parentNode.parentNode.remove();
    }
}

document.getElementsByClassName("task_add_btn")[0]
.addEventListener("click",add_task);


let taskss = [
    "Write a detailed project proposal",
    "Conduct research on a specific topic",
    "Create a marketing strategy for a new product",
    "Develop a budget plan for next quarter",
    "Schedule and conduct team meetings for the week",
    "Design a new logo for the company",
    "Review and optimize website SEO",
    "Write a blog post on industry trends",
    "Implement a new software feature",
    "Organize a team-building activity",
    "Draft a contract for a new client",
    "Analyze sales data from the past month",
    "Prepare a presentation for senior management",
    "Conduct employee performance reviews",
    "Plan and execute a social media campaign",
    "Research and negotiate with potential vendors",
    "Develop a training program for new hires",
    "Update company policies and procedures",
    "Review and respond to customer feedback",
    "Prepare financial statements for the year"
  ];

function add_task_menually(value){
    let task_template = `
                <span>${value}</span>
                <div class="task_controller">
                    <i class="fa-solid fa-check check"></i>
                    <i class="fa-solid fa-trash-can delete"></i>
                </div>
    `;
    const element = document.createElement("div");
    element.classList.add("task");
    element.innerHTML= task_template.trim();
    tasks[0].appendChild(element);

    element.addEventListener("click",task_controller);

}

for (const i of taskss) {
    add_task_menually(i);
    
}
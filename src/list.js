// let count = 1;

// process
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

export const tasks = ["Eat", "Sleep", "Study"];

//action business logic
export const upDateTaskTotal = () => {
  //count lis and update
  const lists = document.querySelectorAll(".list");
  taskTotal.innerText = lists.length;
};

export const upDateDoneTaskTotal = () => {
  //count lis and update
  const lists = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = lists.length;
};

//create new list
export const createNewList = (currentTask) => {
  const list = listTemplate.content.cloneNode(true);
  // console.log(list);
  list.querySelector(".list").id = "list" + uuidv4();
  list.querySelector(".list-task").innerText = currentTask;

  return list;
};

//refactor

export const addList = (text) => {
  //   console.log(taskInput.value);
  listGroup.append(createNewList(text));
  taskInput.value = null;
  // upDateTaskTotal();
};

export const deleteList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  // console.log(listId);
  // console.log(currentList);
  // if (window.confirm("Are you sure to delete?")) {
  //   currentList.classList.add("animate__zoomOut", "animate__animated");
  //   currentList.addEventListener("animationend", () => {
  //     currentList.remove();
  //     // upDateDoneTaskTotal();
  //     // upDateTaskTotal();
  //   });
  // }

 Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if(result.isConfirmed){
    currentList.classList.add("animate__zoomOut", "animate__animated");
    currentList.addEventListener("animationend", () => {
      currentList.remove();
      // upDateDoneTaskTotal();
      // upDateTaskTotal();
    });
  }
 })
  
  //   console.log("U Delete");
};

export const editList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  const listDoneCheck = currentList.querySelector(".list-done-check");
  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");

  listEditBtn.setAttribute("disabled", true);
  listDoneCheck.setAttribute("disabled", true);

  const newInput = document.createElement("input");
  const currentTask = listTask.innerText;
  newInput.className =
    "border border-stone-900 font-mono px-2 py-1 w-[180px] focus-visible:outline-none";
  newInput.value = currentTask;
  listTask.after(newInput);
  newInput.focus();
  listTask.classList.add("hidden");

  newInput.addEventListener("blur", () => {
    listTask.innerText = newInput.value;
    listTask.classList.remove("hidden");
    newInput.remove();
    listEditBtn.removeAttribute("disabled");
    listDoneCheck.removeAttribute("disabled");
  });

  newInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      listTask.innerText = newInput.value;
      listTask.classList.remove("hidden");
      newInput.remove();
      listEditBtn.removeAttribute("disabled");
      listDoneCheck.removeAttribute("disabled");
    }
  });
};

export const doneList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  const listDoneCheck = currentList.querySelector(".list-done-check");
  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");

  // upDateDoneTaskTotal();
  listTask.classList.toggle("line-through");
  currentList.classList.toggle("scale-90");
  currentList.classList.toggle("opacity-20");
  currentList.classList.add("duration-200");
  // console.log(currentTask + "is done");
  if (listDoneCheck.checked) {
    listEditBtn.setAttribute("disabled", true);
  } else {
    listEditBtn.removeAttribute("disabled");
  }
};

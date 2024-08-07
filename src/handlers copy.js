import { addList, deleteList, doneList, editList } from "./list.js";
import { listGroup } from "./selectors.js";

export const listGroupHandler = (event) => {
  const list = event.target.closest(".list");
  // console.log(list);
  if (event.target.classList.contains("list-del-btn")) {
    deleteList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-edit-btn")) {
    // console.log("U Edit");
    editList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-done-check")) {
    // console.log("U Checked");
    doneList(event.target.closest(".list").id);
  }
};

export const addTaskBtnHandler = () => {
  if (taskInput.value.trim()) {
    addList(taskInput.value);
  } else {
    alert("Fill in the task first");
  }
};

export const taskInputHandler = (event) => {
  if (event.key === "Enter") {
    if (taskInput.value.trim()) {
      addList(taskInput.value);
    } else {
      alert("Fill in the task first");
    }
  }
};

export const deleteAllHandler = () => {
  if (confirm("Are you sure to delete all list??")) {
    const allList = listGroup.querySelectorAll(".list");
    // console.log(allList);
    allList.forEach((list) => list.remove());
  }
};

export const doneAllHandler = () => {
  if (confirm("Are you sure to done all list??")) {
    const allList = listGroup.querySelectorAll(".list");
    console.log(allList);
    allList.forEach((list) => {
      list.querySelector(".list-done-check").checked = true;
      doneList(list.id);
    });
  }
};

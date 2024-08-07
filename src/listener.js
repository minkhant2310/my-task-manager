import {
  
  addTaskBtnHandler,
  deleteAllHandler,
  doneAllHandler,
  listGroupHandler,
  taskInputHandler,
} from "./handlers.js";
import {
  addInputBtn,
  deleteAll,
  doneAll,
  listGroup,
  taskInput,
} from "./selectors.js";

const listener = () => {
  addInputBtn.addEventListener("click", addTaskBtnHandler);
  taskInput.addEventListener("keyup", taskInputHandler);
  listGroup.addEventListener("click", listGroupHandler);
  deleteAll.addEventListener("click", deleteAllHandler);
  doneAll.addEventListener("click", doneAllHandler);
};

export default listener;

import { upDateDoneTaskTotal, upDateTaskTotal } from "./list.js";
import { listGroup } from "./selectors.js";

const observer = () => {
  // console.log("this is observer");
  //watch the listGroup

  const job = () => {
    console.log("u made changes");
    upDateDoneTaskTotal();
    upDateTaskTotal();
  };

  const observerOptions = {
    childList: true,
    subtree: true,
    attributes: true,
  };

  const listGroupObserver = new MutationObserver(job);
  listGroupObserver.observe(listGroup, observerOptions);
};

export default observer;

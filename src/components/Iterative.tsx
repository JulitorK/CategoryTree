import React from "react";
import { iterativeContext } from "../index";
import Category from "@components/Category";

const renderIteratively = (state, id) => {
  const queue: any[] = [{ id }];
  let component;
  while (queue.length) {
    const action = queue.shift();
    const file = state[action.id];
    const childrenRef = [];
    if (!file) {
      return new Error("child not found");
    }
    file.children.forEach(id => queue.push({ id, childrenRef: childrenRef }));
    if (!action.childrenRef) {
      component = (
        <Category node={file} id={action.id} children={childrenRef} />
      );
    } else {
      action.childrenRef.push(
        <Category
          node={file}
          key={action.id}
          id={action.id}
          children={childrenRef}
        />
      );
    }
  }
  return component;
};

const IterativeTree = () => {
  const { state } = React.useContext(iterativeContext);
  return renderIteratively(state, 0); // Root file id
};

export default IterativeTree;

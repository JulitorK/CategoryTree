import React from "react";
import { recursiveContext } from "../index";
import Category from '@components/Category';

const renderRecursively = (state, id) => {
  const file = state[id];
  return (
    file && (
      <Category
        node={file}
        key={id}
        id={id}
        recursive
        children={file.children.map(id => renderRecursively(state, id))}
      />
    )
  );
};

const RecursiveTree = () => {
  const { state } = React.useContext(recursiveContext);
  return renderRecursively(state, 0); // Root file id
};

export default RecursiveTree;

import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import { iterativeContext, recursiveContext } from "../index";
import { CategoryInterface } from "@components/RerenderProvider";

const Wrapper = styled.div`
  padding-left: 30px;
`;

const Button = styled.button`
  background: #e0e0e0;
  padding: 5px 5px;
  margin: 2px;
`;

interface CategoryProps {
  node: CategoryInterface;
  id: number;
  recursive?: boolean;
}

const Category: React.FC<CategoryProps> = props => {
  const { addNode } = useContext(
    props.recursive ? recursiveContext : iterativeContext
  );
  const [showInput, updateShowInput] = useState(false);
  const [inputValue, updateInputValue] = useState("");
  const handleClose = () => {
    updateShowInput(false);
  };
  const handleAdd = () => {
    addNode(props.node.id, inputValue);
    updateInputValue("");
    handleClose();
  };
  return (
    <Wrapper data-test-id={props.node.name + "_category"}>
      <span>{props.node.name}</span>
      {!showInput && (
        <Button
          data-test-id={props.node.name + "_add"}
          onClick={() => updateShowInput(true)}
        >
          add
        </Button>
      )}
      {showInput && (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={e => updateInputValue(e.target.value)}
            data-test-id={props.node.name + "_input"}
          />
          <Button data-test-id={props.node.name + "_add"} onClick={handleAdd}>
            submit
          </Button>
          <Button onClick={handleClose}>x</Button>
        </>
      )}
      {props.children}
    </Wrapper>
  );
};

export default Category;

import React, { useState } from "react";

export interface CategoryInterface {
  name: string;
  children: number[];
  parentId?: number;
  id: number;
}

export interface State {
  [key: number]: CategoryInterface;
}

const initialState: State = {
  0: { name: "Root", children: [1, 2], id: 0 },
  1: { name: "Child1", children: [], id: 1 },
  2: { name: "Child2", children: [], id: 2 }
};

interface ProviderProps {
  context: React.Context<any>;
}

const RerenderProvider: React.FC<ProviderProps> = ({ children, context }) => {
  const [state, updateState] = useState(initialState);
  const [, set] = React.useState();
  const update = React.useCallback(() => set({}), []);
  const addNode = (id, name) => {
    const newId = Date.now();
    state[id].children.push(newId);
    state[newId] = { name, id: newId, children: [] };
    updateState(state);
    update();
  };
  return (
    <context.Provider value={{ state, addNode }}>{children}</context.Provider>
  );
};

export default RerenderProvider;

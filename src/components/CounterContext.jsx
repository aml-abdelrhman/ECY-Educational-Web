import React, { createContext, useReducer } from "react";

// 1. إنشاء Context
export const CounterContext = createContext();

// 2. تعريف reducer لإدارة الحالة
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0};
    default:
      return state;
  }
};

// 3. إنشاء Provider
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

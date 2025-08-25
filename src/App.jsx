import React, { useState, useEffect } from "react";
import { Header } from "../Components/Header";
import { Tabs } from "../Components/Tabs";
import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";

function App() {
  // const todos = [
  //   { input: "Hello! Add your first todo!", complete: true },
  //   { input: "Get the groceries!", complete: false },
  //   { input: "Learn how to web design", complete: false },
  //   { input: "Say hi to gran gran", complete: true },
  // ];

  const [todos, setTodos] = useState([]);

  const [selectedTab, SetSelectedTab] = useState("Open");

  function HandleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    HandleSaveData(newTodoList);
  }

  function HandleEditTodo(index) {
    let newTodoList = [...todos];
    let completeTodo = todos[index];
    completeTodo["complete"] = true;
    newTodoList[index] = completeTodo;
    setTodos(newTodoList);
    HandleSaveData(newTodoList);
  }

  function HandleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });

    setTodos(newTodoList);
    HandleSaveData(newTodoList);
  }

  function HandleSaveData(currentTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={SetSelectedTab}
        todos={todos}
      />
      <TodoInput handleAddTodo={HandleAddTodo} />
      <TodoList
        handleEditTodo={HandleEditTodo}
        handleDeleteTodo={HandleDeleteTodo}
        selectedTab={selectedTab}
        setSelectedTab={SetSelectedTab}
        todos={todos}
      />
    </>
  );
}

export default App;

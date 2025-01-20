import { useState } from "react";
import styles from "../styles/todoPage.css";
import AllTodo from "./AllTodo";

const TodoPage = () => {

  const [todoData, setTodoData] = useState()

  return (
    <div className="todoPage">
      <div className="todoPageCont">
        <div className="todo-edit-cont">
          <h1>Add to-do</h1>
          <div className="todo-edit">
            <div className="todoAllInput">
              <input type="text" placeholder="Enter to-do title"></input>
              <textarea placeholder="Enter to-do description"></textarea>
            </div>
            <div className="todoPageAllBtn">
              <button className="addNewBtn">Add New</button>
              <button className="updateBtn">Update to-do</button>
              <button className="deleteAllBtn">Delete All</button>
            </div>
          </div>
        </div>
          <AllTodo />
      </div>
    </div>
  );
};

export default TodoPage;

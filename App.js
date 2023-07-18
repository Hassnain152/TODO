import React, { useState } from "react";

import "./todo.css";

const App = () => {
  const [inputList, setInputList] = useState(" ");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  // const [addItem, setaddItems] = useState([]);
  const Deleteitem = () => {
    console.log("delete");
  };
  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className="h11">TODO List</h1>
          <br />
          <input
            className="inpt"
            type="text"
            placeholder="Add Item"
            value={inputList}
            onChange={itemEvent}
          />

          <button className="btn" onClick={listOfItem}>
            +
          </button>
          <h4
            style={{
              color: "pink",
              fontSize: 30,
            }}
          >
            ToDo Tasks
          </h4>

          <ol className="oll">
            {Items.map((itemval) => {
              return (
                <div>
                  <li
                    style={{
                      color: "white",
                      fontSize: 30,
                    }}
                    onClick={Deleteitem}
                  >
                    →{itemval}
                  </li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

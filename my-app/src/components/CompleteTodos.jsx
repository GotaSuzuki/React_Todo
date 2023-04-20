import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className='complete-area'>
        <ul>
          <p className='title'>完了のTODO</p>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <div className='list-row'>
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
  );
};
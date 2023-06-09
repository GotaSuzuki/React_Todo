import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className='incomplete-area'>
      <ul>
        <p className='title'>未完了のTODO</p>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <div className='list-row'>
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
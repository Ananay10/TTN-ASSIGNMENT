import React from "react";
import './ListItems.css';

function ListItems(props) {
  const items = props.items;
  const listItems = items.map(item => {
    let str = item.text;
    let res = str.split("-");
    return (
      <div className="list" key={item.key}>
      <input id="inp-1"
        type="text"
        className="title"
        value={res[0]}
        onChange={e => {
          props.setUpdate(`${e.target.value}-${res[1]}`, item.key);
        }}
      />

      <input
        type="text"
        className="quantity"
        value={res[1]}
        onChange={e => {
          props.setUpdate(`${res[0]}-${e.target.value}`, item.key);
        }}
      />
      <button
        onClick={() => {
          props.deleteItem(item.key);
        }}
      >
        Delete
      </button>
    </div>
  );
  });
  return <div>{listItems}</div>;
}

export default ListItems;

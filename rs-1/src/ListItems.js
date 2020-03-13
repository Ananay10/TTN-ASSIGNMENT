import React from "react";
import './ListItems.css';

function ListItems(props) {
  const items = props.items;
  const listItems = items.map(item => {
    let str = item.text;
    let res = str.split("-");
    return (
      <div className="list" key={item.key}>
        <span className="title">{res[0]}</span>
        <span className="quantity">{res[1]}</span>
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

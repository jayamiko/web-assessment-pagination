import React from 'react';

export default function Button(props) {
  return (
    <button
      key={props.key}
      name={props.name}
      className={props.styles}
      onClick={props.onCLick}
    >
      {props.children}
    </button>
  );
}

import React from "react";

export default function Typography() {
  const text = "Bitcoin + 5,17%";
  return (
    <>
      <h2>Typography</h2>
      <code>Display 1</code>
      <h2 className="display-1">{text}</h2>
      <code>Display 2</code>
      <h2 className="display-2">{text}</h2>
      <code>Display 3</code>
      <h2 className="display-3">{text}</h2>
      <code>Title 1</code>
      <h2 className="title-1">{text}</h2>
      <code>Title 2</code>
      <h2 className="title-2">{text}</h2>
      <code>Title 3</code>
      <h2 className="title-3">{text}</h2>
      <code>Body 1</code>
      <p className="body-1">{text}</p>
      <code>Body 2</code>
      <p className="body-2">{text}</p>
      <code>Body 3</code>
      <p className="body-3">{text}</p>
    </>
  );
}

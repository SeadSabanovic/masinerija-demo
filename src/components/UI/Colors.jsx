import React from "react";

export default function Colors() {
  const colors = [
    {
      name: "Black",
      var: "--color-black",
      hex: "#1f1f1f",
      contrast: "#FFFFFF",
    },
    {
      name: "Grey 5",
      var: "--color-grey-5",
      hex: "#8c8f94",
      contrast: "#FFFFFF",
    },
    {
      name: "Grey 4",
      var: "--color-grey-4",
      hex: "#a9abaf",
      contrast: "#FFFFFF",
    },
    {
      name: "Grey 3",
      var: "--color-grey-3",
      hex: "#d3d7dc",
      contrast: "#FFFFFF",
    },
    {
      name: "Grey 2",
      var: "--color-grey-2",
      hex: "#ebebeb",
      contrast: "#000",
    },
    {
      name: "Grey 1",
      var: "--color-grey-1",
      hex: "#f4f4f4",
      contrast: "#000",
    },
    {
      name: "White",
      var: "--color-white",
      hex: "#fff",
      contrast: "#000",
    },
    {
      name: "Blue",
      var: "--color-blue",
      hex: "#00b1f4",
      contrast: "#fff",
    },
    {
      name: "Dark Blue",
      var: "--color-dark-blue",
      hex: "#003e70",
      contrast: "#fff",
    },
    {
      name: "Yellow",
      var: "--color-yellow",
      hex: "#ffcb00",
      contrast: "#fff",
    },
    {
      name: "Brown",
      var: "--color-brown",
      hex: "#665100",
      contrast: "#fff",
    },
    {
      name: "Green",
      var: "--color-green",
      hex: "#85e0a3",
      contrast: "#fff",
    },
    {
      name: "Dark Green",
      var: "--color-dark-green",
      hex: "#417652",
      contrast: "#fff",
    },
    {
      name: "Red",
      var: "--color-red",
      hex: "#ee684f",
      contrast: "#fff",
    },
    {
      name: "Dark Red",
      var: "--color-dark-red",
      hex: "#6a1e10",
      contrast: "#fff",
    },
  ];
  return (
    <div className="colors">
      <h2>Colors</h2>
      {colors.map((color, index) => {
        return (
          <React.Fragment key={index}>
            <code>{color.name}</code>
            <div
              className="colors__color"
              style={{
                background: `var(${color.var})`,
                color: `${color.contrast}`,
              }}
            >
              {color.hex}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

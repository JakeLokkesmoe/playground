import React from "react";

class DefaultPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.canvas = React.createRef();
  // }

  // componentDidMount() {
  //   // window.requestAnimationFrame(this.updateCanvas);
  // }

  // componentDidUpdate() {
  //   //window.requestAnimationFrame(this.updateCanvas);
  // }

  // updateCanvas = () => {
  //   const canvas = this.canvas.current;
  //   const ctx = canvas.getContext("2d");

  //   const w = window.innerWidth,
  //     h = window.innerHeight,
  //     spacing = 20;

  //   canvas.width = w;
  //   canvas.height = h;

  //   ctx.clearRect(0, 0, w, h);

  //   ctx.fillStyle = "#000";
  //   ctx.fillRect(0, 0, w, h);

  //   ctx.fillStyle = "#fff";
  //   for (let x = spacing; x <= w - spacing; x += spacing) {
  //     for (let y = spacing; y <= h - spacing; y += spacing) {
  //       ctx.fillRect(x, y, 1, 1);
  //     }
  //   }
  // };

  render() {
    return <div>Hello world!</div>;
  }
}

export default DefaultPage;

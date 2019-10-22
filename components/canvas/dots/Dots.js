import React, { Component } from "react";
import Canvas from "../Canvas";

const RESIZE_DELAY = 100;

class Dots extends Component {
  constructor(props) {
    super(props);

    this.state = { width: 0, height: 0 };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    let delay = 0;
    if (this.resizeTm) {
      clearTimeout(this.resizeTm);
      delay = RESIZE_DELAY;
    }
    const fn = () => {
      this.setState({
        width: this.getWindowWidth(),
        height: this.getWindowHeight()
      });
    };
    this.resizeTm = setTimeout(fn, delay);
  }

  getWindowWidth() {
    return typeof window != "undefined" ? window.innerWidth : 0;
  }

  getWindowHeight() {
    return typeof window != "undefined" ? window.innerHeight : 0;
  }

  render() {
    const { width, height } = this.state;
    return (
      <div className="canvas-wrapper">
        <Canvas width={width} height={height} />
        <style jsx>{`
          .canvas-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #e800ff, #00ff0a);
          }

          .canvas-wrapper canvas {
            position: relative;
          }
        `}</style>
      </div>
    );
  }
}

export default Dots;

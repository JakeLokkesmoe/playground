import React, { Component } from "react";

export class Canvas extends Component {
  componentDidMount() {
    this.ctx = this.refs.canvas.getContext("2d", { alpha: true });
    const { redraw } = this.props;
    this.handleClick = this.handleClick.bind(this);
    this.initRatio();
    this.draw();
    if (redraw) {
      this.initRedraw(redraw);
    }
  }

  componentDidUpdate(oldProps) {
    const { width, height, redraw } = this.props;
    if (oldProps.width !== width || oldProps.height !== height) {
      this.initRatio();
    }
    if (oldProps.redraw !== this.props.redraw) {
      clearInterval(this.redrawInterval);
      if (redraw) {
        this.initRedraw(redraw);
      }
    }
    this.draw();
  }

  initRedraw(redraw) {
    clearInterval(this.redrawInterval);
    if (redraw) {
      this.redrawInterval = window.setInterval(this.draw, redraw);
    }
  }

  draw() {
    const { width, height } = this.props;
    const spacing = 30;

    window.requestAnimationFrame(() => {
      this.clear();

      this.ctx.fillStyle = "#fff";
      for (
        let x = (spacing + (width % spacing)) / 2;
        x <= width - spacing / 2;
        x += spacing
      ) {
        for (
          let y = (spacing + (height % spacing)) / 2;
          y <= height - spacing / 2;
          y += spacing
        ) {
          this.ctx.clearRect(x - 1, y - 1, 2, 2);
        }
      }
    });
  }

  initRatio() {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const backingStoreRatio = this.getBackingRatio();
    const ratio = this.getRatio();

    if (devicePixelRatio !== backingStoreRatio) {
      this.ctx.scale(ratio, ratio);
    }
  }

  clear() {
    const { width, height } = this.props;

    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, width, height);
  }

  getBackingRatio() {
    if (!this.ctx) return 1;
    return (
      this.ctx.webkitBackingStorePixelRatio ||
      this.ctx.mozBackingStorePixelRatio ||
      this.ctx.msBackingStorePixelRatio ||
      this.ctx.oBackingStorePixelRatio ||
      this.ctx.backingStorePixelRatio ||
      1
    );
  }

  getRatio() {
    const devicePixelRatio =
      typeof window !== "undefined" ? window.devicePixelRatio : 1;

    return devicePixelRatio / this.getBackingRatio();
  }

  handleClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { width, height } = this.props;
    const ratio = this.getRatio();
    const deviceWidth = ratio * width;
    const deviceHeight = ratio * height;

    return (
      <canvas
        className="Canvas"
        width={deviceWidth}
        height={deviceHeight}
        style={{
          width,
          height
        }}
        onClick={this.handleClick}
        ref="canvas"
      />
    );
  }
}

export default Canvas;

import React, { Component } from "react";
import { Node, Shaders } from "gl-react";
import PropTypes from "prop-types";

const shaders = Shaders.create({
  Negative: {
    frag: `precision highp float;
varying vec2 uv;
uniform sampler2D t;
uniform float factor;

void main () {
  vec4 c = texture2D(t, uv);
  gl_FragColor = vec4(mix(c.rgb, 1.0 - c.rgb, factor), c.a);
}`
  }
});

export default class Negative extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    factor: PropTypes.number
  };
  static defaultProps = {
    factor: 1
  };
  render() {
    const { children: t, factor } = this.props;
    return (
      <Node
        shader={shaders.Negative}
        uniforms={{
          t,
          factor
        }}
      />
    );
  }
}

const GL = require("gl-react");
const React = require("react");

const {
  PropTypes
} = React;

const shaders = GL.Shaders.create({
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

module.exports = GL.createComponent(
  ({ children: t, factor }) =>
  <GL.Node
    shader={shaders.Negative}
    uniforms={{
      t,
      factor
    }}
  />,
{
  displayName: "Negative",
  defaultProps: {
    factor: 1
  },
  propTypes: {
    children: PropTypes.any.isRequired,
    factor: PropTypes.number
  }
});

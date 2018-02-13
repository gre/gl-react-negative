# gl-react-negative ![](https://img.shields.io/npm/v/gl-react-negative.svg) ![](https://img.shields.io/badge/gl--react-3-05F561.svg) ![](https://img.shields.io/badge/gl--react-dom%20%7C%20native-f90.svg)

[Universal](https://projectseptemberinc.gitbooks.io/gl-react/content/docs/universal.html) gl-react **negative effect**

## Props

* `children` **(required)**: the content to negate.
* `factor`: optionally the intensity of the effect. 1.0 is normal negative effect. 0.0 completely disable the effect.

## Usage Examples

```js
import { Negative } from "gl-react-negative";
```

```html
<Negative>...</Negative>
```

```html
<Negative factor={1.2}>...</Negative>
```

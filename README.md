# console clean loader for webpack

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### Simple API

``` javascript
require("console-clean-loader!./module-a.js");
```

## Recommended configuration

``` javascript
{
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader!console-clean-loader" }
    ]
  }
}
```

## Install

```
npm install console-clean-loader
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

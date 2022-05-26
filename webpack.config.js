const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js", //crea un punto de entrada
  output: {
    path: path.resolve(__dirname, "public"), //donde va a estar el output del archivo, en el folder publico
    filename: "main.js", //se genera cuando corremos nuestro proyecto, convierte todo en un solo documento
  },

  target: "web", //como va a correr nuestro proyecto, le estamos diciendo que es una aplicacion web
  devServer: {
    port: "3000", //puerto
    static: ["./public"], //archivos que no van a estar cambiando (archivos que no son react-based), existe en el folder publico
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
            //     1st    2nd     3rd     4th
    extensions: [".js", ".jsx", ".json", ".ts"], //por si varios archivos comparten el mismo nombre pero diferente extension
  },
  module: {
    rules: [ //reglas que nuestro programa necesita para compilar
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        use: [
          {
              loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
            limit: 10000,
            },
          },
        ],
      },
    ],
  },
};
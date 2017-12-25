const Html = ({ body, title }) => `
  <!doctype html public="storage">
  <html>
    <head>
      <meta charset=utf-8/>
      <title>My First React Router App</title>
      <link rel=stylesheet href=/styles/styles.css>
    </head>
    <body>
      <div id=app>${body}</div>
    </body>
    <script src="/bundle.js"></script>
  </html>
`;

export default Html;
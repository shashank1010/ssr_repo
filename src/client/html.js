const Html = ({ body, styles, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
      <link href="/static/styles/styles.css" rel="stylesheet" type="text/css" />
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
  </html>
`;

export default Html;
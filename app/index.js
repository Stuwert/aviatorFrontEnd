require('./main.scss')
require('./gameRender/main.js')

var component = require('./component');

var app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component());

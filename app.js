const express = require('express');
const app = express();
const connectDB = require('./config/database');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Documentação da api de encurtar urls',
    version: '1.0.0',
    description:
      'Essa api encurta uma URL e retora um id de uma url encurtada para ser utilizada posteriormente',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Maklei Alves',
      url: 'https://github.com/MaakiZ',
    },
  },
  servers: [
    {
      url: 'http://localhost:3001',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definition
  apis: ['./routes/*.js'],
};


const swaggerSpec = swaggerJSDoc(options);


// Body Parser
const app_port = process.env['APP_PORT'];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./routes/routes'));
app.use(express.static('public'));
app.use(express.static('config'));

app.use('/style', express.static('style'))
app.use('/scripts', express.static('scripts'))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/pages/shortenerUrl.html');
});

// Server Setup
app.listen(app_port, function () {
  console.log('running on ' + app_port + '...');
});
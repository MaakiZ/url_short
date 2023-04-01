const express = require("express");

const routes = express.Router();
const UrlController = require("../controllers/UrlController");
const ShortUrlController = require("../controllers/ShortUrlController");


// routes/routes.js


/**
 * @swagger
 * /index:
 *   get:
 *     summary: Retorna uma lista de URLs encurtadas e originais.
 *     description: Retorna uma lista de URLs encurtadas e originais armazenadas no MongoDB. Pode ser usada para abrir uma URL no navegador.
 *     responses:
 *       200:
 *         description: Uma lista de URLs.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   origUrl:
 *                     type: string
 *                     description: A URL original.
 *                     example: https://portalaluno.unyleya.edu.br
 *                   shortUrl:
 *                     type: string
 *                     description: A URL encurtada.
 *                     example: http://localhost:3333/k9CQlUDEE
 *                   urlId:
 *                     type: string
 *                     description: O identificador único da URL encurtada.
 *                     example: k9CQlUDEE
 *                   date:
 *                     type: string
 *                     format: date-time
 *                     description: A data de criação da URL encurtada.
 *                     example: 2023-04-01T09:31:34.000Z
 */

routes.get("/index", UrlController.listUrl);

routes.get("/create", UrlController.createUrl);

routes.get('/openUrl', UrlController.openUrl);

//routes.get('/:urlId', UrlController.findUrl);

routes.post('/find', UrlController.findUrl);

routes.post("/short", ShortUrlController.shortUrl);

module.exports = routes;
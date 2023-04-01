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




/**
 * @swagger
 * /openUrl:
 *   get:
 *     summary: Abre uma url encurtada
 *     description: Abre uma url a partir de uma url encurtada.
 *     requestBody:
 *       description: Pega a url encurtada
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               urlId:
 *                 type: string
 *                 description: URL shortened.
 *                 example: k9CQlUDEE
 *     responses:
 *       201:
 *         description: Shortened URL created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 origUrl:
 *                   type: string
 *                   description: The original URL.
 *                   example: https://portalaluno.unyleya.edu.br
 *       400:
 *         description: Invalid request body or URL could not be shortened.
 *       500:
 *         description: Internal server error.
 */

routes.get('/openUrl', UrlController.openUrl);

//routes.get('/:urlId', UrlController.findUrl);

routes.post('/find', UrlController.findUrl);



/**
 * @swagger
 * /short:
 *   post:
 *     summary: Encurta uma url.
 *     description: Encurta uma url a partir de uma url completa.
 *     requestBody:
 *       description: Insere a url completa
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               origUrl:
 *                 type: string
 *                 description: Url completa para ser encurtada.
 *                 example: https://portalaluno.unyleya.edu.br
 *     responses:
 *       201:
 *         description: Url encurtada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 origUrl:
 *                   type: string
 *                   description: A url original.
 *                   example: https://portalaluno.unyleya.edu.br
 *                 shortUrl:
 *                   type: string
 *                   description: Url encurtada
 *                   example: http://localhost:3333/k9CQlUDEE
 *                 urlId:
 *                   type: string
 *                   description: Id da URL.
 *                   example: k9CQlUDEE
 *                 date:
 *                   type: string
 *                   description: TData de criação.
 *                   example: 01/04/2023 09:31:34
 *       400:
 *         description: Invalid request body or URL could not be shortened.
 *       500:
 *         description: Internal server error.
 */

routes.post("/short", ShortUrlController.shortUrl);

module.exports = routes;
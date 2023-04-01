const express = require("express");

const routes = express.Router();
const UrlController = require("../controllers/UrlController");
const ShortUrlController = require("../controllers/ShortUrlController");


// routes/routes.js


/**
 * @swagger
 * /index:
 *   get:
 *     summary: Retrieve a list of urls.
 *     description: Retrieve a list of urls original and shortened from mongodb. Can be used to oepn a url on your browser.
 *     responses:
 *       200:
 *         description: A list of urls.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       origUrl:
 *                         type: string
 *                         description: A not shortened url.
 *                         example: https://portalaluno.unyleya.edu.br/
 *                       shortUrl:
 *                         type: string
 *                         description: A not shortened url.
 *                         example: http://localhost:3333/wXsiQPFVd
 *                       urlId:
 *                         type: string
 *                         description: A shortened url id only.
 *                         example: wXsiQPFVd
 *                       date:
 *                         type: datetime
 *                         description: Shortened URL creation date
 *                         example: 01/04/2023 08:10:14
 */
routes.get("/index", UrlController.listUrl);

routes.get("/create", UrlController.createUrl);

routes.get('/openUrl', UrlController.openUrl);

//routes.get('/:urlId', UrlController.findUrl);

routes.post('/find', UrlController.findUrl);

routes.post("/short", ShortUrlController.shortUrl);

module.exports = routes;
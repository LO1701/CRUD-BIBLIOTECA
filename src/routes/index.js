import express from "express";
import livroRoutes from "./livroRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Curso de Node');
    });

    app.use(
        livroRoutes
    );
}

export default routes;
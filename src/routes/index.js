import express from "express";
import routerAutor from "./autorRoutes.js";
import livroRoutes from "./livroRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Curso de Node');
    });

    app.use(
        livroRoutes,
        routerAutor
    );
}

export default routes;
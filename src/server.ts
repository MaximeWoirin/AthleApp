import express from "express";

import { init_db } from "./infrastructure/database";
import { init_mw } from "./middlewares";
import { init_rt } from "./routes";

const PORT = process.env.SERVER_PORT || 8080;

const app = express();

Promise.all([init_db(), init_mw(), init_rt(app)])
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}.`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

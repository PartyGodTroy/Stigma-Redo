import config from "@colyseus/tools";
import { monitor } from "@colyseus/monitor";
import { playground } from "@colyseus/playground";
import express from "express";
import path from "path"
import { JWT } from "@colyseus/auth";
import formidable from "express-formidable"

/**
 * Import your Room files
 */
import { MyRoom } from "../rooms/MyRoom";
import { PVPRoom } from "../rooms/PVPRoom";

export default config({

    initializeGameServer: (gameServer) => {
        /**
         * Define your room handlers:
         */
        gameServer.define('my_room', MyRoom);
        gameServer.define('pvp_room', PVPRoom);
    },

    initializeExpress: (app) => {

        app.use(formidable());

        /**
         * Bind your custom express routes here:
         * Read more: https://expressjs.com/en/starter/basic-routing.html
         */
        app.use('/app', express.static(path.join(__dirname, '../../app')))
        app.use('/assets', express.static(path.join(__dirname, '../../assets')))

        app.post("/login", async (req, res) => {
            const token = await JWT.sign({},{})
            res.send(token);
        });
 

        /**
         * Use @colyseus/playground
         * (It is not recommended to expose this route in a production environment)
         */
        if (process.env.NODE_ENV !== "production") {
            app.use("/admin-playground", playground);
        }

        /**
         * Use @colyseus/monitor
         * It is recommended to protect this route with a password
         * Read more: https://docs.colyseus.io/tools/monitor/#restrict-access-to-the-panel-using-a-password
         */
        app.use("/colyseus", monitor());
    },


    beforeListen: () => {
        /**
         * Before before gameServer.listen() is called.
         */
    }
});



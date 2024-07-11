import express from "express";
import signale from "signale";
import { productsRouter } from "./v1/router/productsRouter.js";
import { registroRouter } from "./v1/router/registroRouter.js";

import cors from "./node_modules/cors/lib/index.js";

const app = express()
app.use(cors());
app.use(express.json())
app.use("/api/products",productsRouter);
app.use("/api/registro",registroRouter);

app.listen(3002, ()=> {
    signale.success("Server online in port 3002")
})
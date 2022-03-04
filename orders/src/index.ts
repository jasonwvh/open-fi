import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.get("/api/orders/hello", (req, res) => {
    res.send("orders");
});

app.listen(3000, () => {
    console.log("orders service listening on port 3000");
});

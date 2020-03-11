import * as Express from "express";
import { Request, Response } from "express";
import * as path from "path";
import { check, sanitizeBody, validationResult } from "express-validator";
import * as bodyParser from "body-parser";
import * as sampleController from "./controllers/sampleController";

const { PORT = 3000 } = process.env;

const app = Express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.static("public"));

app.get("/", (req: Request, res: Response) => {
    res.send({
        message: "Hello World",
    });
});

app.get("/sample", (req, res) => {
    res.render("sample");
});

app.get("/signin", (req, res) => {
    res.render("layouts/signin");
});

app.post("/sample/user", [
    check("username").isEmail(),
    check("password").isLength({ min: 5 }),
    sanitizeBody("username").trim().escape,
], (req: any, res: any) => {
    const errors = validationResult(req);

    if (errors) {
        res.send(errors);
    }

    res.send(sampleController.createUser(req, res));
});

app.get("/sample/user", (req: any, res: any) => {
    res.send(sampleController.getUser(req, res));
});

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`server started at http://localhost:${PORT}`);
});

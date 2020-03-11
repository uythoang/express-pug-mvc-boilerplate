import { user } from "../models/sampleModel";

export const createUser = (req: any, res: any) => {
    const newUser: user = {
        username: req.body.username,
        password: req.body.password,
    };

    res.send(newUser);
};

export const getUser = (req: any, res: any) => {
    const retrievedUser: user = {
        username: "uyhoang@gmail.com",
        password: "Password#123",
    };

    res.send(retrievedUser);
};

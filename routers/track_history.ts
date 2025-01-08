// import express from "express";
// import User from "../models/User";
// import usersRouter from "./users";
//
// const trackHistoryRouter = express.Router();
// usersRouter.post('/', async (req, res) => {
//     const token = req.get('Authorization');
//     if (!token) {
//         res.status(401).send({error: 'No token present'});
//         return
//     }
//
//     const user = await User.findOne({token});
//     if (!user) {
//         res.status(401).send({error: 'Unauthorized!'});
//         return
//     }
//
//     res.send({
//         message: 'Secret message',
//         username: user.username
//     });
//
// });
// export default trackHistoryRouter;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let fs = require('fs');
const loginRouter = express_1.Router();
exports.loginRouter = loginRouter;
loginRouter.post("/signup", (request, response, next) => {
    console.log('signup');
    let obj;
    console.log(request.body);
    for (let i in request.body) {
        obj = JSON.parse(i);
    }
    console.log(obj);
    fs.readFile('data/users.json', 'utf8', (err, data) => {
        if (err) {
            response.status(404).json([]);
        }
        else {
            let parse = data ? JSON.parse(data) : [];
            parse.forEach((current) => {
                if (current.phone == obj.phone || current.password == obj.password) {
                    response.status(404).json([]);
                    return;
                }
            });
            parse.push(obj);
            fs.writeFile('data/users.json', JSON.stringify(parse), (err) => {
                if (err)
                    response.status(404).json({ err: 'an error is occured' });
                else
                    response.status(200).json({ res: 'data write' });
            });
        }
    });
});
// login method
loginRouter.post("/login", (request, response, next) => {
    console.log('login');
    console.log(request.body);
    let obj;
    for (let i in request.body) {
        obj = JSON.parse(i);
    }
    fs.readFile('data/users.json', 'utf8', (err, data) => {
        if (err) {
            response.status(404).json([]);
        }
        else {
            let parse = data ? JSON.parse(data) : [];
            parse.forEach((current) => {
                if (current.phone == obj.phone && current.password == obj.password) {
                    response.status(200).json(current);
                    return;
                }
            });
            response.status(404).json([]);
        }
    });
});
loginRouter.post("/postmsg", (request, response, next) => {
    console.log('postmsg');
    let obj = {};
    for (let i in request.body) {
        obj = JSON.parse(i);
    }
    console.log(obj);
    fs.readFile('data/messages.json', 'utf8', (err, data) => {
        if (err) {
            response.status(404).json({});
        }
        else {
            console.log(data);
            let parse = data ? JSON.parse(data) : {};
            if (parse[obj['phone']])
                parse[obj['phone']].push(obj);
            else
                parse[obj['phone']] = [obj];
            fs.writeFile('data/messages.json', JSON.stringify(parse), (err) => {
                if (err)
                    response.status(404).json({ err: 'an error is occured' });
                else
                    response.status(200).json({ res: 'data write' });
            });
        }
    });
});
loginRouter.get("/getmsg/:id", (request, response, next) => {
    console.log('getmsg');
    fs.readFile('data/messages.json', 'utf8', (err, data) => {
        if (err) {
            response.status(404).json({});
        }
        else {
            let parse = data ? JSON.parse(data) : {};
            let msgs = parse[request.params.id] || [];
            response.status(200).json(msgs);
        }
    });
});
loginRouter.get("/getallmsg", (request, response, next) => {
    console.log('getallmsg');
    fs.readFile('data/messages.json', 'utf8', (err, data) => {
        if (err) {
            response.status(404).json({});
        }
        else {
            let parse = data ? JSON.parse(data) : {};
            console.log(parse);
            response.status(200).json(parse);
        }
    });
});
//# sourceMappingURL=/home/andre/Documents/projetsNode/Ezosmart/dist/server/routes/login.js.map
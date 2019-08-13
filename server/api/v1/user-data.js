const express = require('express');

const userApi = new express.Router();

userApi.get('/v1/user_data', async (req, res, next)  => {
    console.log(22);
    res.send('123');
    next();
});

module.exports = userApi;

// router.get('/tasks', async (req, res) => {
//     try {
//         const tasks = await Task.find({})
//         res.send(tasks)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

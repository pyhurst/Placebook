const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const passport = require('../../passport');

router.post('/api/signup', (req, res) => {
    console.log('user signup');

    const { username, password, email } = req.body;
    console.log(username, password, email);

    // Validation
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        } else {
            const newUser = new User(
                {
                    username: username,
                    password: password,
                    email: email
                }
            )
            newUser.save((err, savedUser) => {
                if (err) return res.json(err);
                res.json(savedUser)
            })
        }
    });
});

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout();
        res.send({ message: 'Logging out' });
    } else {
        res.send({ message: 'No user to log out' });
    }
});

module.exports = router;
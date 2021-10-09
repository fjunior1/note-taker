// This file contains the route to get and set notes
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const data = require("../db/db.json");
const routes = require('express').Router();

module.exports = (routes) => {

    routes.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // default route to home
    routes.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'));

    });

    //gets all notes
    routes.get('/api/notes', (req, res) => res.json(data));

    // gets note based on given id
    routes.get('/api/notes/:id', (req, res) => {
        const id = req.params.id;

        for (let i = 0; i < data.length; i++) {
            if (id === data[i].id)
                return res.json(data[i]);
        }
    });

    routes.post('/api/notes', (req, res) => {
        const { title, text } = req.body;
        const id = uuidv4();

        data.push({ id, title, text });
        res.json(true);
    });

    routes.delete('/api/notes:id', (req, res) => {

        let id = req.params.id;
        id = id.substring(1);

        for (let i = 0; i < data.length; i++) {
            if (id === data[i].id) {
                data.splice(i, 1);
                return res.json(data[i]); 
            }
        }
    });
}

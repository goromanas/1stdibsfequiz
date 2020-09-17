const express = require('express');
const cachedItems = require('../data/favorites.json');
;

const favoritesRoute = express.Router();

const getFavorites = function (payload) {
    const items = cachedItems;
    return {
        items: items,
    };
};

favoritesRoute.get('', (req, res) => {
    const response = getFavorites(req.query);
    res.status(200).json(response);
});

module.exports = favoritesRoute;

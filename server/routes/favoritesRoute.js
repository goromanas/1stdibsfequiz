const express = require('express');


const favoritesRoute = express.Router();

const getFavorites = function (payload) {
    const items = cachedItems;
    return {
        items: items,
    };
};

const getFavorite = function (itemId) {
    return cachedItems.find(function (item) {
        return item.id === itemId || item.integerId === itemId;
    }) || {};
};

favoritesRoute.get('/:id', (req, res) => {
    const id = req.params.id;
    const item = getFavorite(id);
    res.status(200).json(item);
});

favoritesRoute.get('', (req, res) => {
    const response = getFavorites(req.query);
    res.status(200).json(response);
});

module.exports = favoritesRoute;

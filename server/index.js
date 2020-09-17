
const express = require('express');
const app = express();
const fs = require('fs')
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/browse', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));
app.use('/favorites', require('./routes/favoritesRoute'));

app.post('/saveFavorites', function (req, res) {
    let data = JSON.stringify(req.body.items);
    fs.writeFile('./server/data/favorites.json', data, (err) => {
        if (err) return console.log(err);
        res.send('Item saved');
    });
})

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});

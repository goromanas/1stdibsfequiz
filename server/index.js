
const express = require('express');
const app = express();
const fs = require('fs')
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/browse', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));
app.use('/favorites', require('./routes/favoritesRoute'));

app.post('/saveFavorites', function (req, res) {
    console.log('post request ' + req.body.items);
    let data = JSON.stringify(req.body.items);
    console.log(data);
    fs.writeFile('./server/data/favorites.json', data, (err) => {
        if (err) return console.log(err);
    });
})

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});

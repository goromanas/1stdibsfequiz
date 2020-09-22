
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/browse', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));
app.use('/favorites', require('./routes/favoritesRoute'));

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});

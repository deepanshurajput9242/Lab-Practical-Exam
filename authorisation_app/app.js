const express = require('express');
const app = express();

const routes = require('./routes/routes');


app.use('/', routes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

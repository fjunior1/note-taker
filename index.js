const express = require('express');

const application = express();
const PORT = process.env.PORT || 3000;

application.use(express.urlencoded({ extended: true }));
application.use(express.json());
application.use(express.static('public'));

require('./routes/apiRoutes')(application);

// const routes = require('./routes/apiRoutes');
// application.use('/', routes);

//require('./routes/htmlRoutes')(app);

// listening on port 3000
application.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
});
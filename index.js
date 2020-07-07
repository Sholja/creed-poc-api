const express =  require(`express`);
const bodyParser = require(`body-parser`);
const routes = require(`./routes`);

const app = express();
const port = 9999;

app.use(
  bodyParser.urlencoded({
    parameterLimit: 10000,
    limit: `99mb`,
    extended: true,
  })
);

app.use(
  bodyParser.json({
    parameterLimit: 10000,
    limit: `99mb`,
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(`/`, routes);

app.listen(port, () =>
  console.log(`POC API listening at http://localhost:${port}`)
);

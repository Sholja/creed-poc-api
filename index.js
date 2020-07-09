import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

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

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    },
  });
});

app.listen(port, () =>
  console.log(`POC API listening at http://localhost:${port}`)
);

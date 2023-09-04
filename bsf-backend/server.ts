require('dotenv').config();

import app from './app';

const appPort = process.env.PORT ? parseInt(process.env.PORT || '3000') : 3000;

app.listen(appPort, () => {
  console.log('Server is running on port :', appPort);
});

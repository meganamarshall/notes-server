require('dotenv').config();
require('./lib/utils/connect')();
const app = require('./lib/app');

const PORT = process.env.PORT || 5551;

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Listening on port ${PORT}`);
});



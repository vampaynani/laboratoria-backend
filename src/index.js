const express = require('express');
const bodyparser = require('body-parser');
const { userRouter } = require('./routers/userRouter');
const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static('public'));
app.use('/users', userRouter);

app.listen(process.env.PORT || 3000, function() {
  console.info(`Servidor corriendo en:`, this.address());
}).on('error', err => {
  console.error(err);
});

module.exports = { app };
const express = require('express');
const { User } = require('../models/user');
const userRouter = express.Router();

userRouter.get('/', (request, response) => {
  User.readAll()
    .then(results => {
      response.json(results);
    });
});

userRouter.get('/:id', (req, res) => {
  User.readById(req.params.id)
    .then(user => {
      if(user.length <= 0){
        return res.status(404).json({message: 'Este usuario no ha sido encontrado'});
      }
      res.json(user);
    })
})

userRouter.post('/', (req, res) => {
  const {username, password} = req.body;
    User.create(username, password)
      .then(newUserID => {
        return User.readById(newUserID);
      })
      .then(user => {
        res.json(user);
      })
});

userRouter.put('/:id', (req, res) => {
  const {username, password} = req.body;
  User.update(req.params.id, username, password)
    .then(success => {
      res.json({success});
    });
});

userRouter.delete('/:id', (req, res)  => {
  User.deleteById(req.params.id)
    .then(success => {
      res.json({success});
    });
});

//module.exports = userRouter;
module.exports = { userRouter };
//export default router;
//export const router;
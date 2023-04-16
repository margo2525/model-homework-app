const { Router } = require('express');
const { phonesController } = require('../controllers');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(phonesController.createPhone)
  .get(phonesController.getPhones);

phonesRouter
  .route('/:phoneId')
  .get(phonesController.getPhoneById)
  .patch(phonesController.updatePhone)
  .put(phonesController.updateOrCreatePhone, phonesController.createPhone)
  .delete(phonesController.deletePhone);

module.exports = phonesRouter;

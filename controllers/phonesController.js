const _ = require('lodash');
const createError = require('http-errors');
const { Phone } = require('./../models');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhoneInst = await Phone.create(body);
    const preparedPhone = _.omit(createdPhoneInst.get(), [
      'createdAt',
      'updatedAt',
    ]);
    res.status(201).send({ data: preparedPhone });
  } catch (err) {
    next(err);
  }
};

module.exports.getPhones = async (req, res, next) => {
  const { limit = 10, offset = 0 } = req.query;
  try {
    const foundPhones = await Phone.findAll({
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      limit,
      offset,
    });

    if (!foundPhones.length) {
      return next(createError(404, 'Phones Not Found'));
    }

    res.status(200).send({ data: foundPhones });
  } catch (err) {
    next(err);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const { phoneId } = req.params;

  try {
    const foundPhone = await Phone.findByPk(phoneId, {
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!foundPhone) {
      return next(createError(404, 'Phone Not Found'));
    }

    res.status(200).send({ data: foundPhone });
  } catch (err) {
    next(err);
  }
};

module.exports.updatePhone = async (req, res, next) => {
  const {
    body,
    params: { phoneId },
  } = req;

  try {
    const [, [updatePhone]] = await Phone.update(body, {
      raw: true,
      where: { id: phoneId },
      returning: true,
    });

    if (!updatePhone) {
      return next(createError(404, 'Phone Not Found'));
    }

    const preparedPhone = _.omit(updatePhone, ['createdAt', 'updatedAt']);

    res.status(200).send({ data: preparedPhone });
  } catch (err) {
    next(err);
  }
};

module.exports.updateOrCreatePhone = async (req, res, next) => {
  const {
    body,
    params: { phoneId },
  } = req;

  try {
    const [, [updatePhone]] = await Phone.update(body, {
      raw: true,
      where: { id: phoneId },
      returning: true,
    });

    if (!updatePhone) {
      return next();
    }

    const preparedPhone = _.omit(updatePhone, ['createdAt', 'updatedAt']);

    res.status(200).send({ data: preparedPhone });
  } catch (err) {
    next(err);
  }
};

module.exports.deletePhone = async (req, res, next) => {
  const { phoneId } = req.params;

  try {
    const deletingPhoneCount = await Phone.destroy({
      where: { id: phoneId },
    });

    if (!deletingPhoneCount) {
      return next(createError(404, 'Phone Not Found'));
    }

    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

const {
  Phone,
  sequelize,
  Sequelize: { Op },
} = require('./models');

(async () => {
  const phone = {
    model: 'Y6 ',
    brand: 'Huawei',
    manufactureYear: '2018',
    ram: 3,
    processor: 'MediaTek MT6761',
    screenDiagonal: 6.0,
    nfc: false,
  };

  //додавання нового телефону,

  //  const createdPhone = await Phone.create(phone);
  //  console.log('createdPhone', createdPhone.get());

  //отримання списку телефонів (* 3-я сторінка при перегляді по 4 телефони на сторінці, упорядкованих за роком виробництва),

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   limit: 4,
  //   offset: 8,
  //   order: [['manufacture_year', 'ASC']],
  // });
  // console.log('foundPhones', foundPhones);

  //*отримання списку телефонів певного року видання,
  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   where: { manufacturedYear: 2020 },
  // });
  //*отримання списку телефонів старше 2020 року випуску,

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   where: {
  //     manufacture_year: { [Op.lt]: ['2020-01-01'] },
  //   },
  // });
  // console.log('foundPhones', foundPhones);

  //оновлення: додати нфс всім телефонам 2021 року випуску,

  // const [, [updatePhone]] = await Phone.update(
  //   {
  //     nfc: false,
  //   },
  //   {
  //     where: {
  //       manufacture_year: {
  //         [Op.between]: ['2021-01-01', '2021-12-31'],
  //       },
  //     },
  //     returning: true,
  //     raw: true,
  //   }
  // );
  // console.log('updatePhone', updatePhone);

  //видалення телефонів 2010 року випуску.

  // const deletePhonesCount = await Phone.destroy({
  //   where: {
  //     manufacture_year: {
  //       [Op.between]: ['2010-01-01', '2010-12-31'],
  //     },
  //   },
  // });
  // console.log('deletePhonesCount', deletePhonesCount);
})();

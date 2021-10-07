require('dotenv').config();
const Airtable = require('airtable-node');

const API_KEY = process.env.REACT_APP_API_KEY;

const airtable = new Airtable({apiKey: API_KEY})
  .base('app1szHXcA5oPa7Pk')
  .table('2021');

exports.handler = async (event, context) => {
  try {
    const {records} = await airtable.list();
    const product = records.map((item) => {
      const {
        id,
        fields: {month, name, img},
      } = item;
      return {id, name, month, img};
    });
    return {
      statusCode: 200,
      body: JSON.stringify(product),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'no any datas',
    };
  }
};

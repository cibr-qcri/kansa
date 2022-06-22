const numeral = require('numeral');
const gp = require('../services/gp');
const Statistic = require('../models/Statistic');

const computeStats = async () => {
  console.log(`[cron:computeStats] Server running a scheduled job`.magenta);

  try {
    await Statistic.deleteMany({});
  } catch (error) {
    console.log(`[cron:computeStats] Error while deleting previous record`.red);
    console.log(error);
  }

  try {
    const numProtocolsReq = gp.query('SELECT count(*) from eth_defi_protocol;');
    const numContractsReq = gp.query('SELECT count(*) from eth_contract;');
    const numBlocksReq = gp.query('SELECT max(number) from eth_block;');
    const [numProtocolsRes, numContractsRes, numBlocksRes] = await Promise.all([
      numProtocolsReq,
      numContractsReq,
      numBlocksReq,
    ]);

    if (!numProtocolsRes || !numContractsRes || !numBlocksRes) {
      throw new Error('There are no statistics available in greenplum');
    }

    const count = {};
    count.protocol = parseInt(numProtocolsRes.rows[0].count);
    count.contract = parseInt(numContractsRes.rows[0].count);
    count.block = numeral(parseInt(numBlocksRes.rows[0].max)).format('0,0');

    await Statistic.create({
      computed: {
        count,
      },
    });
    console.log(`[cron:computeStats] Job successfully completed`.green);
  } catch (error) {
    console.log(`[cron:computeStats] Error while computing stats`.red);
    console.log(error);
  }
};

module.exports = computeStats;

const Address = require('../models/Address');

exports.getAddressDetails = async (req, res) => {
  try {
    const { query } = req;
    const chain = "0x1";

    const response =
      await Moralis.EvmApi.transaction.getWalletTransactionsVerbose({
        address: query.address,
        chain,
      });

    return res.status(200).json(response);
  } catch (e) {
    console.log(`Something went wrong ${e}`);
    return res.status(400).json();
  }
};

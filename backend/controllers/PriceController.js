
module.exports.getPrice = async (req, res) => {
  try {
    const response = await Moralis.EvmApi.token.getTokenPrice({
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      chain: "0x1",
    });
    console.log(response);
    return res.status(200).json(response);
  } catch (e) {
    console.log(`Somthing went wrong ${e}`);
    return res.status(400).json();
  }
};

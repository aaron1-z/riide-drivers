
const { getMapData } = require('../services/mapService');

const getMap = async (req, res) => {
  const address = req.query.address;

  try {
    const data = await getMapData(address);
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching map data');
  }
};

module.exports = { getMap };

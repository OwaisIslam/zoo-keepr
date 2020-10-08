const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zooKeeperRoutes = require('./zookeeperRoutes');

router.use(animalRoutes);
router.use(zooKeeperRoutes);

module.exports = router;
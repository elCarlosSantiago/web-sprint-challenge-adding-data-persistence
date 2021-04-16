const router = require('express').Router();
const Resources = require('./model');

router.get('/', async (req, res, next) => {
  try {
    const resourceCollection = await Resources.getResources();
    res.json(resourceCollection);
  } catch (err) {
    next();
  }
});
router.post('/', async (req, res, next) => {
  try {
    const newResource = await Resources.addResources();
    res.json(newResource);
  } catch (err) {
    next();
  }
});

module.exports = router; 
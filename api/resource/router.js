const router = require('express').Router();
const Resources = require('./model');

router.get('/', async (req, res, next) => {
  try {
    const resourceCollection = await Resources.getResources();
    res.json(resourceCollection);
  } catch (err) {
    next(err);
  }
});
router.post('/', async (req, res, next) => {
  const resource = req.body;
  try {
    const newResource = await Resources.addResources(resource);
    res.json(newResource);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

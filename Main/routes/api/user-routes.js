const router = require('express').Router();
const {
  getSingleUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/user-controller');

router.route('/').get(getUser).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
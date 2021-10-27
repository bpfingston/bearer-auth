'use strict';

const base64 = require('base-64');
const { users } = require('../models/index')

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) { return _authError(); }
  
  let basic = req.headers.authorization.split(' ').pop();
  let decoded = base64.decode(basic);
  let [username, password] = decoded.split(':');
  try {
    req.user = await users.authenticateBasic(username, password);
    next();
  } catch (e) {
    res.status(403).send('Invalid Login');
  }

}


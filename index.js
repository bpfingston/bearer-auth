'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const { db } = require('./src/auth/models/index');
const { start } = require('./src/server');
const PORT = process.env.PORT || 3002;

// Start up DB Server

db.sync()
  .then(() => {start(PORT);});


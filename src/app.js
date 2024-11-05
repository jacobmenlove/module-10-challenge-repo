require('dotenv').config();
const pool = require('../config/db');
const { mainMenu } = require('./prompts');

mainMenu();

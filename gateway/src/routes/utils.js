
const express = require('express');
const router = express.Router();

const HEALTH=`
<h1>Identicon Gateway API</h1>
<p>STATUS = Running</p>
<p>NODE_ENV = ${process.env.NODE_ENV}</p>
<p>API_VERSION = ${process.env.API_VERSION}</p>
`;

router.get('/', async (req, res) => {
  res.status(200).send(HEALTH);
});

module.exports = router;

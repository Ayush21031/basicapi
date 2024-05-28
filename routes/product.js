const express = require('express');
const func = require('../controller/product_contro');
// const func2 = require('../controller/product_contro');
const router = express.Router();

router.get('/func1', func.fun1);
router.get('/func2', func.fun2);

exports.router = router;
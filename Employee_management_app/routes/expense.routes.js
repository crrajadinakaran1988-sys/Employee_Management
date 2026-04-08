const express = require('express');

const auth = require('../middlewares/auth.middleware')
const router = express.Router();
const controller = require('../controllers/expense.controller.js');


router.get('/', auth, controller.showForm);
router.post('/expenses', auth, controller.createExpense);

router.get('/expenses', auth, controller.getExpenses);

router.get('/delete/:id', auth, controller.deleteExpense);


router.get('/edit/:id', auth, controller.showEditForm);
router.post('/edit/:id', auth, controller.updateExpense);

module.exports = router;
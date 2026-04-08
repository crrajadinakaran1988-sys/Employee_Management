const model = require('../models/expense.model.js');


exports.showForm = (req, res) => {
    res.render('form')
}

exports.createExpense = async (req, res, next) => {
    try {

        const {title, amount} = req.body

        if(!title || !amount) {
            return new Error('Title and Amount are required');
        }

        await model.create({title, amount});

        res.redirect('/expenses');

    } catch(err) {
        next(err);
    }
}

exports.getExpenses = async (req, res, next) => {
    try {
        const expenses = await model.getAll();
        res.render('list', {expenses});
    } catch(err) {
        next(err);
    }
}

exports.deleteExpense = async (req, res, next) => {
    try {
        const id = req.params.id;
        await model.delete(id);
        res.redirect('/expenses');
    } catch(err) {
        next(err);
    }
}


exports.showEditForm = async (req, res, next) => {
  try {
    const expense = await model.getById(req.params.id)
    res.render('edit', { expense })
  } catch (err) {
    next(err)
  }
}


exports.updateExpense = async (req, res, next) => {
  try {
    await model.update(req.params.id, req.body)
    res.redirect('/expenses')
  } catch (err) {
    next(err)
  }
}
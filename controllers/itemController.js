const itemModel = require('../models/item');

module.exports = {
  getAllItems: (req, res) => {
    res.json(itemModel.getAll());
  },
  getItemById: (req, res) => {
    const item = itemModel.getById(parseInt(req.params.id, 10));
    if (item) {
      res.json(item);
    } else {
      res.status(404).send('Item not found');
    }
  },
  createItem: (req, res) => {
    const newItem = { id: Date.now(), ...req.body };
    itemModel.create(newItem);
    res.status(201).json(newItem);
  },
  updateItem: (req, res) => {
    const updatedItem = itemModel.update(parseInt(req.params.id, 10), req.body);
    if (updatedItem) {
      res.json(updatedItem);
    } else {
      res.status(404).send('Item not found');
    }
  },
  deleteItem: (req, res) => {
    const deletedItem = itemModel.delete(parseInt(req.params.id, 10));
    if (deletedItem) {
      res.json(deletedItem);
    } else {
      res.status(404).send('Item not found');
    }
  }
};

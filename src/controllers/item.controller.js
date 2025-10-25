const ItemModel = require('../models/model.js');

class ItemController {
  static async getAll(req, res) {
    try {
      const todos = await ItemModel.findAll();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los datos', error });
    }
  }

  static async getById(req, res) {
    try {
      const todo = await ItemModel.findById(req.params.id);
      if (!todo) return res.status(404).json({ message: 'No encontrado mediante ID' });
      res.json(todo);
    } catch (error) {
      res.status(500).json({ message: 'Error al buscar el elemento', error });
    }
  }

  static async getFullName (req, res) {
    res.json({
      nombre_completo: 'Diego Jimenez Perez',
    });
  }

  static async create(req, res) {
    try {
      const { nombre, edad } = req.body;
      if (!nombre || !edad)
        return res.status(400).json({ message: 'Faltan campos' });

      const nuevo = await ItemModel.create({ nombre, edad });
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear', error });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { nombre, edad } = req.body;
      const actualizado = await ItemModel.update(id, { nombre, edad });
      res.json(actualizado);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar', error });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const eliminado = await ItemModel.delete(id);
      res.json(eliminado);
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar', error });
    }
  }
}

module.exports = ItemController;

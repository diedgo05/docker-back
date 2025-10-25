const pool = require('../config/env.js');

class ItemModel {
  static async findAll() {
    const [rows] = await pool.query("SELECT * FROM items");
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query("SELECT * FROM items WHERE id = ?", [id]);
    return rows[0];
  }

  static async create({ nombre, edad }) {
    const [result] = await pool.query(
      "INSERT INTO items (nombre, edad) VALUES (?, ?)",
      [nombre, edad]
    );
    return { id: result.insertId, nombre, edad };
  }

  static async update(id, { nombre, edad }) {
    await pool.query("UPDATE items SET nombre = ?, edad = ? WHERE id = ?", [
      nombre,
      edad,
      id,
    ]);
    return { id, nombre, edad };
  }

  static async delete(id) {
    await pool.query("DELETE FROM items WHERE id = ?", [id]);
    return { message: "Eliminado correctamente" };
  }
}

module.exports = ItemModel;

const pool = require('../models/db');

exports.register = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        await pool.query('SELECT register_user($1, $2, $3)', [username, password, role]);
        res.status(201).json({ message: 'Registrasi berhasil!' });
    } catch (error) {
        res.status(500).json({ error: 'Gagal registrasi pengguna' });
    }
};
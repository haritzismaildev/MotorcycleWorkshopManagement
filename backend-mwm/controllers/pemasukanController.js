const pool = require('../models/db');

exports.tambahPemasukan = async (req, res) => {
    const { tanggal, kategori, jumlah, keterangan } = req.body;
    try {
        await pool.query('SELECT insert_pemasukan($1, $2, $3, $4)', [tanggal, kategori, jumlah, keterangan]);
        res.status(201).json({ message: 'Pemasukan berhasil ditambahkan!' });
    } catch (error) {
        res.status(500).json({ error: 'Gagal menambahkan pemasukan' });
    }
};
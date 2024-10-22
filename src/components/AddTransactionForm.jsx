import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import prop-types

const AddTransactionForm = ({ addTransaction }) => {
  const [type, setType] = useState('pemasukan');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && category) {
      addTransaction({ type, amount: parseFloat(amount), category, date: new Date().toISOString() });
      setAmount('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Tipe Transaksi:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="pemasukan">Pemasukan</option>
            <option value="pengeluaran">Pengeluaran</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Jumlah:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Kategori:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Tambah Transaksi</button>
    </form>
  );
};

// Validasi props menggunakan prop-types
AddTransactionForm.propTypes = {
  addTransaction: PropTypes.func.isRequired,
};

export default AddTransactionForm;

import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import prop-types

const TransactionList = ({ transactions }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const filteredTransactions = transactions.filter((t) => {
    const transactionDate = new Date(t.date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return (!startDate || transactionDate >= start) && (!endDate || transactionDate <= end);
  });

  return (
    <div>
      <h2>Daftar Transaksi</h2>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Dari:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{ marginLeft: '10px', marginRight: '20px' }}
          />
        </label>
        <label>
          Sampai:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      {filteredTransactions.length === 0 ? (
        <p>Tidak ada transaksi dalam rentang tanggal yang dipilih.</p>
      ) : (
        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
          {filteredTransactions.map((transaction, index) => (
            <li key={index} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
              <strong>{transaction.category}</strong> - {transaction.type === 'pemasukan' ? '+' : '-'}Rp{transaction.amount} <br />
              <small>{new Date(transaction.date).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Validasi props menggunakan prop-types
TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['pemasukan', 'pengeluaran']).isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionList;

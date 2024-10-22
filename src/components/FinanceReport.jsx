import React from 'react';
import PropTypes from 'prop-types'; // Import prop-types

const FinanceReport = ({ transactions }) => {
  const totalIncome = transactions
    .filter((t) => t.type === 'pemasukan')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'pengeluaran')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Laporan Keuangan</h2>
      <p>Total Pemasukan: Rp{totalIncome}</p>
      <p>Total Pengeluaran: Rp{totalExpense}</p>
      <h3>Saldo: Rp{balance}</h3>
    </div>
  );
};

// Validasi props menggunakan prop-types
FinanceReport.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['pemasukan', 'pengeluaran']).isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FinanceReport;

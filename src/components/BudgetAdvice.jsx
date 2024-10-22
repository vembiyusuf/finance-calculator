import React from 'react';
import PropTypes from 'prop-types'; // Import prop-types

const BudgetAdvice = ({ transactions }) => {
  const totalExpense = transactions
    .filter((t) => t.type === 'pengeluaran')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalIncome = transactions
    .filter((t) => t.type === 'pemasukan')
    .reduce((sum, t) => sum + t.amount, 0);

  const expensePercentage = totalExpense / totalIncome * 100;

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Saran Pengelolaan Anggaran</h2>
      {expensePercentage > 50 ? (
        <p>Anda telah menghabiskan lebih dari 50% dari pemasukan Anda. Pertimbangkan untuk mengurangi pengeluaran!</p>
      ) : (
        <p>Pengeluaran Anda terkendali. Terus kelola keuangan dengan baik.</p>
      )}
    </div>
  );
};

// Validasi props menggunakan prop-types
BudgetAdvice.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['pemasukan', 'pengeluaran']).isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BudgetAdvice;

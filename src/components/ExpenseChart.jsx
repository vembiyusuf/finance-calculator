import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ExpenseChart = ({ transactions }) => {
  const expenses = transactions
    .filter((t) => t.type === 'pengeluaran')
    .reduce((acc, curr) => {
      const found = acc.find((item) => item.category === curr.category);
      if (found) {
        found.value += curr.amount;
      } else {
        acc.push({ category: curr.category, value: curr.amount });
      }
      return acc;
    }, []);

  return (
    <div className="pie-chart-container">
      <h2>Grafik Pengeluaran Berdasarkan Kategori</h2>
      <PieChart width={1000} height={800}>
        <Pie
          data={expenses}
          dataKey="value"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {expenses.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

// Validasi props menggunakan prop-types
ExpenseChart.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['pemasukan', 'pengeluaran']).isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExpenseChart;

import { CSVLink } from 'react-csv';
import PropTypes from 'prop-types'; // Import prop-types

const ExportCSV = ({ transactions }) => {
  const headers = [
    { label: 'Tipe', key: 'type' },
    { label: 'Jumlah', key: 'amount' },
    { label: 'Kategori', key: 'category' },
    { label: 'Tanggal', key: 'date' },
  ];

  const csvReport = {
    data: transactions,
    headers: headers,
    filename: 'laporan_keuangan.csv',
  };

  return (
    <button style={{ padding: '10px', backgroundColor: '#4CAF50', color: '#fff', borderRadius: '5px' }}>
      <CSVLink {...csvReport} style={{ color: '#fff', textDecoration: 'none' }}>
        Ekspor ke CSV
      </CSVLink>
    </button>
  );
};

// Validasi props menggunakan prop-types
ExportCSV.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['pemasukan', 'pengeluaran']).isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExportCSV;

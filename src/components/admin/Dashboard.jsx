import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLoanQueries, downloadExcel } from "../../api/loanApi";

const AdminDashboard = () => {
    
  const [loans, setLoans] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/Login"); // Redirect to login if token is missing
    }
  }, [navigate]);

  const fetchData = async () => {
    try {
      const data = await fetchLoanQueries(page, 10, fromDate, toDate);
      setLoans(data.loans);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching loans:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, fromDate, toDate]);

  const handleDownloadExcel = async () => {
    await downloadExcel(fromDate, toDate);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {/* Date Filters */}
      <div className="flex gap-4 mb-4">
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          max={new Date().toISOString().split("T")[0]}
          className="p-2 border rounded"
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          max={new Date().toISOString().split("T")[0]}
          className="p-2 border rounded"
        />
        <button onClick={fetchData} className="bg-blue-500 text-white px-4 py-2 rounded">
          Fetch Data
        </button>
        <button onClick={handleDownloadExcel} className="bg-green-500 text-white px-4 py-2 rounded">
          Download Excel
        </button>
      </div>

      {/* Loan Table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Full Name</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Loan Amount</th>
            <th className="border p-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan._id} className="border">
              <td className="border p-2">{loan.fullname}</td>
              <td className="border p-2">{loan.phoneNumber}</td>
              <td className="border p-2">{loan.emailAddress}</td>
              <td className="border p-2">₹ {loan.loanAmount}</td>
              <td className="border p-2">{new Date(loan.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="mx-2 px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {page} of {totalPages}</span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="mx-2 px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;

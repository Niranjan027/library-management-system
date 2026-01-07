import { useEffect, useState } from "react";
import { getAllLoans, returnBook, extendLoan } from "../services/api";

function AdminDashboard() {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        loadLoans();
    }, []);

    const loadLoans = async () => {
        try {
            const data = await getAllLoans();
            // Filter only active loans (where returnDate is null)
            setLoans(data.filter(loan => loan.returnDate === null));
        } catch (error) {
            console.error("Failed to load loans", error);
        }
    };

    const handleReturn = async (loanId) => {
        if (window.confirm("Return this book and make it available?")) {
            await returnBook(loanId);
            loadLoans();
        }
    };

    const handleExtend = async (loanId) => {
        if (window.confirm("Extend due date by 1 month?")) {
            await extendLoan(loanId);
            loadLoans();
        }
    };

    return (
        <div className="container" style={{ paddingTop: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Borrowed Books Management</h2>

            {loans.length === 0 ? (
                <p>No books are currently borrowed.</p>
            ) : (
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <thead style={{ background: '#0F172A', color: 'white' }}>
                            <tr>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Book Title</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Borrowed By</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Borrowed Date</th>
                                <th style={{ padding: '12px', textAlign: 'left' }}>Due Date</th>
                                <th style={{ padding: '12px', textAlign: 'center' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loans.map((loan) => (
                                <tr key={loan.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '12px' }}>{loan.book?.title}</td>
                                    <td style={{ padding: '12px' }}>{loan.user?.name}</td>
                                    <td style={{ padding: '12px' }}>{loan.user?.email}</td>
                                    <td style={{ padding: '12px' }}>{loan.borrowDate}</td>
                                    <td style={{ padding: '12px', fontWeight: 'bold', color: '#dc2626' }}>{loan.dueDate}</td>
                                    <td style={{ padding: '12px', textAlign: 'center', display: 'flex', gap: '8px', justifyContent: 'center' }}>
                                        <button
                                            onClick={() => handleExtend(loan.id)}
                                            style={{ background: '#F59E0B', padding: '6px 12px', fontSize: '0.9rem' }}
                                        >
                                            Extend (+1 Mo)
                                        </button>
                                        <button
                                            onClick={() => handleReturn(loan.id)}
                                            style={{ background: '#EF4444', padding: '6px 12px', fontSize: '0.9rem' }}
                                        >
                                            Return
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default AdminDashboard;

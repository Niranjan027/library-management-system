import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, User, Calendar, Tag } from 'lucide-react';
import { getAllBooks, borrowBook as apiBorrowBook } from '../services/api';

const BookDetails = ({ user }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    // Note: In a real app, we'd have a getBookById API. 
    // For now, we fetch all and find one, or update the API service.
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const books = await getAllBooks();
                const found = books.find(b => b.id.toString() === id);
                setBook(found);
            } catch (error) {
                console.error("Failed to fetch book");
            } finally {
                setLoading(false);
            }
        };
        fetchBook();
    }, [id]);

    const handleBorrow = async () => {
        if (!book) return;
        try {
            await apiBorrowBook(book.id, user.id);
            alert("Book borrowed successfully for 1 month!");
            navigate('/');
        } catch (error) {
            alert("Failed to borrow book");
        }
    };

    if (loading) return <div style={{ padding: '2rem' }}>Loading...</div>;
    if (!book) return <div style={{ padding: '2rem' }}>Book not found</div>;

    return (
        <div className="book-details" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <button
                onClick={() => navigate(-1)}
                style={{
                    background: 'none',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '2rem',
                    fontSize: '1rem'
                }}
            >
                <ArrowLeft size={20} /> Back to Library
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '3rem' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <img
                        src={book.image}
                        alt={book.title}
                        style={{
                            width: '100%',
                            borderRadius: 'var(--radius)',
                            boxShadow: 'var(--shadow)'
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div style={{ marginBottom: '1rem' }}>
                        <span style={{
                            background: 'rgba(99, 102, 241, 0.1)',
                            color: 'var(--primary)',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.875rem',
                            fontWeight: '600'
                        }}>
                            {book.category}
                        </span>
                    </div>

                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{book.title}</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        by {book.author}
                    </p>

                    <div style={{
                        background: 'var(--surface)',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius)',
                        border: '1px solid var(--border)',
                        marginBottom: '2rem'
                    }}>
                        <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
                            <div>
                                <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.875rem' }}>ISBN</span>
                                <span style={{ fontWeight: '500' }}>{book.isbn}</span>
                            </div>
                            <div>
                                <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Status</span>
                                <span style={{
                                    color: book.available ? 'var(--success)' : 'var(--danger)',
                                    fontWeight: '500'
                                }}>
                                    {book.available ? 'Available' : 'Currently Rented'}
                                </span>
                            </div>
                        </div>

                        {book.available ? (
                            <button
                                onClick={handleBorrow}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    borderRadius: '8px',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px'
                                }}
                            >
                                <BookOpen size={20} />
                                Borrow for 30 Days
                            </button>
                        ) : (
                            <div style={{
                                padding: '1rem',
                                background: 'var(--surface-hover)',
                                color: 'var(--text-muted)',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                This book is currently outstanding. Check back later.
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BookDetails;

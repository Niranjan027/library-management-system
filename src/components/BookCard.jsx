import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, AlertCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, onBorrow }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="book-card"
      style={{
        background: 'var(--surface)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Link to={`/book/${book.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
          <img
            src={book.image}
            alt={book.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'rgba(0,0,0,0.6)',
              padding: '4px 8px',
              borderRadius: '20px',
              backdropFilter: 'blur(4px)',
              fontSize: '0.75rem',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {book.available ? (
              <><CheckCircle size={14} className="text-success" color="#10b981" /> Available</>
            ) : (
              <><AlertCircle size={14} className="text-danger" color="#ef4444" /> Rented</>
            )}
          </div>
        </div>

        <div style={{ padding: '1.25rem' }}>
          <span style={{
            fontSize: '0.75rem',
            color: 'var(--primary)',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '0.5rem',
            display: 'block'
          }}>
            {book.category}
          </span>

          <h3 style={{
            margin: '0 0 0.5rem 0',
            fontSize: '1.1rem',
            fontWeight: '600',
            lineHeight: '1.4'
          }}>
            {book.title}
          </h3>

          <p style={{
            margin: '0 0 1rem 0',
            color: 'var(--text-muted)',
            fontSize: '0.9rem'
          }}>
            by {book.author}
          </p>
        </div>
      </Link>

      <div style={{ padding: '0 1.25rem 1.25rem', marginTop: 'auto' }}>
        {book.available ? (
          <button
            onClick={(e) => {
              e.preventDefault(); // Prevent navigation when clicking borrow
              onBorrow(book.id);
            }}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '8px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'var(--primary-hover)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'var(--primary)'}
          >
            <BookOpen size={18} />
            Borrow Now
          </button>
        ) : (
          <button
            disabled
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'var(--surface-hover)',
              color: 'var(--text-muted)',
              borderRadius: '8px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'not-allowed'
            }}
          >
            <Calendar size={18} />
            Return Next Month
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default BookCard;

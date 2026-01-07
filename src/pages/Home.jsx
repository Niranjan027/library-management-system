import { useState } from "react";
import BookCard from "../components/BookCard";
import { Search, Filter } from 'lucide-react';

function Home({ books, user, borrowBook }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(books.map(b => b.category))];

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fade-in">
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Discover Your Next Great Read
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Dive into our curated collection of over {books.length} premium titles.
        </p>
      </div>

      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        <div style={{
          position: 'relative',
          flex: 1,
          minWidth: '300px'
        }}>
          <Search
            size={20}
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)'
            }}
          />
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1rem 1rem 3rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              color: 'var(--text)',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '4px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0 1.5rem',
                height: '54px',
                background: selectedCategory === cat ? 'var(--primary)' : 'var(--surface)',
                color: selectedCategory === cat ? 'white' : 'var(--text-muted)',
                borderRadius: 'var(--radius)',
                border: selectedCategory === cat ? 'none' : '1px solid var(--border)',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '2rem'
      }}>
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} onBorrow={borrowBook} />
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
          No books found matching your criteria.
        </div>
      )}
    </div>
  );
}

export default Home;

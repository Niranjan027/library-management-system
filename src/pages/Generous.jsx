function Generous() {
  return (
    <div>
      <h2>🤝 Be Generous</h2>
      <p>Support our library and help knowledge grow.</p>

      <div className="generous-grid">
        <div className="generous-card">
          <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" alt="Donate Books" />
          <h3>Donate Books</h3>
          <p>Share your books with others and spread knowledge.</p>
          <button>Donate</button>
        </div>

        <div className="generous-card">
          <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" alt="Sponsor Book" />
          <h3>Sponsor a Book</h3>
          <p>Help us add new books to the library.</p>
          <button>Sponsor</button>
        </div>

        <div className="generous-card">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Support Students" />
          <h3>Support Students</h3>
          <p>Contribute to student learning resources.</p>
          <button>Support</button>
        </div>

        <div className="generous-card">
          <img src="https://images.unsplash.com/photo-1454165205744-3b78555e5572" alt="Volunteer" />
          <h3>Volunteer</h3>
          <p>Help manage books and assist readers.</p>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
}

export default Generous;

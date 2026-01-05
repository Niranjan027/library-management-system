const baseBooks = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    image: "https://covers.openlibrary.org/b/id/8231996-L.jpg"
  },
  {
    title: "Effective Java",
    author: "Joshua Bloch",
    category: "Java",
    image: "https://covers.openlibrary.org/b/id/8099256-L.jpg"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Help",
    image: "https://covers.openlibrary.org/b/id/9255566-L.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    category: "Programming",
    image: "https://covers.openlibrary.org/b/id/8128691-L.jpg"
  },
  {
    title: "Artificial Intelligence",
    author: "Stuart Russell",
    category: "AI",
    image: "https://covers.openlibrary.org/b/id/8369251-L.jpg"
  }
];

// 🔥 AUTO-GENERATE 250 BOOKS
const booksData = Array.from({ length: 250 }, (_, i) => {
  const book = baseBooks[i % baseBooks.length];
  return {
    id: i + 1,
    title: `${book.title} ${i + 1}`,
    author: book.author,
    category: book.category,
    image: book.image,
    available: true,
    borrowedBy: null,
    endDate: null
  };
});

export default booksData;

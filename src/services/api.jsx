const API_URL = "http://localhost:8080/api";

export const getAllBooks = async () => {
    const response = await fetch(`${API_URL}/books`);
    return response.json();
};

export const createBook = async (book) => {
    const response = await fetch(`${API_URL}/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
    });
    return response.json();
};

export const createUser = async (user) => {
    const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        throw new Error("Failed to create user");
    }
    return response.json();
};

export const getAllUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    return response.json();
};

export const borrowBook = async (bookId, userId) => {
    const response = await fetch(`${API_URL}/loans/${bookId}/borrow/${userId}`, {
        method: "POST",
    });
    return response.json();
};

export const returnBook = async (loanId) => {
    const response = await fetch(`${API_URL}/loans/${loanId}/return`, {
        method: "POST",
    });
    return response.json();
};

export const extendLoan = async (loanId) => {
    const response = await fetch(`${API_URL}/loans/${loanId}/extend`, { method: "POST" });
    return response.json();
};

export const getAllLoans = async () => {
    const response = await fetch(`${API_URL}/loans`);
    return response.json();
};

module.exports = {
  customers: [
    { id: '1', name: 'Alice Smith', email: 'alice@example.com' },
    { id: '2', name: 'Bob Johnson', email: 'bob@example.com' },
  ],
  accounts: [
    { id: '1', customerId: '1', accountNumber: 'ACC123456', balance: 1200.5, currency: 'USD' },
    { id: '2', customerId: '2', accountNumber: 'ACC654321', balance: 500.0, currency: 'EUR' },
  ],
  transactions: [
    { id: '1', accountId: '1', type: 'DEBIT', amount: 100.0, description: 'Grocery', date: '2025-07-20' },
    { id: '2', accountId: '1', type: 'CREDIT', amount: 500.0, description: 'Salary', date: '2025-07-18' },
    { id: '3', accountId: '2', type: 'DEBIT', amount: 50.0, description: 'Electricity Bill', date: '2025-07-15' },
    { id: '4', accountId: '1', type: 'DEBIT', amount: 30.0, description: 'Snacks', date: '2025-07-10' },
  ],
};

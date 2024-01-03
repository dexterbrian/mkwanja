export const user = {
    username: 'Dexter',
    currency: 'KES',
    savedAmount: 189000,
    targetSavings: 1000000,
    availableBalance: 44840
}

// Getting current timestamp
const currentDate = new Date();
const timestamp = currentDate.toISOString().replace('T', ' ').replace(/\..+/, ''); // Output: 2022-02-10 15:30:45

export const budget = [
    {
        id: 1,
        name: 'Shopping',
        amount: 4000,
        createdOn: '2023-12-31 12:35:30'
    },
    {
        id: 2,
        name: 'Food',
        amount: 3000,
        createdOn: '2023-12-31 12:40:30'
    },
    {
        id: 3,
        name: 'Entertainment',
        amount: 4000,
        createdOn: '2023-12-31 12:45:30'
    },
    {
        id: 4,
        name: 'Travel',
        amount: 1000,
        createdOn: '2023-12-31 12:50:30'
    },
    {
        id: 5,
        name: 'Rent',
        amount: 10000,
        createdOn: '2023-12-31 12:55:30'
    }
];

export const income = [
    {
        id: 1,
        name: 'Salary',
        amount: 50000,
        createdOn: '2023-12-31 12:35:30'
    },
    {
        id: 2,
        name: 'Freelance',
        createdOn: '2023-12-31 12:40:30'
    }
]

export const transactions = [
    {
        id: 1,
        name: 'Shopping',
        description: '',
        type: 'expense',
        categoryId: 1,
        amount: 1000,
        date: '2024-01-02 11:20:55'
    },
    {
        id: 2,
        name: 'Food',
        description: '',
        type: 'expense',
        categoryId: 2,
        amount: 2000,
        date: '2024-01-02 11:30:55'
    },
    {
        id: 3,
        name: 'Freelance project',
        description: '',
        type: 'income',
        categoryId: 1,
        amount: 3000,
        date: '2024-01-01 11:20:55'
    },
    {
        id: 4,
        name: 'Travel',
        description: '',
        type: 'expense',
        categoryId: 4,
        amount: 1000,
        date: '2024-01-03 10:10:55'
    },
    {
        id: 5,
        name: 'Rent',
        description: '',
        type: 'expense',
        categoryId: 5,
        amount: 10000,
        date: '2024-01-03 12:40:55'
    }
]
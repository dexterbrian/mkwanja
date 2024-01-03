export const user = {
    username: 'Dexter',
    currency: 'KES',
    savedAmount: 189000,
    targetSavings: 1000000,
    availableBalance: 44840
}

// Getting current month and year
const currentDate = new Date();
const month = currentDate.toLocaleString('default', { month: 'short' });
const year = currentDate.getFullYear();
export const monthAndYear = `${month} ${year}`;

const timestamp = currentDate.toISOString().replace('T', ' ').replace(/\..+/, ''); // Output: 2022-02-10 15:30:45

export const budget = [
    {
        id: 1,
        name: 'Shopping',
        amount: 4000
    },
    {
        id: 2,
        name: 'Food',
        amount: 3000
    },
    {
        id: 3,
        name: 'Entertainment',
        amount: 4000
    },
    {
        id: 4,
        name: 'Travel',
        amount: 1000
    },
    {
        id: 5,
        name: 'Rent',
        amount: 10000
    }
];

export const transactions = [
    {
        id: 1,
        name: 'Shopping',
        description: '',
        categoryId: 1,
        amount: 1000,
        date: timestamp
    },
    {
        id: 2,
        name: 'Food',
        description: '',
        categoryId: 2,
        amount: 2000,
        date: timestamp
    },
    {
        id: 3,
        name: 'Entertainment',
        description: '',
        categoryId: 3,
        amount: 3000,
        date: timestamp
    },
    {
        id: 4,
        name: 'Travel',
        description: '',
        categoryId: 4,
        amount: 1000,
        date: timestamp
    },
    {
        id: 5,
        name: 'Rent',
        description: '',
        categoryId: 5,
        amount: 10000,
        date: timestamp
    }
]
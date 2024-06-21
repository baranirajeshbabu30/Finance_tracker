export interface Transaction {
    id: any;
    description: string;
    amount: number;
    date: Date;
    type: 'income' | 'expense';
}
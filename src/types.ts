export interface User {
  id: string;
  email: string;
  walletAddress: string;
  telegram?: string;
  joinDate: string;
}

export interface Asset {
  type: 'BP' | 'GP' | 'SP' | 'HWH';
  amount: number;
  valueInUsd: number;
}

export interface Transaction {
  id: string;
  date: string;
  type: string;
  amount: number;
  txid: string;
  status: 'Pending' | 'Completed' | 'Rejected';
}

export interface LuckyTicketEvent {
  id: string;
  title: string;
  prizePool: number;
  ticketsSold: number;
  totalTickets: number;
  price: number;
  currency: 'GP' | 'BP';
}

export interface EarningRecord {
  id: string;
  date: string;
  type: 'BP' | 'GP' | 'SP';
  amount: number;
  description: string;
}

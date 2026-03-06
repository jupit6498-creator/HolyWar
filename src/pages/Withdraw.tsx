import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  History, 
  Lock, 
  ShieldCheck, 
  Info,
  ExternalLink,
  Search,
  Filter
} from 'lucide-react';

const WithdrawalApplicationView = () => (
  <div className="max-w-2xl mx-auto bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm space-y-8">
    <div className="text-center space-y-2">
      <h2 className="text-2xl font-bold text-slate-900">Withdraw Assets</h2>
      <p className="text-sm text-slate-500">Fast and secure withdrawals to your blockchain wallet.</p>
    </div>
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Select Asset</label>
        <div className="grid grid-cols-2 gap-4">
          {['USDT', 'HWH'].map((asset) => (
            <button key={asset} className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${asset === 'USDT' ? 'border-gold-500 bg-gold-50' : 'border-slate-100 bg-slate-50'}`}>
              <span className="font-bold text-slate-900">{asset}</span>
              <div className={`w-4 h-4 rounded-full border-2 ${asset === 'USDT' ? 'border-gold-500 bg-gold-500' : 'border-slate-300'}`}></div>
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Withdrawal Address</label>
        <input 
          type="text" 
          placeholder="Enter your wallet address" 
          className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none focus:border-gold-500 transition-all"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center ml-1">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Amount</label>
          <span className="text-[10px] font-bold text-slate-400">Available: 1,250.00 USDT</span>
        </div>
        <div className="relative">
          <input 
            type="number" 
            placeholder="0.00" 
            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none focus:border-gold-500 transition-all"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gold-500 text-black text-[10px] font-bold rounded-lg hover:bg-gold-600 transition-colors">MAX</button>
        </div>
      </div>
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Fee</span>
          <span className="text-sm font-bold text-slate-900">1.00 USDT</span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-slate-200">
          <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">Receive Amount</span>
          <span className="text-lg font-bold text-gold-600">0.00 USDT</span>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">OTP Verification</label>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
            <Lock className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="6-digit OTP code" 
            className="flex-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none focus:border-gold-500 transition-all tracking-[0.5em] font-bold"
          />
        </div>
      </div>
      <button className="w-full py-5 bg-black text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
        Confirm Withdrawal
      </button>
    </div>
  </div>
);

const WithdrawalHistoryView = () => (
  <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
    <div className="p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <h2 className="text-xl font-bold text-slate-900">Withdrawal History</h2>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search TXID..." 
            className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-gold-500 transition-all"
          />
        </div>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-slate-50/50">
          <tr>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Asset</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">TXID</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[1, 2, 3].map((i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-8 py-5 text-sm text-slate-600">2025-03-05 12:30</td>
              <td className="px-8 py-5 text-sm font-bold text-slate-900">USDT</td>
              <td className="px-8 py-5 text-sm font-bold text-slate-900">500.00</td>
              <td className="px-8 py-5">
                <span className={`text-[10px] font-bold px-2 py-1 rounded-lg uppercase ${i === 1 ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}>
                  {i === 1 ? 'Processing' : 'Completed'}
                </span>
              </td>
              <td className="px-8 py-5">
                <a href="#" className="text-xs font-mono text-gold-600 hover:underline flex items-center gap-1">
                  0x78...3e4f
                  <ExternalLink className="w-3 h-3" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const WithdrawPage: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Application', path: '/withdraw/apply', icon: ArrowUpRight },
    { name: 'History', path: '/withdraw/history', icon: History },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Withdraw</h1>
          <p className="text-slate-500">Securely withdraw your assets to external wallets.</p>
        </div>
        <div className="flex items-center gap-2 p-1 bg-white border border-slate-200 rounded-2xl overflow-x-auto">
          {tabs.map((tab) => (
            <Link 
              key={tab.path}
              to={tab.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                location.pathname === tab.path 
                  ? 'bg-gold-500 text-black shadow-lg shadow-gold-100' 
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </Link>
          ))}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/withdraw/apply" replace />} />
        <Route path="/apply" element={<WithdrawalApplicationView />} />
        <Route path="/history" element={<WithdrawalHistoryView />} />
      </Routes>
    </div>
  );
};

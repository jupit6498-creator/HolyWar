import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Coins, 
  ArrowDownLeft, 
  ArrowUpRight, 
  History, 
  Copy, 
  QrCode, 
  ShieldCheck, 
  Lock,
  ExternalLink,
  Search,
  Filter,
  Info
} from 'lucide-react';

const HWHDepositView = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900">HWH Token Deposit</h2>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Network</div>
            <div className="font-bold text-slate-900">HWH Mainnet</div>
          </div>
          <div className="p-6 bg-slate-900 rounded-[2rem] text-white space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">HWH Deposit Address</div>
            <div className="flex items-center justify-between gap-4">
              <code className="text-sm font-mono break-all text-gold-500">0xHWH45DF345A45DF345A45DF345A45DF345A45DF</code>
              <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors shrink-0">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 text-blue-800 text-xs leading-relaxed">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          Please ensure you are using the HWH Mainnet. Deposits from other networks may be lost.
        </div>
      </div>
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center space-y-6">
        <div className="p-4 bg-slate-50 rounded-3xl border border-slate-100">
          <QrCode className="w-48 h-48 text-slate-900" />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">HWH QR Code</h3>
          <p className="text-sm text-slate-500">Scan to deposit HWH tokens instantly.</p>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-8 border-b border-slate-100">
        <h3 className="font-bold text-slate-900">Recent HWH Deposits</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50">
            <tr>
              <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
              <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
              <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
              <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">TXID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[1, 2].map((i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-5 text-sm text-slate-600">2025-03-05 09:10</td>
                <td className="px-8 py-5 text-sm font-bold text-slate-900">500.00 HWH</td>
                <td className="px-8 py-5">
                  <span className="text-[10px] font-bold px-2 py-1 bg-emerald-50 text-emerald-600 rounded-lg uppercase">Completed</span>
                </td>
                <td className="px-8 py-5">
                  <code className="text-xs font-mono text-slate-400">0x89...2d1a</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const HWHWithdrawView = () => (
  <div className="max-w-2xl mx-auto bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm space-y-8">
    <div className="text-center space-y-2">
      <h2 className="text-2xl font-bold text-slate-900">Withdraw HWH</h2>
      <p className="text-sm text-slate-500">Securely withdraw your HWH tokens to your external wallet.</p>
    </div>
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Withdrawal Address</label>
        <input 
          type="text" 
          placeholder="Enter HWH wallet address" 
          className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none focus:border-gold-500 transition-all"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center ml-1">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Amount</label>
          <span className="text-[10px] font-bold text-slate-400">Available: 850.40 HWH</span>
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
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Fee</span>
        <span className="text-sm font-bold text-slate-900">2.00 HWH</span>
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
        Apply for Withdrawal
      </button>
    </div>
  </div>
);

const HWHHistoryView = () => (
  <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
    <div className="p-8 border-b border-slate-100">
      <h2 className="text-xl font-bold text-slate-900">Withdrawal History</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-slate-50/50">
          <tr>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fee</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">TXID</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[1, 2, 3].map((i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-8 py-5 text-sm text-slate-600">2025-03-04 18:30</td>
              <td className="px-8 py-5 text-sm font-bold text-slate-900">100.00 HWH</td>
              <td className="px-8 py-5 text-sm text-slate-500">2.00 HWH</td>
              <td className="px-8 py-5">
                <span className={`text-[10px] font-bold px-2 py-1 rounded-lg uppercase ${i === 1 ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}>
                  {i === 1 ? 'Pending' : 'Completed'}
                </span>
              </td>
              <td className="px-8 py-5">
                <code className="text-xs font-mono text-slate-400">0x45...c6d7</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const HWHTXIDView = () => (
  <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
    <div className="p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h2 className="text-xl font-bold text-slate-900">HWH Blockchain Explorer</h2>
        <p className="text-xs text-slate-400 font-medium">Real-time HWH token transaction records</p>
      </div>
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
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">TXID</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Block Height</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Confirmations</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[1, 2, 3, 4, 5].map((i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-8 py-5">
                <a href="#" className="text-xs font-mono text-gold-600 hover:underline flex items-center gap-1">
                  0xHWH{i}a45df...{i}f34
                  <ExternalLink className="w-3 h-3" />
                </a>
              </td>
              <td className="px-8 py-5 text-sm font-medium text-slate-600">#12,450,89{i}</td>
              <td className="px-8 py-5 text-sm font-bold text-emerald-500">{12 + i * 5} Confirms</td>
              <td className="px-8 py-5 text-sm text-slate-400">{i * 2} mins ago</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const HWHTokenPage: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Deposit', path: '/hwh/deposit', icon: ArrowDownLeft },
    { name: 'Withdrawal App', path: '/hwh/withdraw', icon: ArrowUpRight },
    { name: 'History', path: '/hwh/history', icon: History },
    { name: 'HWH TXID', path: '/hwh/txid', icon: Coins },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">HWH Token</h1>
          <p className="text-slate-500">Manage your native HWH tokens and blockchain transactions.</p>
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
        <Route path="/" element={<Navigate to="/hwh/deposit" replace />} />
        <Route path="/deposit" element={<HWHDepositView />} />
        <Route path="/withdraw" element={<HWHWithdrawView />} />
        <Route path="/history" element={<HWHHistoryView />} />
        <Route path="/txid" element={<HWHTXIDView />} />
      </Routes>
    </div>
  );
};

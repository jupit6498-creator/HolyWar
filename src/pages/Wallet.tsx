import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Wallet, 
  ArrowDownLeft, 
  ArrowUpRight, 
  Copy, 
  QrCode, 
  ExternalLink, 
  Filter,
  Search,
  ChevronRight,
  Coins,
  Zap,
  ShoppingBag,
  History,
  Info,
  TrendingUp
} from 'lucide-react';

const DepositView = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Deposit Assets</h2>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Select Network</div>
            <select className="w-full bg-transparent font-bold text-slate-900 outline-none">
              <option>USDT (TRC-20)</option>
              <option>USDT (ERC-20)</option>
              <option>HWH (Mainnet)</option>
            </select>
          </div>
          <div className="p-6 bg-slate-900 rounded-[2rem] text-white space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Your Deposit Address</div>
            <div className="flex items-center justify-between gap-4">
              <code className="text-sm font-mono break-all text-gold-500">0x345A45DF345A45DF345A45DF345A45DF345A45DF</code>
              <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors shrink-0">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-2xl border border-amber-100 text-amber-800 text-xs leading-relaxed">
          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
            <Info className="w-4 h-4" />
          </div>
          Minimum deposit: 10 USDT. Deposits below this amount will not be credited.
        </div>
      </div>
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center space-y-6">
        <div className="p-4 bg-slate-50 rounded-3xl border border-slate-100">
          <QrCode className="w-48 h-48 text-slate-900" />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Scan QR Code</h3>
          <p className="text-sm text-slate-500">Use your wallet app to scan and deposit instantly.</p>
        </div>
      </div>
    </div>
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
      <h3 className="font-bold text-slate-900 mb-6">Deposit Instructions</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { step: '01', title: 'Copy Address', desc: 'Copy your unique deposit address or scan the QR code.' },
          { step: '02', title: 'Send Assets', desc: 'Send the supported assets from your external wallet.' },
          { step: '03', title: 'Wait for Confirmation', desc: 'Balance will be updated after network confirmation.' },
        ].map((item) => (
          <div key={item.step} className="space-y-2">
            <div className="text-2xl font-bold text-gold-500/20">{item.step}</div>
            <div className="font-bold text-slate-900">{item.title}</div>
            <div className="text-sm text-slate-500 leading-relaxed">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PointView = ({ type, title, icon: Icon, color }: { type: string, title: string, icon: any, color: string }) => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-12 h-12 bg-${color}-50 rounded-2xl flex items-center justify-center text-${color}-600`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">{title}</h2>
              <p className="text-xs text-slate-400 font-medium">Manage your {type} points and usage</p>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available Balance</div>
            <div className="text-4xl font-bold text-slate-900">12,450.00 <span className="text-lg text-slate-400 font-medium">{type}</span></div>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all">Use {type}</button>
          <button className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all">Transfer</button>
        </div>
      </div>
      <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white space-y-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full -mr-16 -mb-16 blur-2xl"></div>
        <h3 className="font-bold text-gold-500">Usage Guide</h3>
        <ul className="space-y-4">
          <li className="flex gap-3 text-xs text-slate-400 leading-relaxed">
            <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1 shrink-0"></div>
            {type} can be used for purchasing Lucky Tickets.
          </li>
          <li className="flex gap-3 text-xs text-slate-400 leading-relaxed">
            <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1 shrink-0"></div>
            Participate in special events to multiply your {type}.
          </li>
        </ul>
      </div>
    </div>
    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-8 border-b border-slate-100 flex items-center justify-between">
        <h3 className="font-bold text-slate-900">Recent {type} History</h3>
        <button className="text-sm font-bold text-gold-600 hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50">
            <tr>
              <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
              <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Type</th>
              <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
              <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[1, 2, 3].map((i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-5 text-sm text-slate-600">2025-03-05 14:20</td>
                <td className="px-8 py-5 text-sm font-bold text-slate-900">Ticket Purchase</td>
                <td className="px-8 py-5 text-sm font-bold text-red-500">-500.00</td>
                <td className="px-8 py-5">
                  <span className="text-[10px] font-bold px-2 py-1 bg-emerald-50 text-emerald-600 rounded-lg uppercase">Completed</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const TXIDView = () => (
  <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
    <div className="p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Global Transactions</h2>
        <p className="text-xs text-slate-400 font-medium">Monitor all blockchain activities on the platform</p>
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
        <button className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-400 hover:text-slate-600 transition-colors">
          <Filter className="w-5 h-5" />
        </button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-slate-50/50">
          <tr>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Type</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Coin</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">TXID</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[1, 2, 3, 4, 5].map((i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-8 py-5 text-sm text-slate-600">2025-03-05 10:15</td>
              <td className="px-8 py-5">
                <span className={`text-[10px] font-bold px-2 py-1 rounded-lg uppercase ${i % 2 === 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                  {i % 2 === 0 ? 'Deposit' : 'Withdraw'}
                </span>
              </td>
              <td className="px-8 py-5 text-sm font-bold text-slate-900">USDT</td>
              <td className="px-8 py-5 text-sm font-bold text-slate-900">1,250.00</td>
              <td className="px-8 py-5">
                <a href="#" className="text-xs font-mono text-gold-600 hover:underline flex items-center gap-1">
                  0x78...3e4f
                  <ExternalLink className="w-3 h-3" />
                </a>
              </td>
              <td className="px-8 py-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-bold text-slate-600">Confirmed</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const WalletPage: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Deposit', path: '/wallet/deposit', icon: ArrowDownLeft },
    { name: 'BP', path: '/wallet/bp', icon: TrendingUp },
    { name: 'GP', path: '/wallet/gp', icon: Zap },
    { name: 'SP', path: '/wallet/sp', icon: ShoppingBag },
    { name: 'TXID', path: '/wallet/txid', icon: History },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">My Wallet</h1>
          <p className="text-slate-500">Manage your internal points and blockchain assets.</p>
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
        <Route path="/" element={<Navigate to="/wallet/deposit" replace />} />
        <Route path="/deposit" element={<DepositView />} />
        <Route path="/bp" element={<PointView type="BP" title="Blood Point" icon={TrendingUp} color="emerald" />} />
        <Route path="/gp" element={<PointView type="GP" title="Game Point" icon={Zap} color="gold" />} />
        <Route path="/sp" element={<PointView type="SP" title="Shopping Point" icon={ShoppingBag} color="blue" />} />
        <Route path="/txid" element={<TXIDView />} />
      </Routes>
    </div>
  );
};

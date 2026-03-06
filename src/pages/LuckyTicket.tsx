import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Ticket, 
  Package, 
  Trophy, 
  History, 
  ChevronRight, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  Users,
  Search,
  Filter
} from 'lucide-react';

const BuyTicketView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Weekly Grand Draw', price: '100 BP', total: 5000, sold: 3450, prize: '$10,000', color: 'gold' },
          { name: 'Daily Flash Draw', price: '20 GP', total: 1000, sold: 850, prize: '$500', color: 'emerald' },
          { name: 'Monthly Mega Draw', price: '500 BP', total: 10000, sold: 1200, prize: '$50,000', color: 'blue' },
        ].map((event) => (
          <div key={event.name} className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden group hover:shadow-xl transition-all">
            <div className={`h-32 bg-${event.color}-500 relative p-8 flex items-center justify-between overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="relative z-10">
                <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Prize Pool</div>
                <div className="text-3xl font-bold text-white tracking-tight">{event.prize}</div>
              </div>
              <div className="relative z-10 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white">
                <Trophy className="w-6 h-6" />
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{event.name}</h3>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  Ends in: 12h 45m 20s
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span>Tickets Sold</span>
                  <span className="text-slate-900">{event.sold} / {event.total}</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-${event.color}-500 transition-all duration-1000`} 
                    style={{ width: `${(event.sold / event.total) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ticket Price</div>
                  <div className="text-lg font-bold text-slate-900">{event.price}</div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`px-6 py-3 bg-black text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200`}
                >
                  Buy Ticket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Placeholder */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white w-full max-w-lg rounded-[3rem] p-10 shadow-2xl space-y-8"
            >
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Confirm Purchase</h3>
                <p className="text-sm text-slate-500">You are about to buy tickets for Weekly Grand Draw.</p>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between">
                  <div className="text-sm font-bold text-slate-600">Quantity</div>
                  <div className="flex items-center gap-4">
                    <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-50">-</button>
                    <span className="text-xl font-bold text-slate-900">5</span>
                    <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-50">+</button>
                  </div>
                </div>
                <div className="p-6 bg-gold-500 rounded-3xl flex items-center justify-between text-black">
                  <div className="text-sm font-bold">Total Cost</div>
                  <div className="text-2xl font-bold">500 BP</div>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setIsModalOpen(false)} className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all">Cancel</button>
                <button className="flex-1 py-4 bg-black text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">Confirm Buy</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BuyPackageView = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { name: 'Bronze Package', tickets: 10, bonus: 1, price: '900 BP', color: 'amber' },
      { name: 'Silver Package', tickets: 50, bonus: 8, price: '4,500 BP', color: 'slate' },
      { name: 'Gold Package', tickets: 100, bonus: 20, price: '8,500 BP', color: 'gold' },
    ].map((pkg) => (
      <div key={pkg.name} className="bg-white rounded-[3rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col group hover:shadow-2xl transition-all">
        <div className={`p-10 bg-${pkg.color}-50 flex flex-col items-center text-center space-y-4`}>
          <div className={`w-20 h-20 bg-white rounded-[2rem] shadow-sm flex items-center justify-center text-${pkg.color}-600`}>
            <Package className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
        </div>
        <div className="p-10 flex-1 flex flex-col space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Tickets Included</span>
              <span className="font-bold text-slate-900">{pkg.tickets}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Bonus Tickets</span>
              <span className="font-bold text-emerald-500">+{pkg.bonus}</span>
            </div>
            <div className="flex items-center justify-between text-sm pt-4 border-t border-slate-100">
              <span className="text-slate-500">Total Tickets</span>
              <span className="text-xl font-bold text-slate-900">{pkg.tickets + pkg.bonus}</span>
            </div>
          </div>
          <div className="mt-auto space-y-4">
            <div className="text-center">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Package Price</div>
              <div className="text-2xl font-bold text-slate-900">{pkg.price}</div>
            </div>
            <button className="w-full py-4 bg-black text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
              Buy Package
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const WinningListView = () => (
  <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
    <div className="p-8 border-b border-slate-100">
      <h2 className="text-xl font-bold text-slate-900">Recent Winners</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-slate-50/50">
          <tr>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Event Name</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Winning Number</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Winner ID</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[1, 2, 3, 4, 5].map((i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-8 py-5 text-sm font-bold text-slate-900">Weekly Grand Draw #{120 + i}</td>
              <td className="px-8 py-5">
                <span className="text-xs font-mono font-bold text-gold-600 bg-gold-50 px-2 py-1 rounded-lg">#8829{i}</span>
              </td>
              <td className="px-8 py-5 text-sm text-slate-600">User_{777 + i}</td>
              <td className="px-8 py-5 text-sm font-bold text-emerald-600">$1,000.00</td>
              <td className="px-8 py-5 text-sm text-slate-400">2025-03-05</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const HistoryView = ({ type }: { type: 'ticket' | 'package' }) => (
  <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
    <div className="p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <h2 className="text-xl font-bold text-slate-900">{type === 'ticket' ? 'Ticket' : 'Package'} Purchase History</h2>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-gold-500 transition-all"
          />
        </div>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-slate-50/50">
          <tr>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{type === 'ticket' ? 'Event Name' : 'Package Name'}</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quantity</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Used Points</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[1, 2, 3].map((i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-8 py-5 text-sm font-bold text-slate-900">{type === 'ticket' ? 'Weekly Draw #125' : 'Silver Package'}</td>
              <td className="px-8 py-5 text-sm text-slate-600">{type === 'ticket' ? '5 Tickets' : '58 Tickets'}</td>
              <td className="px-8 py-5 text-sm font-bold text-slate-900">{type === 'ticket' ? '500 BP' : '4,500 BP'}</td>
              <td className="px-8 py-5 text-sm text-slate-400">2025-03-04</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const LuckyTicketPage: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Buy Ticket', path: '/tickets/event', icon: Ticket },
    { name: 'Buy Package', path: '/tickets/package', icon: Package },
    { name: 'Winning List', path: '/tickets/winners', icon: Trophy },
    { name: 'Ticket History', path: '/tickets/history', icon: History },
    { name: 'Package History', path: '/tickets/package-history', icon: History },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Lucky Ticket</h1>
          <p className="text-slate-500">Participate in events and win massive prizes.</p>
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
        <Route path="/" element={<Navigate to="/tickets/event" replace />} />
        <Route path="/event" element={<BuyTicketView />} />
        <Route path="/package" element={<BuyPackageView />} />
        <Route path="/winners" element={<WinningListView />} />
        <Route path="/history" element={<HistoryView type="ticket" />} />
        <Route path="/package-history" element={<HistoryView type="package" />} />
      </Routes>
    </div>
  );
};

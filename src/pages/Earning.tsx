import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Calendar, 
  Filter, 
  Download, 
  ArrowUpRight, 
  ChevronRight,
  Zap,
  ShoppingBag,
  Coins,
  History,
  PieChart
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const mockChartData = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 600 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 500 },
  { name: 'Sat', value: 900 },
  { name: 'Sun', value: 1100 },
];

const TodayDetailView = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Today's Earning Trend</h3>
            <p className="text-xs text-slate-400 font-medium">Real-time update of your revenue</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-gold-500 rounded-full"></span>
            <span className="text-xs font-bold text-slate-600">Total Revenue</span>
          </div>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockChartData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FACC15" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#FACC15" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94A3B8' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94A3B8' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="value" stroke="#FACC15" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="space-y-6">
        {[
          { label: 'Today BP', value: '+1,250.00', color: 'emerald', icon: TrendingUp },
          { label: 'Today GP', value: '+450.00', color: 'gold', icon: Zap },
          { label: 'Today SP', value: '+120.00', color: 'blue', icon: ShoppingBag },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 bg-${stat.color}-50 rounded-2xl flex items-center justify-center text-${stat.color}-600`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                <div className="text-xl font-bold text-slate-900">{stat.value}</div>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-emerald-500" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const EarningListView = ({ type }: { type: 'All' | 'BP' | 'GP' | 'SP' }) => (
  <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
    <div className="p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <h2 className="text-xl font-bold text-slate-900">{type} Earning History</h2>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors">
          <Calendar className="w-4 h-4" />
          Last 30 Days
        </button>
        <button className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-400 hover:text-slate-600 transition-colors">
          <Download className="w-5 h-5" />
        </button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-slate-50/50">
          <tr>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Source</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Asset</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[1, 2, 3, 4, 5].map((i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-8 py-5 text-sm text-slate-600">2025-03-05 16:45</td>
              <td className="px-8 py-5 text-sm font-bold text-slate-900">Lucky Draw Reward</td>
              <td className="px-8 py-5 text-sm text-slate-500">{type === 'All' ? (i % 2 === 0 ? 'BP' : 'GP') : type}</td>
              <td className="px-8 py-5 text-sm font-bold text-emerald-600">+250.00</td>
              <td className="px-8 py-5">
                <span className="text-[10px] font-bold px-2 py-1 bg-emerald-50 text-emerald-600 rounded-lg uppercase">Received</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const EarningPage: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Today Detail', path: '/earning/today', icon: PieChart },
    { name: 'Earning List', path: '/earning/list', icon: History },
    { name: 'BP List', path: '/earning/bp', icon: TrendingUp },
    { name: 'GP List', path: '/earning/gp', icon: Zap },
    { name: 'SP List', path: '/earning/sp', icon: ShoppingBag },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Earnings</h1>
          <p className="text-slate-500">Track your revenue and point accumulation.</p>
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
        <Route path="/" element={<Navigate to="/earning/today" replace />} />
        <Route path="/today" element={<TodayDetailView />} />
        <Route path="/list" element={<EarningListView type="All" />} />
        <Route path="/bp" element={<EarningListView type="BP" />} />
        <Route path="/gp" element={<EarningListView type="GP" />} />
        <Route path="/sp" element={<EarningListView type="SP" />} />
      </Routes>
    </div>
  );
};

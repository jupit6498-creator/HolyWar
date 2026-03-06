import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bell, 
  User as UserIcon, 
  ChevronDown, 
  Wallet, 
  Coins, 
  Ticket, 
  TrendingUp, 
  ArrowUpRight, 
  LogOut,
  Menu,
  X,
  Shield,
  Lock
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  isLoggedIn: boolean;
  user?: { walletAddress: string };
}

export const Layout: React.FC<LayoutProps> = ({ children, isLoggedIn, user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'My Wallet', 
      path: '/wallet/deposit', 
      icon: Wallet,
      subItems: [
        { name: 'Deposit', path: '/wallet/deposit' },
        { name: 'BP(Blood Point)', path: '/wallet/bp' },
        { name: 'GP(Game Point)', path: '/wallet/gp' },
        { name: 'SP(Shopping Point)', path: '/wallet/sp' },
        { name: 'TXID', path: '/wallet/txid' },
      ]
    },
    { 
      name: 'HWH Token', 
      path: '/hwh/deposit', 
      icon: Coins,
      subItems: [
        { name: 'Deposit', path: '/hwh/deposit' },
        { name: 'Withdrawal Application', path: '/hwh/withdraw' },
        { name: 'Withdrawal History', path: '/hwh/history' },
        { name: 'HWH TXID', path: '/hwh/txid' },
      ]
    },
    { 
      name: 'My Lucky Ticket', 
      path: '/tickets/event', 
      icon: Ticket,
      subItems: [
        { name: 'Buy Ticket Event', path: '/tickets/event' },
        { name: 'Buy Package', path: '/tickets/package' },
        { name: 'Winning List', path: '/tickets/winners' },
        { name: 'Buy Ticket History', path: '/tickets/history' },
        { name: 'Buy Package History', path: '/tickets/package-history' },
      ]
    },
    { 
      name: 'Earning', 
      path: '/earning/today', 
      icon: TrendingUp,
      subItems: [
        { name: 'Today Detail', path: '/earning/today' },
        { name: 'Earning List', path: '/earning/list' },
        { name: 'BP List', path: '/earning/bp' },
        { name: 'GP List', path: '/earning/gp' },
        { name: 'SP List', path: '/earning/sp' },
      ]
    },
    { 
      name: 'Withdraw', 
      path: '/withdraw/app', 
      icon: ArrowUpRight,
      subItems: [
        { name: 'Withdrawal Application', path: '/withdraw/app' },
        { name: 'Withdrawal History', path: '/withdraw/history' },
      ]
    },
    { 
      name: 'My Page', 
      path: '/mypage/info', 
      icon: UserIcon,
      subItems: [
        { name: 'Personal Information', path: '/mypage/info' },
        { name: 'Change Password', path: '/mypage/password' },
      ]
    },
  ];

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-gold-500 font-bold text-xl">HW</span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-slate-900">HOLY<span className="text-gold-600">WAR</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.path} className="relative group nav-item">
                <Link 
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    location.pathname === item.path 
                      ? 'text-gold-600 bg-gold-50' 
                      : 'text-slate-600 hover:text-gold-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                  <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                </Link>
                
                {/* Dropdown Menu */}
                {item.subItems && (
                  <div className="nav-dropdown p-2 min-w-[220px]">
                    <div className="flex flex-col gap-0.5">
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.name} 
                          to={sub.path} 
                          className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-gold-50 hover:text-gold-600 rounded-lg transition-colors group/sub"
                        >
                          <div className="w-1 h-1 rounded-full bg-gold-400 opacity-0 group-hover/sub:opacity-100 transition-opacity"></div>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full border border-slate-200">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono font-medium text-slate-600">
                    {truncateAddress(user?.walletAddress || '0x0000000000000000000000000000000000000000')}
                  </span>
                </div>
                <button className="p-2 text-slate-500 hover:text-gold-600 hover:bg-gold-50 rounded-full transition-colors relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <Link to="/mypage" className="w-9 h-9 bg-gold-100 rounded-full flex items-center justify-center text-gold-700 hover:bg-gold-200 transition-colors">
                  <UserIcon className="w-5 h-5" />
                </Link>
                <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(true)}>
                  <Menu className="w-6 h-6" />
                </button>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-gold-600 transition-colors">Login</Link>
                <Link to="/signup" className="px-5 py-2 text-sm font-bold text-white bg-black rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-[70] shadow-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold text-xl">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-slate-900">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.path} className="flex flex-col">
                    <Link 
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        location.pathname === item.path 
                          ? 'bg-gold-50 text-gold-600' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      {item.name}
                    </Link>
                    {item.subItems && (
                      <div className="ml-12 flex flex-col gap-1 mt-1 mb-2">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xs text-slate-500 hover:text-gold-600 py-1.5 transition-colors"
                          >
                            └ {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-6 border-t border-slate-100">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 font-medium hover:bg-red-50 rounded-xl transition-colors">
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-gold-500 font-bold text-sm">HW</span>
                </div>
                <span className="text-lg font-bold tracking-tighter">HOLYWAR</span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                The next generation blockchain-based premium finance and lucky draw platform. 
                Secure, transparent, and rewarding.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/wallet" className="hover:text-gold-600">My Wallet</Link></li>
                <li><Link to="/hwh" className="hover:text-gold-600">HWH Token</Link></li>
                <li><Link to="/tickets" className="hover:text-gold-600">Lucky Draw</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Trust & Security</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  Smart Contract Verified
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Lock className="w-4 h-4 text-emerald-500" />
                  256-bit Encryption
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">© 2025 HolyWar Platform. All transactions recorded on blockchain.</p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-xs font-bold text-slate-900">12,450</div>
                <div className="text-[10px] text-slate-400 uppercase">Total Users</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-slate-900">5,200</div>
                <div className="text-[10px] text-slate-400 uppercase">Total Tickets</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-slate-900">$1.2M</div>
                <div className="text-[10px] text-slate-400 uppercase">Total Prize</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

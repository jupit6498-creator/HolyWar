import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-10">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-gold-100">
              <span className="text-gold-500 font-bold text-3xl">HW</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome to HolyWar</h1>
            <p className="text-slate-500 text-sm">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email / ID</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-gold-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 transition-all text-slate-900"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Password</label>
                <button type="button" className="text-xs font-bold text-gold-600 hover:text-gold-700">Forgot Password?</button>
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-gold-600 transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 transition-all text-slate-900"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 group active:scale-[0.98]"
            >
              Login
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm mb-4">Don't have an account?</p>
            <Link 
              to="/signup"
              className="inline-flex items-center gap-2 text-gold-600 font-bold hover:text-gold-700 transition-colors"
            >
              Create an account
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <Lock className="w-3 h-3" />
            Blockchain Secured Authentication
          </p>
        </div>
      </motion.div>
    </div>
  );
};

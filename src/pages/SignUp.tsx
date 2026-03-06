import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Mail, 
  Lock, 
  Shield, 
  Wallet, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';

export const SignUp: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    id: '',
    email: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
    walletAddress: '',
    telegram: '',
    agreed: false
  });
  const navigate = useNavigate();

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl"
      >
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-slate-100 flex">
            <motion.div 
              initial={{ width: '50%' }}
              animate={{ width: step === 1 ? '50%' : '100%' }}
              className="h-full bg-gold-500"
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-50 rounded-full text-[10px] font-bold text-gold-600 uppercase tracking-widest mb-4">
                Step {step} of 2
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {step === 1 ? 'Create Account' : 'Security Verification'}
              </h1>
              <p className="text-slate-500 text-sm">
                {step === 1 ? 'Start your journey with HolyWar platform' : 'Secure your account with blockchain verification'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">User ID</label>
                        <div className="relative">
                          <User className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input 
                            type="text"
                            placeholder="holywar_user"
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-gold-500 transition-all"
                            value={formData.id}
                            onChange={(e) => setFormData({...formData, id: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email</label>
                        <div className="relative">
                          <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input 
                            type="email"
                            placeholder="user@example.com"
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-gold-500 transition-all"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Password</label>
                        <div className="relative">
                          <Lock className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input 
                            type="password"
                            placeholder="••••••••"
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-gold-500 transition-all"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Confirm Password</label>
                        <div className="relative">
                          <Lock className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input 
                            type="password"
                            placeholder="••••••••"
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-gold-500 transition-all"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Referral Code (Optional)</label>
                      <input 
                        type="text"
                        placeholder="REF-123456"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-gold-500 transition-all"
                        value={formData.referralCode}
                        onChange={(e) => setFormData({...formData, referralCode: e.target.value})}
                      />
                    </div>

                    <button 
                      type="button"
                      onClick={handleNext}
                      className="w-full py-4 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all group mt-4"
                    >
                      Next Step
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-emerald-900">Blockchain Secure Platform</div>
                        <div className="text-xs text-emerald-700">Your data is encrypted and verified on-chain</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Wallet Address</label>
                      <div className="relative">
                        <Wallet className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input 
                          type="text"
                          placeholder="0x..."
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-gold-500 transition-all font-mono text-sm"
                          value={formData.walletAddress}
                          onChange={(e) => setFormData({...formData, walletAddress: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Telegram / Contact</label>
                      <div className="relative">
                        <Send className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input 
                          type="text"
                          placeholder="@username"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-gold-500 transition-all"
                          value={formData.telegram}
                          onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                        />
                      </div>
                    </div>

                    <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 cursor-pointer group hover:bg-slate-100 transition-colors">
                      <input 
                        type="checkbox" 
                        className="mt-1 w-5 h-5 rounded-lg border-slate-300 text-gold-600 focus:ring-gold-500"
                        checked={formData.agreed}
                        onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
                      />
                      <span className="text-xs text-slate-500 leading-relaxed">
                        I agree to the <span className="text-gold-600 font-bold">Terms of Service</span> and <span className="text-gold-600 font-bold">Privacy Policy</span>. I understand that all transactions are final and recorded on the blockchain.
                      </span>
                    </label>

                    <div className="flex gap-4 mt-6">
                      <button 
                        type="button"
                        onClick={handleBack}
                        className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all"
                      >
                        <ArrowLeft className="w-5 h-5" />
                        Back
                      </button>
                      <button 
                        type="submit"
                        disabled={!formData.agreed}
                        className="flex-[2] py-4 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Sign Up Now
                        <CheckCircle2 className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Already have an account? <Link to="/login" className="text-gold-600 font-bold hover:text-gold-700">Login here</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  User, 
  Lock, 
  ShieldCheck, 
  Mail, 
  Phone, 
  Globe, 
  Camera,
  ChevronRight,
  LogOut,
  Bell,
  Eye,
  EyeOff
} from 'lucide-react';

const PersonalInformationView = () => (
  <div className="space-y-8">
    <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-sm">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="relative">
          <div className="w-32 h-32 bg-slate-100 rounded-[2.5rem] flex items-center justify-center text-slate-400 overflow-hidden border-4 border-white shadow-xl">
            <User className="w-16 h-16" />
          </div>
          <button className="absolute -bottom-2 -right-2 p-3 bg-gold-500 text-black rounded-2xl shadow-lg hover:bg-gold-600 transition-all">
            <Camera className="w-5 h-5" />
          </button>
        </div>
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">User_777</h2>
          <p className="text-sm text-slate-500 font-medium flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            Verified Member
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest">Level 5</div>
            <div className="px-3 py-1 bg-gold-50 rounded-lg text-[10px] font-bold text-gold-600 uppercase tracking-widest">VIP Gold</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
            <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-600">
              <Mail className="w-5 h-5 text-slate-400" />
              <span className="text-sm font-medium">user_777@example.com</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
            <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-600">
              <Phone className="w-5 h-5 text-slate-400" />
              <span className="text-sm font-medium">+82 10-****-5678</span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Country / Region</label>
            <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-600">
              <Globe className="w-5 h-5 text-slate-400" />
              <span className="text-sm font-medium">South Korea</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Join Date</label>
            <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-600">
              <ShieldCheck className="w-5 h-5 text-slate-400" />
              <span className="text-sm font-medium">2024-12-15</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-slate-100 flex justify-end">
        <button className="px-8 py-4 bg-black text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
          Edit Profile
        </button>
      </div>
    </div>

    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 mb-6">Account Settings</h3>
      <div className="space-y-4">
        {[
          { icon: Bell, title: 'Notifications', desc: 'Manage your email and push alerts', action: 'Configure' },
          { icon: ShieldCheck, title: 'Two-Factor Auth', desc: 'Secure your account with 2FA', action: 'Enable' },
        ].map((item) => (
          <div key={item.title} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-gold-600 transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-slate-900">{item.title}</div>
                <div className="text-xs text-slate-400">{item.desc}</div>
              </div>
            </div>
            <button className="text-xs font-bold text-gold-600 hover:underline">{item.action}</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ChangePasswordView = () => {
  const [showPass, setShowPass] = React.useState(false);
  
  return (
    <div className="max-w-2xl mx-auto bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">Change Password</h2>
        <p className="text-sm text-slate-500">Update your account password to keep it secure.</p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Current Password</label>
          <div className="relative">
            <input 
              type={showPass ? 'text' : 'password'} 
              placeholder="Enter current password" 
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none focus:border-gold-500 transition-all"
            />
            <button 
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">New Password</label>
          <input 
            type="password" 
            placeholder="Enter new password" 
            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none focus:border-gold-500 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Confirm New Password</label>
          <input 
            type="password" 
            placeholder="Confirm new password" 
            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none focus:border-gold-500 transition-all"
          />
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Password Requirements:</h4>
          <ul className="space-y-2">
            {[
              'At least 8 characters long',
              'Include at least one uppercase letter',
              'Include at least one number or symbol',
            ].map((req) => (
              <li key={req} className="flex items-center gap-2 text-xs text-slate-500">
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                {req}
              </li>
            ))}
          </ul>
        </div>
        <button className="w-full py-5 bg-black text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
          Update Password
        </button>
      </div>
    </div>
  );
};

export const MyPage: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Personal Info', path: '/mypage/info', icon: User },
    { name: 'Change Password', path: '/mypage/password', icon: Lock },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">My Page</h1>
          <p className="text-slate-500">Manage your profile and account security settings.</p>
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
        <Route path="/" element={<Navigate to="/mypage/info" replace />} />
        <Route path="/info" element={<PersonalInformationView />} />
        <Route path="/password" element={<ChangePasswordView />} />
      </Routes>
    </div>
  );
};

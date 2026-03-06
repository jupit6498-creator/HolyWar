import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Wallet, 
  Ticket, 
  Trophy, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  ChevronRight,
  Coins,
  Users,
  Globe,
  Bell,
  ArrowUpRight,
  History,
  Info
} from 'lucide-react';

export const Home: React.FC = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    return (
      <div className="space-y-8 pb-12">
        {/* User Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-black rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Welcome back, <span className="text-gold-500">User_777</span></h1>
            <p className="text-slate-400">Your portfolio is performing well today. Check your latest rewards.</p>
          </div>
          <div className="relative z-10 flex items-center gap-4">
            <div className="text-right">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Balance</div>
              <div className="text-2xl font-bold">$45,230.50</div>
            </div>
            <div className="w-12 h-12 bg-gold-500 rounded-2xl flex items-center justify-center text-black">
              <Wallet className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Asset Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'BP Balance', value: '12,450', color: 'emerald', icon: TrendingUp },
            { label: 'GP Balance', value: '5,200', color: 'gold', icon: Zap },
            { label: 'SP Balance', value: '3,150', color: 'blue', icon: Coins },
            { label: 'HWH Tokens', value: '850.40', color: 'purple', icon: ShieldCheck },
          ].map((asset) => (
            <div key={asset.label} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 bg-${asset.color}-50 rounded-xl flex items-center justify-center text-${asset.color}-600`}>
                  <asset.icon className="w-5 h-5" />
                </div>
                <div className="text-emerald-500 text-[10px] font-bold">+2.4%</div>
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{asset.label}</div>
              <div className="text-xl font-bold text-slate-900">{asset.value}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Participation Status */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Ticket className="w-6 h-6 text-gold-500" />
                  Participation Status
                </h2>
                <Link to="/tickets/event" className="text-sm font-bold text-gold-600 hover:underline">View All Tickets</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">My Lucky Tickets</div>
                  <div className="text-2xl font-bold text-slate-900">24</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Today's Entries</div>
                  <div className="text-2xl font-bold text-slate-900">5</div>
                </div>
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-2">Recent Win</div>
                  <div className="text-2xl font-bold text-emerald-700">Yes!</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <History className="w-6 h-6 text-blue-500" />
                  Recent Activity
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  { type: 'Ticket Purchase', desc: 'Bought 5 tickets for Weekly Draw', time: '2 hours ago', amount: '-500 BP', icon: Ticket, color: 'gold' },
                  { type: 'Earning', desc: 'Staking reward distributed', time: '5 hours ago', amount: '+120 BP', icon: TrendingUp, color: 'emerald' },
                  { type: 'Withdrawal', desc: 'Withdrawal request submitted', time: '1 day ago', amount: '2,000 USDT', icon: ArrowUpRight, color: 'blue' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 bg-${activity.color}-50 rounded-xl flex items-center justify-center text-${activity.color}-600`}>
                        <activity.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{activity.type}</div>
                        <div className="text-xs text-slate-400">{activity.desc}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold ${activity.amount.startsWith('+') ? 'text-emerald-500' : 'text-slate-900'}`}>{activity.amount}</div>
                      <div className="text-[10px] text-slate-400">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Notices & Announcements */}
          <div className="space-y-6">
            <div className="bg-gold-500 p-8 rounded-[2.5rem] text-black shadow-xl shadow-gold-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Announcements
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-black/5 rounded-2xl border border-black/10">
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1">Event</div>
                  <div className="text-sm font-bold">New HWH Staking Pool is now live with 25% APR!</div>
                </div>
                <div className="p-4 bg-black/5 rounded-2xl border border-black/10">
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1">System</div>
                  <div className="text-sm font-bold">Scheduled maintenance on March 10th.</div>
                </div>
              </div>
              <button className="w-full mt-6 py-3 bg-black text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all">
                View All Notices
              </button>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Info className="w-5 h-5 text-slate-400" />
                Quick Tips
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-xs text-slate-500 leading-relaxed">
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1 shrink-0"></div>
                  Enable 2FA in My Page to increase your withdrawal limits.
                </li>
                <li className="flex gap-3 text-xs text-slate-500 leading-relaxed">
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1 shrink-0"></div>
                  Participate in daily events to earn bonus GP points.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Guest Landing Page (Existing)
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative rounded-[3rem] overflow-hidden bg-black p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 min-h-[500px]">
        <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-500/40 via-transparent to-transparent"></div>
        </div>
        
        <div className="flex-1 space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 rounded-full border border-gold-500/20 text-gold-500 text-xs font-bold uppercase tracking-widest">
            <Zap className="w-4 h-4" />
            Next Generation Finance
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
            Premium <span className="text-gold-500">Blockchain</span> <br /> Rewards Platform.
          </h1>
          <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
            Experience the future of decentralized finance and lucky draws. Secure, transparent, and built for the community.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/signup" className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-black rounded-2xl font-bold hover:bg-gold-600 transition-all shadow-xl shadow-gold-100 flex items-center justify-center gap-2 group">
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/tickets/event" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center gap-2">
              View Lucky Draw
            </Link>
          </div>
        </div>

        <div className="flex-1 relative hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <div className="w-80 h-80 bg-gold-500 rounded-[4rem] rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20"></div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] shadow-2xl relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-gold-500 rounded-2xl flex items-center justify-center text-black">
                  <Coins className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">HWH Price</div>
                  <div className="text-xl font-bold text-white">$6.50 <span className="text-emerald-500 text-xs">+12%</span></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gold-500 w-3/4"></div>
                </div>
                <div className="flex justify-between text-xs font-bold text-slate-400">
                  <span>Prize Pool</span>
                  <span className="text-white">$1,245,000</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Users', value: '12,450', icon: Users, color: 'blue' },
          { label: 'Total Tickets', value: '5,200', icon: Ticket, color: 'gold' },
          { label: 'Total Prize', value: '$1.2M', icon: Trophy, color: 'emerald' },
          { label: 'Network Status', value: 'Online', icon: Globe, color: 'purple' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 bg-${stat.color}-50 rounded-2xl flex items-center justify-center text-${stat.color}-600`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              <div className="text-xl font-bold text-slate-900">{stat.value}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Features Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose HolyWar?</h2>
          <p className="text-slate-500">Our platform combines the excitement of lucky draws with the security of blockchain technology.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Blockchain Proof', 
              desc: 'Every transaction and draw result is recorded on the blockchain for full transparency.', 
              icon: ShieldCheck,
              color: 'emerald'
            },
            { 
              title: 'High Rewards', 
              desc: 'Earn BP, GP, and SP points through staking and participation in our ecosystem.', 
              icon: TrendingUp,
              color: 'gold'
            },
            { 
              title: 'Secure Assets', 
              desc: 'Military-grade encryption and smart contract verification protect your digital assets.', 
              icon: Wallet,
              color: 'blue'
            },
          ].map((feature) => (
            <div key={feature.title} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
              <div className={`w-16 h-16 bg-${feature.color}-50 rounded-[1.5rem] flex items-center justify-center text-${feature.color}-600 mb-8 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{feature.desc}</p>
              <Link to="/signup" className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-gold-600 transition-colors">
                Learn More
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gold-500 rounded-[3rem] p-12 text-center space-y-8 shadow-2xl shadow-gold-100">
        <h2 className="text-4xl font-bold text-black tracking-tight">Ready to start your winning journey?</h2>
        <p className="text-black/60 text-lg max-w-xl mx-auto">Join thousands of users who are already earning rewards on the HolyWar platform.</p>
        <Link to="/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-black text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-black/20 group">
          Create Free Account
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  );
};

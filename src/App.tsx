import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { WalletPage } from './pages/Wallet';
import { HWHTokenPage } from './pages/HWHToken';
import { LuckyTicketPage } from './pages/LuckyTicket';
import { EarningPage } from './pages/Earning';
import { WithdrawPage } from './pages/Withdraw';
import { MyPage } from './pages/MyPage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    walletAddress: '0x345A45DF345A45DF345A45DF345A45DF345A45DF'
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
  };

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn} user={user}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/" replace /> : <SignUp />} />
          
          <Route path="/wallet/*" element={
            <ProtectedRoute>
              <WalletPage />
            </ProtectedRoute>
          } />
          
          <Route path="/hwh/*" element={
            <ProtectedRoute>
              <HWHTokenPage />
            </ProtectedRoute>
          } />
          
          <Route path="/tickets/*" element={
            <ProtectedRoute>
              <LuckyTicketPage />
            </ProtectedRoute>
          } />
          
          <Route path="/earning/*" element={
            <ProtectedRoute>
              <EarningPage />
            </ProtectedRoute>
          } />
          
          <Route path="/withdraw/*" element={
            <ProtectedRoute>
              <WithdrawPage />
            </ProtectedRoute>
          } />
          
          <Route path="/mypage/*" element={
            <ProtectedRoute>
              <MyPage />
            </ProtectedRoute>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}


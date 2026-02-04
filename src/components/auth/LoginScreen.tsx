import { useState } from 'react';
import { useNavigate } from 'react-router';

export function LoginScreen() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  // Demo credentials
  const demoAccounts = [
    { role: 'Farmer', mobile: '9876543210', password: 'farmer123', route: '/farmer/dashboard' },
    { role: 'Operator', mobile: '8765432109', password: 'operator123', route: '/operator/dashboard' },
    { role: 'Owner', mobile: '7654321098', password: 'owner123', route: '/owner/dashboard' }
  ];

  const handleLogin = () => {
    // Check demo credentials
    const account = demoAccounts.find(
      acc => acc.mobile === mobile && acc.password === password
    );
    
    if (account) {
      navigate(account.route);
    } else {
      // Fallback to old logic based on mobile number prefix
      if (mobile.startsWith('9')) {
        navigate('/farmer/dashboard');
      } else if (mobile.startsWith('8')) {
        navigate('/operator/dashboard');
      } else if (mobile.startsWith('7')) {
        navigate('/owner/dashboard');
      }
    }
  };

  const handleDemoLogin = (account: typeof demoAccounts[0]) => {
    setMobile(account.mobile);
    setPassword(account.password);
    navigate(account.route);
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl mb-2">AgriTrack</h1>
          <p className="text-gray-600">Field Operations Monitor</p>
        </div>

        {/* Demo Credentials Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="text-sm font-medium text-blue-900 mb-3">Demo Accounts - Quick Login</h3>
          <div className="space-y-2">
            {demoAccounts.map((account) => (
              <button
                key={account.role}
                onClick={() => handleDemoLogin(account)}
                className="w-full bg-white border border-blue-300 text-left p-3 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-blue-900">{account.role}</p>
                    <p className="text-xs text-blue-700">📱 {account.mobile}</p>
                  </div>
                  <span className="text-blue-600 text-sm">Login →</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter mobile number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-green-600 text-white py-3 rounded-lg"
          >
            Login
          </button>

          <button
            onClick={() => navigate('/register')}
            className="w-full border border-green-600 text-green-600 py-3 rounded-lg"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
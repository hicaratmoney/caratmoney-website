import React, { useState } from 'react';
import { Check, Phone, MessageCircle } from 'lucide-react';

const CaratMoney = () => {
  const [language, setLanguage] = useState('en');
  const [weight, setWeight] = useState('');
  const [purity, setPurity] = useState('22');
  const [goldType, setGoldType] = useState('jewellery');
  const [estimatedValue, setEstimatedValue] = useState(0);

  const RATE_24K = 13500;

  const purities = {
    24: 0.999,
    22: 0.916,
    18: 0.750,
    14: 0.585
  };

  const translations = {
    en: {
      header: 'From Ornament To Money. In Minutes!',
      subheader: 'Sell your gold at India\'s best rates — weighed, tested, and paid in under 20 minutes.',
      goldPurchased: 'Gold Purchased',
      happyCustomers: 'Happy Customers',
      avgRating: 'Average Rating',
      weight: 'Weight (in grams)',
      goldPurity: 'Gold Purity (Karat)',
      goldType: 'Gold Type',
      karat24: '24 Karat — 99.9% Pure',
      karat22: '22 Karat — 91.6% Pure',
      karat18: '18 Karat — 75% Pure',
      karat14: '14 Karat — 58.5% Pure',
      jewellery: 'Jewellery / Ornaments',
      coins: 'Gold Coins / Bars',
      scrap: 'Scrap / Broken Pieces',
      estimatedValue: 'Estimated Value',
      youReceive: 'You Receive',
      today: "Today's Carat Money Rate",
      calcTitle: 'Gold Value Estimator',
      calcSubtitle: 'Check your gold value. Right now.'
    },
    hi: {
      header: 'गहना से पैसा। मिनटों में!',
      weight: 'वजन (ग्राम में)',
      youReceive: 'आप पाएंगे'
    }
  };

  const t = translations[language] || translations['en'];

  const calculateValue = () => {
    if (!weight || weight <= 0) {
      setEstimatedValue(0);
      return;
    }
    const weightNum = parseFloat(weight);
    const purityPercent = purities[purity];
    const grossValue = weightNum * purityPercent * RATE_24K;
    const deduction = grossValue * 0.03;
    const finalValue = grossValue - deduction;
    setEstimatedValue(Math.round(finalValue));
  };

  React.useEffect(() => {
    calculateValue();
  }, [weight, purity]);

  const rate24K = RATE_24K;
  const rate22K = Math.round(RATE_24K * 0.916);
  const rate18K = Math.round(RATE_24K * 0.750);
  const rate14K = Math.round(RATE_24K * 0.585);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navbar */}
      <nav style={{ backgroundColor: '#000000', borderBottom: '1px solid #1f2937', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>Carat Money</div>
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{ backgroundColor: '#111827', color: '#ffffff', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #374151', cursor: 'pointer' }}
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
          </select>
        </div>

        {/* Rates Bar */}
        <div style={{ backgroundColor: '#0f0f0f', borderTop: '1px solid #1f2937', padding: '0.75rem', fontSize: '0.875rem', color: '#9ca3af', overflowX: 'auto' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '1.5rem' }}>
            <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>{t.today}</span>
            <div>24K: <span style={{ color: '#ffffff' }}>₹{rate24K}/gram</span></div>
            <div>22K: <span style={{ color: '#ffffff' }}>₹{rate22K}/gram</span></div>
            <div>18K: <span style={{ color: '#ffffff' }}>₹{rate18K}/gram</span></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.2 }}>{t.header}</h1>
          <p style={{ fontSize: '1.125rem', color: '#9ca3af', marginBottom: '2rem' }}>{t.subheader}</p>
        </div>
        
        <div style={{ backgroundColor: '#1f1f1f', borderRadius: '0.75rem', padding: '3rem', border: '1px solid #78350f' }}>
          <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '0.5rem' }}>₹100Cr+</div>
          <div style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>{t.goldPurchased}</div>
          <hr style={{ borderColor: '#374151', margin: '1.5rem 0' }} />
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '0.5rem' }}>5,000+</div>
          <div style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>{t.happyCustomers}</div>
          <hr style={{ borderColor: '#374151', margin: '1.5rem 0' }} />
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '0.5rem' }}>4.9★</div>
          <div style={{ color: '#9ca3af' }}>{t.avgRating}</div>
        </div>
      </section>

      {/* Calculator Section */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1rem', borderTop: '1px solid #1f2937' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>{t.calcTitle}</h2>
        <p style={{ color: '#9ca3af', marginBottom: '3rem' }}>{t.calcSubtitle}</p>

        <div style={{ backgroundColor: '#111827', borderRadius: '0.75rem', padding: '2rem', border: '1px solid #1f2937', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                {t.weight}
              </label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight in grams"
                style={{ width: '100%', backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '0.375rem', padding: '0.75rem', color: '#ffffff' }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                {t.goldPurity}
              </label>
              <select
                id="purity"
                value={purity}
                onChange={(e) => setPurity(e.target.value)}
                style={{ width: '100%', backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '0.375rem', padding: '0.75rem', color: '#ffffff', cursor: 'pointer' }}
              >
                <option value="24">{t.karat24}</option>
                <option value="22">{t.karat22}</option>
                <option value="18">{t.karat18}</option>
                <option value="14">{t.karat14}</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                {t.goldType}
              </label>
              <select
                id="goldType"
                value={goldType}
                onChange={(e) => setGoldType(e.target.value)}
                style={{ width: '100%', backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '0.375rem', padding: '0.75rem', color: '#ffffff', cursor: 'pointer' }}
              >
                <option value="jewellery">{t.jewellery}</option>
                <option value="coins">{t.coins}</option>
                <option value="scrap">{t.scrap}</option>
              </select>
            </div>
          </div>

          <div style={{ backgroundColor: '#1f2937', borderRadius: '0.5rem', padding: '2rem', border: '1px solid #78350f' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Gross Value</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}>₹{Math.round(parseFloat(weight || 0) * purities[purity] * RATE_24K)}</div>
            </div>

            <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #374151' }}>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Jewellery (3% deduction)</div>
              <div style={{ fontSize: '1.25rem', color: '#ef4444' }}>-₹{Math.round(parseFloat(weight || 0) * purities[purity] * RATE_24K * 0.03)}</div>
            </div>

            <div>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>{t.youReceive}</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>~₹{estimatedValue.toLocaleString()}</div>
            </div>

            <button style={{ width: '100%', backgroundColor: '#f59e0b', color: '#000000', fontWeight: 'bold', padding: '0.75rem', borderRadius: '0.375rem', border: 'none', marginTop: '1.5rem', cursor: 'pointer', fontSize: '1rem' }}>
              Get Exact Quote →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0f0f0f', borderTop: '1px solid #1f2937', marginTop: '5rem', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', color: '#6b7280' }}>
          <p>© 2025 Carat Money India. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CaratMoney;

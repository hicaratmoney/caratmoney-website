import React, { useState, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

const CaratMoney = () => {
  const [language, setLanguage] = useState('en');
  const [weight, setWeight] = useState('');
  const [purity, setPurity] = useState('22');
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [estimatedValue, setEstimatedValue] = useState(0);

  // Section refs for smooth scroll
  const estimateRef = useRef(null);
  const processRef = useRef(null);
  const whyUsRef = useRef(null);
  const reviewsRef = useRef(null);
  const sellGoldRef = useRef(null);

  const RATE_24K = 13500;

  const purities = {
    24: 0.999,
    22: 0.916,
    18: 0.750,
    14: 0.585
  };

  const formatIndianNumber = (num) => {
    if (!num) return '0';
    const str = num.toString();
    const lastThree = str.slice(-3);
    const otherNumbers = str.slice(0, -3);
    if (otherNumbers !== '') {
      return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
    }
    return lastThree;
  };

  const validateMobileNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);
    
    if (value && !validateMobileNumber(value)) {
      setMobileError('Please enter a valid 10 digit mobile number');
    } else {
      setMobileError('');
    }
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const translations = {
    en: {
      header: 'Every Carat Counts — Best Rates. Real Fast.',
      subheader: 'Sell your gold at India\'s best rates — weighed, tested, and paid in under 20 minutes.',
      goldPurchased: 'Gold Purchased',
      happyCustomers: 'Happy Customers',
      avgRating: 'Average Rating',
      weight: 'Weight (in grams)',
      goldPurity: 'Gold Purity (Carat)',
      mobileNumber: 'Mobile Number',
      carat24: '24 Carat — 99.9% Pure',
      carat22: '22 Carat — 91.6% Pure',
      carat18: '18 Carat — 75% Pure',
      carat14: '14 Carat — 58.5% Pure',
      estimatedValue: 'Estimated Value',
      youReceive: 'You Receive',
      today: "Today's Carat Money Rate",
      calcTitle: 'Gold Value Estimator',
      calcSubtitle: 'Check your gold value. Right now.',
      serviceFeeDeduction: 'Service Fee Deduction (3%)',
      getExactQuote: 'Get Exact Quote →',
      enterMobile: 'Enter 10 digit mobile number',
      getQuoteForYourGold: 'Get Quote For Your Gold',
      howItWorks: 'How It Works',
      callNowConsultation: '☎ Call Now — Free Consultation',
      calculateValueFirst: 'Calculate Value First',
      bookAppointmentWhatsApp: '💬 Book Appointment on WhatsApp',
      pricingHeading: 'How we price your gold',
      pricingSubtext: 'We use live MCX/IBJA gold rates updated daily. Our spread is the tightest in the industry — you always get maximum value for your gold.',
      noDedications: 'No deductions for making charges. No hidden fees. What you see is what you get — transferred directly to your bank account.',
      hallmark: 'HALLMARK',
      karat: 'CARAT',
      purityPercent: 'PURITY %',
      ratePerGram: 'RATE (PER GRAM)',
      bis999: 'BIS 999',
      bis916: 'BIS 916',
      bis750: 'BIS 750',
      bis585: 'BIS 585',
      processTitle: 'Simple. Fast. Transparent.',
      processSubtitle: 'Gold into account in minutes.',
      callText: 'Call',
      callDesc: 'Call us, or WhatsApp. We will book you an appointment',
      weighAndTest: 'Weigh & Test',
      weighDesc: 'Certified BIS weighing. XRF purity testing done in front of you 100% transparent process.',
      getYourQuote: 'Get Your Quote',
      quoteDesc: 'Instant price quote based on live market rates. Best rate guaranteed — no negotiation needed.',
      instantMoney: 'Instant Money',
      instantDesc: 'Instant bank transfer within minutes.',
      whyUs: 'Why Carat Money',
      bisCertified: 'BIS Certified Testing',
      bisCertifiedDesc: 'Every gram tested using XRF technology certified by Bureau of Indian Standards. No guesswork — just accurate, certified purity measurement.',
      liveMcx: 'Live MCX Rate Pricing',
      liveMcxDesc: 'Your gold is priced against live MCX and IBJA rates updated daily. You always get the market rate, not a discounted arbitrary number.',
      instantBankTransfer: 'Instant Bank Transfer',
      instantBankDesc: 'IMPS/RTGS transfer to your bank account in under 5 minutes of deal closure.',
      fullTransparency: 'Full Transparency',
      fullTransparencyDesc: 'Every step — weighing, purity testing, rate calculation — happens in front of you. We hand you a detailed receipt for every transaction.',
      safeSecurity: 'Safe & Secure',
      safeSecurityDesc: 'CCTV-monitored premises, insured vault, and trained staff. Your gold is in the safest hands from the moment you walk in.',
      noPressure: 'No Pressure. Ever.',
      noPressureDesc: 'Don\'t like the quote? Walk away. No questions asked. Your trust matters more than a transaction.',
      reviews: 'Reviews',
      overallRating: 'Overall Rating',
      transactionsDone: 'Transactions Done',
      avgProcessTime: 'Avg. Process Time',
      sellGoldHeading: 'Every Carat Counts — Best Rates. Real Fast.',
      readyToSell: 'Ready to sell your gold?'
    },
    hi: {
      header: 'हर कैरेट मायने रखता है — सर्वश्रेष्ठ दरें। सच में तेज़।',
      weight: 'वजन (ग्राम में)',
      youReceive: 'आप पाएंगे',
      mobileNumber: 'मोबाइल नंबर',
      enterMobile: '10 अंकों का मोबाइल नंबर दर्ज करें'
    }
  };

  const t = translations[language] || translations['en'];

  const calculateValue = () => {
    if (!weight || weight <= 0) {
      return 0;
    }
    const weightNum = parseFloat(weight);
    const purityPercent = purities[purity];
    const grossValue = weightNum * purityPercent * RATE_24K;
    const deduction = grossValue * 0.03;
    const finalValue = grossValue - deduction;
    return Math.round(finalValue);
  };

  React.useEffect(() => {
    setEstimatedValue(calculateValue());
  }, [weight, purity]);

  const rate24K = RATE_24K;
  const rate22K = Math.round(RATE_24K * 0.916);
  const rate18K = Math.round(RATE_24K * 0.750);
  const rate14K = Math.round(RATE_24K * 0.585);

  const isFormValid = weight && weight > 0 && mobileNumber && !mobileError;

  const grossValue = Math.round(parseFloat(weight || 0) * purities[purity] * RATE_24K);
  const deductionValue = Math.round(parseFloat(weight || 0) * purities[purity] * RATE_24K * 0.03);

  // Review data
  const reviews = [
    {
      text: "Excellent experience at Carat Money. The staff were very professional and patient. The quality of the service was outstanding.",
      author: "Priya Sharma",
      city: "Mumbai",
      profession: "Consultant",
      timeframe: "1 month ago",
      initials: "PS"
    },
    {
      text: "I compared rates with other buyers in my area. Carat Money offered ₹8,400 more per 10 grams than others. The process was completely transparent.",
      author: "Arjun Nair",
      city: "Bangalore",
      profession: "Business Owner",
      timeframe: "2 months ago",
      initials: "AN"
    },
    {
      text: "As a woman going alone to sell gold, I was nervous. The staff at Carat Money were professional and respectful. I felt completely safe.",
      author: "Anjali Patel",
      city: "Delhi",
      profession: "Teacher",
      timeframe: "3 weeks ago",
      initials: "AP"
    },
    {
      text: "The XRF testing machine was a game changer. I could see the exact purity percentage on screen. No trust issues whatsoever.",
      author: "Vikram Dutta",
      city: "Kolkata",
      profession: "IT Professional",
      timeframe: "2 weeks ago",
      initials: "VD"
    },
    {
      text: "Money was transferred to my bank account instantly. The entire process from walking in to getting money was under 12 minutes.",
      author: "Rahul Verma",
      city: "Pune",
      profession: "Engineer",
      timeframe: "6 months ago",
      initials: "RV"
    },
    {
      text: "Outstanding service. The team explained every step clearly. I got the best rate and no hidden charges. Highly recommended.",
      author: "Shruti Bansal",
      city: "Mumbai",
      profession: "Housewife",
      timeframe: "5 weeks ago",
      initials: "SB"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Sticky Navigation Bar */}
      <nav style={{ backgroundColor: '#000000', borderBottom: '1px solid #1f2937', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>Carat Money</div>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <button onClick={() => scrollToSection(estimateRef)} style={{ backgroundColor: 'transparent', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: '0.875rem' }}>Estimate</button>
            <button onClick={() => scrollToSection(processRef)} style={{ backgroundColor: 'transparent', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: '0.875rem' }}>Process</button>
            <button onClick={() => scrollToSection(whyUsRef)} style={{ backgroundColor: 'transparent', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: '0.875rem' }}>Why Us</button>
            <button onClick={() => scrollToSection(reviewsRef)} style={{ backgroundColor: 'transparent', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: '0.875rem' }}>Reviews</button>
            <button onClick={() => scrollToSection(sellGoldRef)} style={{ backgroundColor: '#fbbf24', border: 'none', color: '#000000', cursor: 'pointer', fontSize: '0.875rem', padding: '0.5rem 1rem', borderRadius: '0.375rem', fontWeight: '600' }}>Sell Gold</button>
            
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{ backgroundColor: '#111827', color: '#ffffff', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #374151', cursor: 'pointer' }}
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
          </div>
        </div>

        {/* Rates Bar */}
        <div style={{ backgroundColor: '#0f0f0f', borderTop: '1px solid #1f2937', padding: '0.75rem', fontSize: '0.875rem', color: '#9ca3af', overflowX: 'auto' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '1.5rem' }}>
            <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>{t.today}</span>
            <div>24 Carat: <span style={{ color: '#ffffff' }}>₹{formatIndianNumber(rate24K)}/gram</span></div>
            <div>22 Carat: <span style={{ color: '#ffffff' }}>₹{formatIndianNumber(rate22K)}/gram</span></div>
            <div>18 Carat: <span style={{ color: '#ffffff' }}>₹{formatIndianNumber(rate18K)}/gram</span></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '8rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.2 }}>
          {t.header.split(' — ')[0]} <br />
          <span style={{ color: '#fbbf24' }}>{t.header.split(' — ')[1]}</span>
        </h1>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
          <button 
            onClick={() => scrollToSection(estimateRef)}
            style={{ backgroundColor: '#fbbf24', color: '#000000', fontWeight: 'bold', padding: '0.75rem 1.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
            {t.getQuoteForYourGold}
          </button>
          <button 
            onClick={() => scrollToSection(processRef)}
            style={{ backgroundColor: 'transparent', color: '#ffffff', fontWeight: 'bold', padding: '0.75rem 1.5rem', borderRadius: '0.375rem', border: '1px solid #374151', cursor: 'pointer', fontSize: '1rem' }}>
            {t.howItWorks}
          </button>
        </div>
      </section>

      {/* Estimate Section */}
      <section ref={estimateRef} style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1rem', borderTop: '1px solid #1f2937' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>{t.calcTitle}</h2>
        <p style={{ color: '#9ca3af', marginBottom: '3rem' }}>{t.calcSubtitle}</p>

        <div style={{ backgroundColor: '#111827', borderRadius: '0.75rem', padding: '2rem', border: '1px solid #1f2937', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                {t.weight} <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={t.weight}
                style={{ width: '100%', backgroundColor: '#1f2937', border: weight ? '1px solid #10b981' : '1px solid #374151', borderRadius: '0.375rem', padding: '0.75rem', color: '#ffffff' }}
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
                <option value="24">{t.carat24}</option>
                <option value="22">{t.carat22}</option>
                <option value="18">{t.carat18}</option>
                <option value="14">{t.carat14}</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                {t.mobileNumber} <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                id="mobileNumber"
                value={mobileNumber}
                onChange={handleMobileChange}
                placeholder={t.enterMobile}
                maxLength="10"
                style={{ width: '100%', backgroundColor: '#1f2937', border: mobileError ? '2px solid #ef4444' : mobileNumber && !mobileError ? '1px solid #10b981' : '1px solid #374151', borderRadius: '0.375rem', padding: '0.75rem', color: '#ffffff' }}
              />
              {mobileError && (
                <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                  {mobileError}
                </div>
              )}
            </div>
          </div>

          <div style={{ backgroundColor: '#1f2937', borderRadius: '0.5rem', padding: '2rem', border: '1px solid #78350f' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Gross Value</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}>₹{formatIndianNumber(grossValue)}</div>
            </div>

            <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #374151' }}>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>{t.serviceFeeDeduction}</div>
              <div style={{ fontSize: '1.25rem', color: '#ef4444' }}>-₹{formatIndianNumber(deductionValue)}</div>
            </div>

            <div>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>{t.youReceive}</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>~₹{formatIndianNumber(estimatedValue)}</div>
            </div>

            <button 
              onClick={() => {
                if (isFormValid) {
                  alert(`Quote generated for ${weight}g of ${purity} Carat gold. Mobile: ${mobileNumber}\nYou will receive: ₹${formatIndianNumber(estimatedValue)}`);
                }
              }}
              disabled={!isFormValid}
              style={{ 
                width: '100%', 
                backgroundColor: isFormValid ? '#f59e0b' : '#6b7280',
                color: '#000000', 
                fontWeight: 'bold', 
                padding: '0.75rem', 
                borderRadius: '0.375rem', 
                border: 'none', 
                marginTop: '1.5rem', 
                cursor: isFormValid ? 'pointer' : 'not-allowed',
                fontSize: '1rem',
                opacity: isFormValid ? 1 : 0.6
              }}>
              {t.getExactQuote}
            </button>
          </div>
        </div>

        {/* Pricing Section */}
        <div style={{ backgroundColor: '#111827', borderRadius: '0.75rem', padding: '3rem', border: '1px solid #1f2937' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>{t.pricingHeading}</h3>
          <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>{t.pricingSubtext}</p>
          <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>{t.noDedications}</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #374151' }}>
                  <th style={{ color: '#fbbf24', textAlign: 'left', padding: '1rem', fontSize: '0.875rem' }}>{t.hallmark}</th>
                  <th style={{ color: '#fbbf24', textAlign: 'left', padding: '1rem', fontSize: '0.875rem' }}>{t.karat}</th>
                  <th style={{ color: '#fbbf24', textAlign: 'left', padding: '1rem', fontSize: '0.875rem' }}>{t.purityPercent}</th>
                  <th style={{ color: '#fbbf24', textAlign: 'left', padding: '1rem', fontSize: '0.875rem' }}>{t.ratePerGram}</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #374151' }}>
                  <td style={{ color: '#ffffff', padding: '1rem' }}>{t.bis999}</td>
                  <td style={{ color: '#ffffff', padding: '1rem' }}>24K</td>
                  <td style={{ color: '#ffffff', padding: '1rem' }}>99.9%</td>
                  <td style={{ color: '#fbbf24', fontWeight: 'bold', padding: '1rem' }}>₹{formatIndianNumber(rate24K)}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #374151' }}>
                  <td style={{ color: '#ffffff', padding: '1rem' }}>{t.bis916}</td>
                  <td style={{ color: '#ffffff', padding: '1rem' }}>22K</td>
                  <td style={{ color: '#ffffff', padding: '1rem' }}>91.6%</td>
                  <td style={{ color: '#fbbf24', fontWeight: 'bold', padding: '1rem' }}>₹{formatIndianNumber(rate22K)}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #374151' }}>
                  <td style={{ color: '#ffffff', padding: '1rem' }}>{t.bis750}</td>
                  <td style={{ color: '#ffffff', padding: '1rem' }}>18K</td>
                  <td style={{ color: '#ffffff', padding: '1rem' }}>75.0%</td>
                  <td style={{ color: '#fbbf24', fontWeight: 'bold', padding: '1rem' }}>₹{formatIndianNumber(rate18K)}</td>
                </tr>
                <tr>
                  <td style={{ color: '#ffffff', padding: '1rem' }}>{t.bis585}</td>
                  <td style={{ color: '#ffffff', padding: '1rem' }}>14K</td>
                  <td style={{ color: '#ffffff', padding: '1rem' }}>58.5%</td>
                  <td style={{ color: '#fbbf24', fontWeight: 'bold', padding: '1rem' }}>₹{formatIndianNumber(rate14K)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '1.5rem' }}>*Based on MCX rate minus ₹500 spread. Updated daily.</p>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1rem', borderTop: '1px solid #1f2937' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{t.processTitle}</h2>
        <p style={{ color: '#9ca3af', marginBottom: '3rem' }}>{t.processSubtitle}</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
            { num: '01', title: 'Call', desc: t.callDesc },
            { num: '02', title: 'Weigh & Test', desc: t.weighDesc },
            { num: '03', title: 'Get Your Quote', desc: t.quoteDesc },
            { num: '04', title: 'Instant Money', desc: t.instantDesc }
          ].map((step, idx) => (
            <div key={idx} style={{ backgroundColor: '#111827', borderRadius: '0.75rem', padding: '2rem', border: '1px solid #1f2937', textAlign: 'center' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '1rem' }}>{step.num}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{step.title}</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section ref={whyUsRef} style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1rem', borderTop: '1px solid #1f2937' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '3rem' }}>{t.whyUs}</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { title: t.bisCertified, desc: t.bisCertifiedDesc, icon: '🏅' },
            { title: t.liveMcx, desc: t.liveMcxDesc, icon: '📊' },
            { title: t.instantBankTransfer, desc: t.instantBankDesc, icon: '⚡' },
            { title: t.fullTransparency, desc: t.fullTransparencyDesc, icon: '👁️' },
            { title: t.safeSecurity, desc: t.safeSecurityDesc, icon: '🔒' },
            { title: t.noPressure, desc: t.noPressureDesc, icon: '💛' }
          ].map((card, idx) => (
            <div key={idx} style={{ backgroundColor: '#111827', borderRadius: '0.75rem', padding: '2rem', border: '1px solid #1f2937' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{card.icon}</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{card.title}</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section ref={reviewsRef} style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1rem', borderTop: '1px solid #1f2937' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '3rem' }}>{t.reviews}</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {reviews.map((review, idx) => (
            <div key={idx} style={{ backgroundColor: '#111827', borderRadius: '0.75rem', padding: '2rem', border: '1px solid #1f2937' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#fbbf24', fontSize: '0.875rem' }}>★</span>
                ))}
              </div>
              <p style={{ color: '#d1d5db', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{review.text}</p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ backgroundColor: '#fbbf24', color: '#000000', width: '2.5rem', height: '2.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.875rem' }}>{review.initials}</div>
                <div>
                  <div style={{ fontWeight: '600' }}>{review.author}</div>
                  <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{review.profession}, {review.city} • {review.timeframe}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#111827', borderRadius: '0.75rem', padding: '2rem', border: '1px solid #1f2937', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24' }}>4.9/5</div>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{t.overallRating}</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24' }}>5,000+</div>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{t.transactionsDone}</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24' }}>&lt;10-15 min</div>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{t.avgProcessTime}</div>
          </div>
        </div>
      </section>

      {/* Sell Gold Section */}
      <section ref={sellGoldRef} style={{ backgroundColor: '#1a1410', padding: '8rem 1rem', marginTop: '5rem', borderTop: '1px solid #78350f' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Every Carat Counts <br />
            <span style={{ color: '#fbbf24' }}>Best Rates. Real Fast.</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', marginBottom: '3rem' }}>{t.readyToSell}</p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="tel:+918618542353"
              style={{ backgroundColor: '#fbbf24', color: '#000000', fontWeight: 'bold', padding: '0.875rem 2rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontSize: '1rem', textDecoration: 'none' }}>
              {t.callNowConsultation}
            </a>
            <button 
              onClick={() => scrollToSection(estimateRef)}
              style={{ backgroundColor: 'transparent', color: '#ffffff', fontWeight: 'bold', padding: '0.875rem 2rem', borderRadius: '0.375rem', border: '1px solid #fbbf24', cursor: 'pointer', fontSize: '1rem' }}>
              {t.calculateValueFirst}
            </button>
            <a 
              href="https://wa.me/918618542353?text=Hi%20Carat%20Money!%20I%20want%20to%20book%20an%20appointment%20to%20sell%20my%20gold."
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#25D366', color: '#ffffff', fontWeight: 'bold', padding: '0.875rem 2rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontSize: '1rem', textDecoration: 'none' }}>
              {t.bookAppointmentWhatsApp}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0f0f0f', borderTop: '1px solid #1f2937', marginTop: '0', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', color: '#6b7280' }}>
          <p>© 2026 Carat Money India. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/918618542353?text=Hi%20Carat%20Money!%20I%20want%20to%20book%20an%20appointment%20to%20sell%20my%20gold."
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          position: 'fixed', 
          bottom: '2rem', 
          right: '2rem', 
          backgroundColor: '#25D366', 
          color: '#ffffff', 
          width: '3.5rem', 
          height: '3.5rem', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease',
          zIndex: 40,
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        }}
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default CaratMoney;

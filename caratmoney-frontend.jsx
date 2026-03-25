import React, { useState } from 'react';

const CaratMoney = () => {
  const [language, setLanguage] = useState('en');
  const [weight, setWeight] = useState('');
  const [purity, setPurity] = useState('22');
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [estimatedValue, setEstimatedValue] = useState(0);

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

  const translations = {
    en: {
      header: 'From Ornament To Money. In Minutes!',
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
      enterMobile: 'Enter 10 digit mobile number'
    },
    bn: {
      header: 'গহনা থেকে অর্থ। মিনিটে!',
      subheader: 'ভারতের সেরা হারে আপনার সোনা বিক্রয় করুন — ওজন করা, পরীক্ষা করা এবং ২০ মিনিটের মধ্যে অর্থ প্রদান করা।',
      goldPurchased: 'সোনা ক্রয় করা',
      happyCustomers: 'সন্তুষ্ট গ্রাহক',
      avgRating: 'গড় রেটিং',
      weight: 'ওজন (গ্রামে)',
      goldPurity: 'সোনার বিশুদ্ধতা (ক্যারেট)',
      mobileNumber: 'মোবাইল নম্বর',
      carat24: '24 ক্যারেট — 99.9% খাঁটি',
      carat22: '22 ক্যারেট — 91.6% খাঁটি',
      carat18: '18 ক্যারেট — 75% খাঁটি',
      carat14: '14 ক্যারেট — 58.5% খাঁটি',
      estimatedValue: 'অনুমানিত মূল্য',
      youReceive: 'আপনি পাবেন',
      today: 'আজকের ক্যারেট মানি রেট',
      calcTitle: 'সোনার মূল্য আনুমানিক',
      calcSubtitle: 'এখনই আপনার সোনার মূল্য জানুন।',
      serviceFeeDeduction: 'সেবা ফি ছাড় (3%)',
      getExactQuote: 'সঠিক উদ্ধৃতি পান →',
      enterMobile: '10 অঙ্কের মোবাইল নম্বর দিন'
    },
    hi: {
      header: 'गहने से पैसा। मिनटों में!',
      subheader: 'भारत की सर्वश्रेष्ठ दरों पर अपना सोना बेचें — तौला जाता है, परीक्षण किया जाता है, और 20 मिनट के अंदर पैसा दिया जाता है।',
      goldPurchased: 'सोना खरीदा गया',
      happyCustomers: 'खुश ग्राहक',
      avgRating: 'औसत रेटिंग',
      weight: 'वजन (ग्राम में)',
      goldPurity: 'सोने की शुद्धता (कैरेट)',
      mobileNumber: 'मोबाइल नंबर',
      carat24: '24 कैरेट — 99.9% शुद्ध',
      carat22: '22 कैरेट — 91.6% शुद्ध',
      carat18: '18 कैरेट — 75% शुद्ध',
      carat14: '14 कैरेट — 58.5% शुद्ध',
      estimatedValue: 'अनुमानित मूल्य',
      youReceive: 'आप पाएंगे',
      today: 'आज का कैरेट मनी दर',
      calcTitle: 'सोने की कीमत अनुमानक',
      calcSubtitle: 'अभी अपने सोने की कीमत जानें।',
      serviceFeeDeduction: 'सेवा शुल्क कटौती (3%)',
      getExactQuote: 'सटीक उद्धरण प्राप्त करें →',
      enterMobile: '10 अंकों का मोबाइल नंबर दर्ज करें'
    },
    kn: {
      header: 'ಆಭರಣದಿಂದ ಹಣ. ನಿಮಿಷಗಳಲ್ಲಿ!',
      subheader: 'ಭಾರತದ ಅತ್ಯುತ್ತಮ ದರದಲ್ಲಿ ನಿಮ್ಮ ಚಿನ್ನ ಮಾರಿ — ತೂಕ ಹಾಕಲಾಯಿತು, ಪರೀಕ್ಷೆ ಮಾಡಿದೆ ಮತ್ತು 20 ನಿಮಿಷದೊಳಗೆ ಹಣ ನೀಡಲಾಯಿತು।',
      goldPurchased: 'ಚಿನ್ನ ಖರೀದಿ',
      happyCustomers: 'ಸಂತುಷ್ಟ ಗ್ರಾಹಕರು',
      avgRating: 'ಸರಾಸರಿ ರೇಟಿಂಗ್',
      weight: 'ತೂಕ (ಗ್ರಾಮ್‌ನಲ್ಲಿ)',
      goldPurity: 'ಚಿನ್ನದ ಶುದ್ಧತೆ (ಕ್ಯಾರೆಟ್)',
      mobileNumber: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
      carat24: '24 ಕ್ಯಾರೆಟ್ — 99.9% ಶುದ್ಧ',
      carat22: '22 ಕ್ಯಾರೆಟ್ — 91.6% ಶುದ್ಧ',
      carat18: '18 ಕ್ಯಾರೆಟ್ — 75% ಶುದ್ಧ',
      carat14: '14 ಕ್ಯಾರೆಟ್ — 58.5% ಶುದ್ಧ',
      estimatedValue: 'ಅನುಮಾನಿತ ಮೌಲ್ಯ',
      youReceive: 'ನೀವು ಪಡೆಯುವಿರಿ',
      today: 'ಇಂದಿನ ಕ್ಯಾರೆಟ್ ಮನಿ ದರ',
      calcTitle: 'ಚಿನ್ನದ ಮೂಲ್ಯ ಅನುಮಾನಕ',
      calcSubtitle: 'ಈಗಲೇ ನಿಮ್ಮ ಚಿನ್ನದ ಮೌಲ್ಯ ಪರಿಶೀಲಿಸಿ।',
      serviceFeeDeduction: 'ಸೇವಾ ಶುಲ್ಕ ಕಾಟ (3%)',
      getExactQuote: 'ನಿಖರ ಉದ್ಧರಣ ಪಡೆಯಿರಿ →',
      enterMobile: '10 ಅಂಕಿ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ'
    },
    ml: {
      header: 'നിലവിൽ നിന്ന് പണത്തിലേക്ക്. മിനിറ്റുകളിൽ!',
      subheader: 'ഇന്ത്യയുടെ മികച്ച നിരക്കിൽ നിങ്ങളുടെ സ്വർണ്ണം വിറ്റുകൊടുക്കുക — തൂക്കം, പരിശോധിക്കപ്പെടുന്നു, 20 മിനിറ്റിനുള്ളിൽ പണം നൽകപ്പെടുന്നു.',
      goldPurchased: 'സ്വർണ്ണം വാങ്ങിയത്',
      happyCustomers: 'സന്തുഷ്ട ഗ്രാഹകർ',
      avgRating: 'ശരാശരി റേറ്റിംഗ്',
      weight: 'ഭാരം (ഗ്രാമിൽ)',
      goldPurity: 'സ്വർണ്ണ ശുദ്ധത (കാരറ്റ്)',
      mobileNumber: 'മൊബൈൽ നമ്പർ',
      carat24: '24 കാരറ്റ് — 99.9% ശുദ്ധ',
      carat22: '22 കാരറ്റ് — 91.6% ശുദ്ധ',
      carat18: '18 കാരറ്റ് — 75% ശുദ്ധ',
      carat14: '14 കാരറ്റ് — 58.5% ശുദ്ധ',
      estimatedValue: 'കണക്കാക്കിയ മൂല്യം',
      youReceive: 'നിങ്ങൾ പലിശ',
      today: 'ഇന്നത്തെ കാരറ്റ് മണി നിരക്ക്',
      calcTitle: 'സ്വർണ്ണ മൂല്യ കണക്കാണ്',
      calcSubtitle: 'ഇപ്പോൾ നിങ്ങളുടെ സ്വർണ്ണ മൂല്യം പരിശോധിക്കുക।',
      serviceFeeDeduction: 'സേവന ഫീസ് കുറയ്ക്കൽ (3%)',
      getExactQuote: 'കൃത്യമായ ഉദ്ധരണം ലഭിക്കുക →',
      enterMobile: '10 ഡിജിറ്റ് മൊബൈൽ നമ്പർ നൽകുക'
    },
    mr: {
      header: 'दागिन्यांपासून पैसे. मिनिटांत!',
      subheader: 'भारतातील सर्वोत्तम दरांवर तुमचे सोने विक्रय करा — वजन केले, चाचले आणि 20 मिनिटांत पैसे दिले.',
      goldPurchased: 'सोने खरेदी',
      happyCustomers: 'खुश ग्राहक',
      avgRating: 'सरासरी रेटिंग',
      weight: 'वजन (ग्रामांत)',
      goldPurity: 'सोन्याची शुद्धता (कॅरेट)',
      mobileNumber: 'मोबाइल नंबर',
      carat24: '24 कॅरेट — 99.9% शुद्ध',
      carat22: '22 कॅरेट — 91.6% शुद्ध',
      carat18: '18 कॅरेट — 75% शुद्ध',
      carat14: '14 कॅरेट — 58.5% शुद्ध',
      estimatedValue: 'अनुमानित मूल्य',
      youReceive: 'तुम्हाला मिळेल',
      today: 'आजचा कॅरेट मनी दर',
      calcTitle: 'सोन्याचे मूल्य अनुमानक',
      calcSubtitle: 'आत्ताच तुमच्या सोन्याचे मूल्य तपासा।',
      serviceFeeDeduction: 'सेवा शुल्क कपात (3%)',
      getExactQuote: 'अचूक उद्धरण मिळवा →',
      enterMobile: '10 अंकांचा मोबाइल नंबर टाका'
    },
    ta: {
      header: 'நகையிலிருந்து பணம். நிமிषங்களில்!',
      subheader: 'இந்தியாவின் சிறந்த விலையில் உங்கள் தங்கத்தை விற்கவும் — எடை, சோதனை மற்றும் 20 நிமிடங்களுக்குள் பணம் வழங்கப்படுகிறது.',
      goldPurchased: 'தங்கம் ক্রয়',
      happyCustomers: 'மகிழ்ந்த வாடிக்கையாளர்கள்',
      avgRating: 'சராசரி রेটிங்',
      weight: 'எடை (கிராமில்)',
      goldPurity: 'தங்கத்தின் தூய்மை (கேரட்)',
      mobileNumber: 'மொபைல் எண்',
      carat24: '24 கேரட் — 99.9% தூய',
      carat22: '22 கேரட் — 91.6% தூய',
      carat18: '18 கேரட் — 75% தூய',
      carat14: '14 கேரட் — 58.5% தூய',
      estimatedValue: 'மதிப்பிடப்பட்ட மூல்ய',
      youReceive: 'நீங்கள் பெறுவீர்கள்',
      today: 'இன்றைய கேரட் மணி விகிதம்',
      calcTitle: 'தங்கத்தின் மூல்य கணக்கீட்டி',
      calcSubtitle: 'இப்போதே உங்கள் தங்கத்தின் மூல்யத்தை சரிபார்க்கவும்.',
      serviceFeeDeduction: 'சேவை கட்டணம் குறைப்பு (3%)',
      getExactQuote: 'சரியான மேற்கோள் பெறவும் →',
      enterMobile: '10 இலக்க மொபைல் எண்ணை உள்ளிடவும்'
    },
    te: {
      header: 'ఆభరణ నుండి డబ్బు. నిమిషాలలో!',
      subheader: 'భారతదేశపు ఉత్తమ రేటుకు మీ బంగారాన్ని విక్రయించండి — బరువు, పరీక్ష చేయబడింది, 20 నిమిషాలలో డబ్బు ఇవ్వబడుతుంది.',
      goldPurchased: 'బంగారం కొనుగోలు',
      happyCustomers: 'సంతుష్ట గ్రాహకులు',
      avgRating: 'సగటు రేటింగ్',
      weight: 'బరువు (గ్రాములలో)',
      goldPurity: 'బంగారం స్వచ్ఛత (క్యారెట్)',
      mobileNumber: 'మోబైల్ నంబర్',
      carat24: '24 క్యారెట్ — 99.9% శుద్ధ',
      carat22: '22 క్యారెట్ — 91.6% శుద్ధ',
      carat18: '18 క్యారెట్ — 75% శుద్ధ',
      carat14: '14 క్యారెట్ — 58.5% శుద్ధ',
      estimatedValue: 'అంచనా విలువ',
      youReceive: 'మీకు వస్తుంది',
      today: 'ఈ రోజు క్యారెట్ మనీ రేట్',
      calcTitle: 'బంగారం విలువ కాలిక్యులేటర్',
      calcSubtitle: 'ఇప్పుడే మీ బంగారం విలువను తనిఖీ చేయండి.',
      serviceFeeDeduction: 'సేవా ఫీ తగ్గింపు (3%)',
      getExactQuote: 'ఖచ్చితమైన కోట్ పొందండి →',
      enterMobile: '10 అంకెల మోబైల్ నంబర్ నమోదు చేయండి'
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
            <option value="bn">বাংলা</option>
            <option value="hi">हिंदी</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="ml">മലയാളം</option>
            <option value="mr">मराठी</option>
            <option value="ta">தமிழ்</option>
            <option value="te">తెలుగు</option>
          </select>
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

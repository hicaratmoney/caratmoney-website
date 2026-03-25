import React, { useState } from 'react';
import { ChevronDown, Phone, MessageCircle, MapPin, Check } from 'lucide-react';

const CaratMoney = () => {
  const [language, setLanguage] = useState('en');
  const [weight, setWeight] = useState('');
  const [purity, setPurity] = useState('22');
  const [goldType, setGoldType] = useState('jewellery');
  const [estimatedValue, setEstimatedValue] = useState(0);

  // Single rate used for all calculations
  const RATE_24K = 13500; // Base 24K rate per gram

  // Purity factors (percentage as decimal)
  const purities = {
    24: 0.999,    // 99.9% pure
    22: 0.916,    // 91.6% pure
    18: 0.750,    // 75% pure
    14: 0.585     // 58.5% pure
  };

  // Translations
  const translations = {
    en: {
      navEstimate: 'Estimate',
      navProcess: 'Process',
      navAbout: 'About',
      navWhy: 'Why Us',
      navReviews: 'Reviews',
      navSell: 'Sell Gold',
      header: 'From Ornament To Money. In Minutes!',
      subheader: 'Sell your gold at India\'s best rates — weighed, tested, and paid in under 20 minutes. Walk in with gold. Walk out with money.',
      calculateBtn: 'Calculate Your Gold Value →',
      howItWorks: 'How It Works',
      goldPurchased: 'Gold Purchased',
      happyCustomers: 'Happy Customers',
      avgRating: 'Average Rating',
      rbiCompliant: '✓ RBI Compliant',
      bisWeighing: '✓ BIS Certified Weighing',
      instantTransfer: '✓ Instant Bank Transfer',
      govApproved: '✓ Government Approved',
      noHiddenCharges: '✓ No Hidden Charges',
      incorporatedIndia: '✓ Incorporated in India',
      calcTitle: 'Gold Value Estimator',
      calcSubtitle: 'Check your gold value. Right now.',
      yourName: 'Your Name',
      phoneNumber: 'Phone Number',
      goldPurity: 'Gold Purity (Karat)',
      karat24: '24 Karat — 99.9% Pure',
      karat22: '22 Karat — 91.6% Pure',
      karat18: '18 Karat — 75% Pure',
      karat14: '14 Karat — 58.5% Pure',
      weight: 'Weight (in grams)',
      goldType: 'Gold Type',
      jewellery: 'Jewellery / Ornaments',
      coins: 'Gold Coins / Bars',
      scrap: 'Scrap / Broken Pieces',
      estimatedValue: 'Estimated Value',
      basedOnMarket: '*Based on today\'s market rate. Final value confirmed on physical inspection.',
      getExactQuote: 'Get Exact Quote →',
      howWePriceTitle: 'How we price your gold',
      howWePriceDesc: 'We use live MCX/IBJA gold rates updated daily. Our spread is the tightest in the industry — you always get maximum value for your gold. No deductions for making charges. No hidden fees. What you see is what you get — transferred directly to your bank account.',
      hallmark: 'Hallmark',
      karat: 'Karat',
      purity: 'Purity %',
      rate: 'Rate (per gram)',
      processTitle: 'Four simple steps to get your money.',
      callWalkIn: 'Call or Walk In',
      callWalkInDesc: 'Call us, WhatsApp, or simply walk into your nearest Carat Money outlet. No appointment needed.',
      weighTest: 'Weigh & Test',
      weighTestDesc: 'Certified BIS weighing. XRF purity testing done in front of you. 100% transparent process.',
      getQuote: 'Get Your Quote',
      getQuoteDesc: 'Instant price quote based on live market rates. Best rate guaranteed — no negotiation needed.',
      instantMoney: 'Instant Money',
      instantMoneyDesc: 'Money in hand or instant bank transfer within minutes. Your choice, your convenience.',
      ourStoryTitle: 'Built for Bharat. Built on Trust.',
      ourStoryDesc: 'Carat Money was born from a simple observation: Indian families hold over ₹130 lakh crore worth of gold — yet most have no easy, trustworthy way to unlock its value when they need it most. We set out to change that. No pawn shops. No shady dealers. No undervalued offers. Just transparent pricing, instant money, and complete dignity for every customer who walks through our door.',
      bisTestedTitle: 'BIS Certified Testing',
      bisTestedDesc: 'Every gram tested using XRF technology certified by Bureau of Indian Standards. No guesswork — just accurate, certified purity measurement.',
      mcxRateTitle: 'Live MCX Rate Pricing',
      mcxRateDesc: 'Your gold is priced against live MCX and IBJA rates updated daily. You always get the market rate, not a discounted arbitrary number.',
      instantTransferTitle: 'Instant Bank Transfer',
      instantTransferDesc: 'IMPS transfer to your bank account in under 5 minutes of deal closure. Or take money. No delays, no excuses.',
      transparencyTitle: 'Full Transparency',
      transparencyDesc: 'Every step — weighing, purity testing, rate calculation — happens in front of you. We hand you a detailed receipt for every transaction.',
      safeSecureTitle: 'Safe & Secure',
      safeSecureDesc: 'CCTV-monitored premises, insured vault, and trained staff. Your gold is in the safest hands from the moment you walk in.',
      noPressureTitle: 'No Pressure. Ever.',
      noPressureDesc: 'Don\'t like the quote? Walk away. No questions asked. Your trust matters more than a transaction.',
      callNow: '📞 Call Now — Free Consultation',
      calculateValue: 'Calculate Value First',
      bookAppointment: '📅 Book Appointment on WhatsApp',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      sellJewellery: 'Sell Old Jewellery',
      sellCoins: 'Sell Gold Coins',
      sellBroken: 'Sell Broken Gold',
      testPurity: 'Gold Purity Test',
      bulkPurchase: 'Bulk Gold Purchase',
      allRightsReserved: '© 2025 Carat Money India. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms & Conditions',
      jewelleeryDeduction: 'Jewellery (3% estimate process deduction)',
      youReceive: 'You Receive',
      today: 'Today\'s Carat Money Rate',
      mcxSpread: 'Base 24K Rate: ₹13,500/gram'
    },
    bn: {
      navEstimate: 'অনুমান',
      navProcess: 'প্রক্রিয়া',
      navAbout: 'আমাদের সম্পর্কে',
      navWhy: 'কেন আমরা',
      navReviews: 'পর্যালোচনা',
      navSell: 'সোনা বিক্রি করুন',
      header: 'গয়না থেকে অর্থ। মিনিটে!',
      subheader: 'ভারতের সেরা হারে আপনার সোনা বিক্রি করুন — ওজন করা, পরীক্ষা করা এবং ২০ মিনিটের মধ্যে অর্থ প্রদান করা।',
      weight: 'ওজন (গ্রামে)',
      youReceive: 'আপনি পাবেন'
    },
    hi: {
      navEstimate: 'अनुमान',
      header: 'गहना से पैसा। मिनटों में!',
      weight: 'वजन (ग्राम में)',
      youReceive: 'आप पाएंगे'
    },
    kn: {
      weight: 'ತೂಕ (ಗ್ರಾಮಗಳಲ್ಲಿ)',
      youReceive: 'ನೀವು ಪಡೆಯುವಿರಿ'
    },
    ml: {
      weight: 'ഭാരം (ഗ്രാമിൽ)',
      youReceive: 'നിങ്ങൾ പലിശ'
    },
    mr: {
      weight: 'वजन (ग्रामांत)',
      youReceive: 'तुम्हाला मिळेल'
    },
    ta: {
      weight: 'எடை (கிராமில்)',
      youReceive: 'நீங்கள் பெறுவீர்கள்'
    },
    te: {
      weight: 'బరువు (గ్రాములలో)',
      youReceive: 'మీకు వస్తుంది'
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

    // Formula: Weight × Purity% × 24K Rate
    const grossValue = weightNum * purityPercent * RATE_24K;

    // Jewellery deduction (3%)
    const jewelleryDeduction = grossValue * 0.03;

    // Final value = Gross value - Deduction
    const finalValue = grossValue - jewelleryDeduction;

    setEstimatedValue(Math.round(finalValue));
  };

  React.useEffect(() => {
    calculateValue();
  }, [weight, purity, goldType]);

  const rate24K = RATE_24K;
  const rate22K = Math.round(RATE_24K * 0.916);
  const rate18K = Math.round(RATE_24K * 0.750);
  const rate14K = Math.round(RATE_24K * 0.585);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-400">Carat Money</div>
          
          {/* Language Selector */}
          <div className="flex gap-2 items-center">
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-900 text-white px-3 py-2 rounded border border-gray-700 text-sm cursor-pointer hover:border-amber-400 transition"
            >
              <option value="en">English</option>
              <option value="bn">Bengali</option>
              <option value="hi">हिंदी</option>
              <option value="kn">ಕನ್ನಡ</option>
              <option value="ml">മലയാളം</option>
              <option value="mr">मराठी</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
            </select>
          </div>
        </div>

        {/* MCX Rates Bar */}
        <div className="bg-gray-950 border-t border-gray-800 px-4 py-3">
          <div className="max-w-7xl mx-auto text-sm text-gray-400 flex gap-6 overflow-x-auto">
            <span className="text-amber-400 font-semibold">{t.today}</span>
            <div className="flex gap-1">
              <span className="text-gray-500">24K (999)</span>
              <span className="text-white">₹{rate24K}/gram</span>
            </div>
            <div className="flex gap-1">
              <span className="text-gray-500">22K (916)</span>
              <span className="text-white">₹{rate22K}/gram</span>
            </div>
            <div className="flex gap-1">
              <span className="text-gray-500">18K (750)</span>
              <span className="text-white">₹{rate18K}/gram</span>
            </div>
            <span className="text-gray-600 ml-auto whitespace-nowrap">{t.mcxSpread}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {t.header}
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              {t.subheader}
            </p>
            <div className="flex gap-4 flex-col sm:flex-row">
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded transition transform hover:scale-105">
                {t.calculateBtn}
              </button>
              <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-bold px-8 py-4 rounded transition">
                {t.howItWorks}
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-900 to-gray-900 rounded-xl p-12 border border-amber-900">
            <div className="text-6xl font-bold text-amber-400 mb-2">₹100Cr+</div>
            <div className="text-gray-400">{t.goldPurchased}</div>
            <div className="h-px bg-gray-700 my-6"></div>
            <div className="text-5xl font-bold text-amber-400 mb-2">5,000+</div>
            <div className="text-gray-400">{t.happyCustomers}</div>
            <div className="h-px bg-gray-700 my-6"></div>
            <div className="text-5xl font-bold text-amber-400 mb-2">4.9★</div>
            <div className="text-gray-400">{t.avgRating}</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 pt-16 border-t border-gray-800">
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-5 h-5 text-amber-500" />
            <span className="text-gray-400">{t.rbiCompliant}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-5 h-5 text-amber-500" />
            <span className="text-gray-400">{t.bisWeighing}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-5 h-5 text-amber-500" />
            <span className="text-gray-400">{t.instantTransfer}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-5 h-5 text-amber-500" />
            <span className="text-gray-400">{t.govApproved}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-5 h-5 text-amber-500" />
            <span className="text-gray-400">{t.noHiddenCharges}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-5 h-5 text-amber-500" />
            <span className="text-gray-400">{t.incorporatedIndia}</span>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-4">{t.calcTitle}</h2>
        <p className="text-gray-400 mb-12">{t.calcSubtitle}</p>

        <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">{t.weight}</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter weight in grams"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">{t.goldPurity}</label>
                <select
                  value={purity}
                  onChange={(e) => setPurity(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:border-amber-500 focus:outline-none cursor-pointer"
                >
                  <option value="24">{t.karat24}</option>
                  <option value="22">{t.karat22}</option>
                  <option value="18">{t.karat18}</option>
                  <option value="14">{t.karat14}</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">{t.goldType}</label>
                <select
                  value={goldType}
                  onChange={(e) => setGoldType(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:border-amber-500 focus:outline-none cursor-pointer"
                >
                  <option value="jewellery">{t.jewellery}</option>
                  <option value="coins">{t.coins}</option>
                  <option value="scrap">{t.scrap}</option>
                </select>
              </div>
            </div>

            <div className="bg-gray-800 rounded p-8 border border-amber-900">
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">Gross Value</div>
                <div className="text-4xl font-bold text-amber-400">₹{Math.round(parseFloat(weight || 0) * purities[purity] * RATE_24K)}</div>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-700">
                <div className="text-sm text-gray-400 mb-2">{t.jewelleeryDeduction}</div>
                <div className="text-2xl text-red-400">-₹{Math.round(parseFloat(weight || 0) * purities[purity] * RATE_24K * 0.03)}</div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-2">{t.youReceive}</div>
                <div className="text-4xl font-bold text-green-400">~₹{estimatedValue.toLocaleString()}</div>
              </div>

              <p className="text-xs text-gray-500 mt-6">{t.basedOnMarket}</p>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded mt-6 transition">
                {t.getExactQuote}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-amber-400 mb-4">{t.quickLinks}</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li><a href="#calculator" className="hover:text-amber-400 transition">{t.navEstimate}</a></li>
                <li><a href="#process" className="hover:text-amber-400 transition">{t.navProcess}</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition">{t.navAbout}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-amber-400 mb-4">{t.services}</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition">{t.sellJewellery}</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">{t.sellCoins}</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">{t.sellBroken}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-amber-400 mb-4">{t.contact}</h3>
              <div className="text-gray-400 text-sm space-y-2">
                <a href="tel:+919987599943" className="flex items-center gap-2 hover:text-amber-400 transition">
                  <Phone className="w-4 h-4" /> +91 99875 99943
                </a>
                <a href="https://wa.me/919987599943" className="flex items-center gap-2 hover:text-amber-400 transition">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-amber-400 mb-4">Carat Money</h3>
              <p className="text-gray-400 text-sm">{t.allRightsReserved}</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>{t.allRightsReserved}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaratMoney;

import React, { useState, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

const CaratMoney = () => {
  const [language, setLanguage] = useState('en');
  const [weight, setWeight] = useState('');
  const [purity, setPurity] = useState('22');
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [estimatedValue, setEstimatedValue] = useState(0);

  const estimateRef = useRef(null);
  const processRef = useRef(null);
  const whyUsRef = useRef(null);
  const reviewsRef = useRef(null);
  const sellGoldRef = useRef(null);

  const RATE_24K = 13500;

  const purities = { 24: 0.999, 22: 0.916, 18: 0.750, 14: 0.585 };

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

  const validateMobileNumber = (number) => /^[0-9]{10}$/.test(number);

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
      readyToSell: 'Ready to sell your gold?',
      estimate: 'Estimate',
      process: 'Process',
      whyUsNav: 'Why Us',
      sellGold: 'Sell Gold'
    },
    bn: {
      header: 'প্রতিটি ক্যারেট গুরুত্বপূর্ণ — সেরা হার। সত্যিই দ্রুত।',
      goldPurchased: 'সোনা ক্রয়',
      happyCustomers: 'সন্তুষ্ট গ্রাহক',
      avgRating: 'গড় রেটিং',
      weight: 'ওজন (গ্রামে)',
      goldPurity: 'সোনার বিশুদ্ধতা (ক্যারেট)',
      mobileNumber: 'মোবাইল নম্বর',
      carat24: '24 ক্যারেট — 99.9% খাঁটি',
      carat22: '22 ক্যারেট — 91.6% খাঁটি',
      carat18: '18 ক্যারেট — 75% খাঁটি',
      carat14: '14 ক্যারেট — 58.5% খাঁটি',
      youReceive: 'আপনি পাবেন',
      today: 'আজকের ক্যারেট মানি রেট',
      calcTitle: 'সোনার মূল্য আনুমানিক',
      calcSubtitle: 'এখনই আপনার সোনার মূল্য জানুন।',
      serviceFeeDeduction: 'সেবা ফি ছাড় (3%)',
      getExactQuote: 'সঠিক উদ্ধৃতি পান →',
      enterMobile: '10 অঙ্কের মোবাইল নম্বর দিন',
      getQuoteForYourGold: 'আপনার সোনার জন্য উদ্ধৃতি পান',
      howItWorks: 'এটি কীভাবে কাজ করে',
      callNowConsultation: '☎ এখনই কল করুন — বিনামূল্যে পরামর্শ',
      calculateValueFirst: 'প্রথমে মূল্য গণনা করুন',
      bookAppointmentWhatsApp: '💬 হোয়াটসঅ্যাপে অ্যাপয়েন্টমেন্ট বুক করুন',
      pricingHeading: 'আমরা আপনার সোনার মূল্য কীভাবে নির্ধারণ করি',
      pricingSubtext: 'আমরা প্রতিদিন আপডেট করা লাইভ MCX/IBJA সোনার হার ব্যবহার করি। আমাদের স্প্রেড শিল্পের সবচেয়ে কঠোর — আপনি সর্বদা সর্বাধিক মূল্য পান।',
      noDedications: 'তৈরি করার চার্জের জন্য কোনও কাটা নেই। লুকানো কোনো ফি নেই। আপনি যা দেখেন তাই পান — সরাসরি আপনার ব্যাংক অ্যাকাউন্টে স্থানান্তরিত।',
      hallmark: 'হলমার্ক',
      karat: 'ক্যারেট',
      purityPercent: 'বিশুদ্ধতা %',
      ratePerGram: 'হার (প্রতি গ্রাম)',
      bis999: 'BIS 999',
      bis916: 'BIS 916',
      bis750: 'BIS 750',
      bis585: 'BIS 585',
      processTitle: 'সহজ। দ্রুত। স্বচ্ছ।',
      processSubtitle: 'সোনা অ্যাকাউন্টে মিনিটের মধ্যে।',
      callText: 'কল করুন',
      callDesc: 'আমাদের কল করুন বা হোয়াটসঅ্যাপ করুন। আমরা আপনার একটি অ্যাপয়েন্টমেন্ট বুক করব',
      weighAndTest: 'ওজন এবং পরীক্ষা',
      weighDesc: 'সার্টিফাইড BIS ওজন নির্ধারণ। আপনার সামনে XRF বিশুদ্ধতা পরীক্ষা 100% স্বচ্ছ প্রক্রিয়া।',
      getYourQuote: 'আপনার উদ্ধৃতি পান',
      quoteDesc: 'লাইভ বাজার হারের উপর ভিত্তি করে তাৎক্ষণিক মূল্য উদ্ধৃতি। সেরা হার গ্যারান্টিযুক্ত — কোন আলোচনার প্রয়োজন নেই।',
      instantMoney: 'তাৎক্ষণিক অর্থ',
      instantDesc: 'মিনিটের মধ্যে তাৎক্ষণিক ব্যাংক স্থানান্তর।',
      whyUs: 'কেন ক্যারেট মানি',
      bisCertified: 'BIS সার্টিফাইড পরীক্ষা',
      bisCertifiedDesc: 'ভারতীয় মান ব্যুরো দ্বারা প্রত্যয়িত XRF প্রযুক্তি ব্যবহার করে প্রতিটি গ্রাম পরীক্ষা করা হয়। কোনো অনুমান নেই — শুধুমাত্র সঠিক, সার্টিফাইড বিশুদ্ধতা পরিমাপ।',
      liveMcx: 'লাইভ MCX হার মূল্য নির্ধারণ',
      liveMcxDesc: 'আপনার সোনার মূল্য লাইভ MCX এবং IBJA হারের বিপরীতে প্রতিদিন আপডেট করা হয়। আপনি সর্বদা বাজার হার পান, একটি ছাড়ের মূল্য সংখ্যা নয়।',
      instantBankTransfer: 'তাৎক্ষণিক ব্যাংক স্থানান্তর',
      instantBankDesc: 'ডিল বন্ধ হওয়ার 5 মিনিটের মধ্যে আপনার ব্যাংক অ্যাকাউন্টে IMPS/RTGS স্থানান্তর।',
      fullTransparency: 'সম্পূর্ণ স্বচ্ছতা',
      fullTransparencyDesc: 'প্রতিটি পদক্ষেপ — ওজন, বিশুদ্ধতা পরীক্ষা, হার গণনা — আপনার সামনে ঘটে। আমরা প্রতিটি লেনদেনের জন্য আপনাকে একটি বিস্তারিত রসিদ হাতে দিই।',
      safeSecurity: 'নিরাপদ এবং সুরক্ষিত',
      safeSecurityDesc: 'CCTV-পর্যবেক্ষণ প্রাঙ্গণ, বীমাযুক্ত ভল্ট এবং প্রশিক্ষিত কর্মীরা। আপনার সোনা আপনি প্রবেশের মুহূর্ত থেকেই সবচেয়ে নিরাপদ হাতে।',
      noPressure: 'কোনো চাপ। কখনো না।',
      noPressureDesc: 'উদ্ধৃতি পছন্দ করবেন না? চলে যান। কোনো প্রশ্ন জিজ্ঞাসা করা হয় না। আপনার বিশ্বাস একটি লেনদেনের চেয়ে বেশি গুরুত্বপূর্ণ।',
      reviews: 'পর্যালোচনা',
      overallRating: 'সামগ্রিক রেটিং',
      transactionsDone: 'লেনদেন সম্পন্ন',
      avgProcessTime: 'গড় প্রক্রিয়া সময়',
      sellGoldHeading: 'প্রতিটি ক্যারেট গুরুত্বপূর্ণ — সেরা হার। সত্যিই দ্রুত।',
      readyToSell: 'আপনার সোনা বিক্রি করতে প্রস্তুত?',
      estimate: 'অনুমান',
      process: 'প্রক্রিয়া',
      whyUsNav: 'কেন আমরা',
      sellGold: 'সোনা বিক্রি করুন'
    },
    hi: {
      header: 'हर कैरेट मायने रखता है — सर्वश्रेष्ठ दरें। सच में तेज़।',
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
      youReceive: 'आप पाएंगे',
      today: 'आज का कैरेट मनी दर',
      calcTitle: 'सोने की कीमत अनुमानक',
      calcSubtitle: 'अभी अपने सोने की कीमत जानें।',
      serviceFeeDeduction: 'सेवा शुल्क कटौती (3%)',
      getExactQuote: 'सटीक उद्धरण प्राप्त करें →',
      enterMobile: '10 अंकों का मोबाइल नंबर दर्ज करें',
      getQuoteForYourGold: 'अपने सोने के लिए उद्धरण प्राप्त करें',
      howItWorks: 'यह कैसे काम करता है',
      callNowConsultation: '☎ अभी कॉल करें — मुफ्त परामर्श',
      calculateValueFirst: 'पहले मूल्य की गणना करें',
      bookAppointmentWhatsApp: '💬 व्हाट्सएप पर अपॉइंटमेंट बुक करें',
      pricingHeading: 'हम आपके सोने की कीमत कैसे तय करते हैं',
      pricingSubtext: 'हम दैनिक अपडेट की जाने वाली लाइव MCX/IBJA सोने की दरें का उपयोग करते हैं। हमारा स्प्रेड उद्योग में सबसे कठोर है — आप हमेशा अधिकतम मूल्य प्राप्त करते हैं।',
      noDedications: 'बनाने के शुल्क के लिए कोई कटौती नहीं। कोई छिपा हुआ शुल्क नहीं। आप जो देखते हैं वही आप पाते हैं — सीधे आपके बैंक खाते में स्थानांतरित।',
      hallmark: 'हॉलमार्क',
      karat: 'कैरेट',
      purityPercent: 'शुद्धता %',
      ratePerGram: 'दर (प्रति ग्राम)',
      bis999: 'BIS 999',
      bis916: 'BIS 916',
      bis750: 'BIS 750',
      bis585: 'BIS 585',
      processTitle: 'सरल। तेज़। पारदर्शी।',
      processSubtitle: 'सोना मिनटों में खाते में।',
      callText: 'कॉल करें',
      callDesc: 'हमें कॉल करें या व्हाट्सएप करें। हम आपकी अपॉइंटमेंट बुक करेंगे',
      weighAndTest: 'वजन और परीक्षण',
      weighDesc: 'प्रमाणित BIS वजन। आपके सामने XRF शुद्धता परीक्षण 100% पारदर्शी प्रक्रिया।',
      getYourQuote: 'अपना उद्धरण प्राप्त करें',
      quoteDesc: 'लाइव बाजार दरों पर आधारित तत्काल मूल्य उद्धरण। सर्वश्रेष्ठ दर गारंटीकृत — कोई वार्ता नहीं।',
      instantMoney: 'तत्काल धन',
      instantDesc: 'मिनटों में तत्काल बैंक स्थानांतरण।',
      whyUs: 'कैरेट मनी क्यों',
      bisCertified: 'BIS प्रमाणित परीक्षण',
      bisCertifiedDesc: 'भारतीय मानक ब्यूरो द्वारा प्रमाणित XRF प्रयुक्ति का उपयोग करके प्रत्येक ग्राम का परीक्षण किया जाता है। कोई अनुमान नहीं — बस सटीक, प्रमाणित शुद्धता माप।',
      liveMcx: 'लाइव MCX दर मूल्य निर्धारण',
      liveMcxDesc: 'आपके सोने की कीमत लाइव MCX और IBJA दरों के विरुद्ध दैनिक अपडेट की जाती है। आप हमेशा बाजार दर प्राप्त करते हैं, कोई छूट संख्या नहीं।',
      instantBankTransfer: 'तत्काल बैंक स्थानांतरण',
      instantBankDesc: 'डील बंद होने के 5 मिनट के भीतर आपके बैंक खाते में IMPS/RTGS स्थानांतरण।',
      fullTransparency: 'पूर्ण पारदर्शिता',
      fullTransparencyDesc: 'हर कदम — वजन, शुद्धता परीक्षण, दर गणना — आपके सामने होता है। हम प्रत्येक लेनदेन के लिए आपको विस्तृत रसीद देते हैं।',
      safeSecurity: 'सुरक्षित और सुरक्षित',
      safeSecurityDesc: 'CCTV-निगरानी वाले परिसर, बीमाकृत तिजोरी और प्रशिक्षित कर्मचारी। आपका सोना आप प्रवेश के पल से ही सुरक्षित हाथों में है।',
      noPressure: 'कोई दबाव नहीं। कभी नहीं।',
      noPressureDesc: 'उद्धरण पसंद नहीं है? चले जाइए। कोई सवाल नहीं पूछा जाता। आपका विश्वास लेनदेन से ज्यादा मायने रखता है।',
      reviews: 'समीक्षाएं',
      overallRating: 'समग्र रेटिंग',
      transactionsDone: 'लेनदेन पूर्ण',
      avgProcessTime: 'औसत प्रक्रिया समय',
      sellGoldHeading: 'हर कैरेट मायने रखता है — सर्वश्रेष्ठ दरें। सच में तेज़।',
      readyToSell: 'अपना सोना बेचने के लिए तैयार?',
      estimate: 'अनुमान',
      process: 'प्रक्रिया',
      whyUsNav: 'हमारे बारे में',
      sellGold: 'सोना बिक्रय करें'
    },
    kn: {
      header: 'ಪ್ರತಿಯೊಂದು ಕ್ಯಾರೆಟ್ ಮಾಹಿತ್ಯವಹ — ಸಿರಿ ದರಗಳು. ನಿಜವಾಗಿಯೂ ವೇಗ.',
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
      youReceive: 'ನೀವು ಪಡೆಯುವಿರಿ',
      today: 'ಇಂದಿನ ಕ್ಯಾರೆಟ್ ಮನಿ ದರ',
      calcTitle: 'ಚಿನ್ನದ ಮೂಲ್ಯ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
      calcSubtitle: 'ಇದೀಗ ನಿಮ್ಮ ಚಿನ್ನದ ಮೂಲ್ಯ ಪರಿಶೀಲಿಸಿ.',
      serviceFeeDeduction: 'ಸೇವಾ ಶುಲ್ಕ ಕಾಟ (3%)',
      getExactQuote: 'ನಿಖರ ಉದ್ಧರಣ ಪಡೆಯಿರಿ →',
      enterMobile: '10 ಅಂಕಿ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
      getQuoteForYourGold: 'ನಿಮ್ಮ ಚಿನ್ನಕ್ಕೆ ಉದ್ಧರಣ ಪಡೆಯಿರಿ',
      howItWorks: 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      callNowConsultation: '☎ ಈಗ ಕರೆ ಮಾಡಿ — ಉಚಿತ ಸಮಾಲೋಚನೆ',
      calculateValueFirst: 'ಮೊದಲು ಮೂಲ್ಯ ಲೆಕ್ಕ ಹಾಕಿ',
      bookAppointmentWhatsApp: '💬 WhatsApp ನಲ್ಲಿ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ',
      pricingHeading: 'ನಾವು ನಿಮ್ಮ ಚಿನ್ನದ ಮೂಲ್ಯ ಹೇಗೆ ನಿರ್ಧರಿಸುತ್ತೇವೆ',
      pricingSubtext: 'ನಾವು ಪ್ರತಿದಿನ ನವೀಕರಣಗೊಳ್ಳುವ ಲೈವ್ MCX/IBJA ಚಿನ್ನದ ದರ ಬಳಸುತ್ತೇವೆ. ನಮ್ಮ ಸ್ಪ್ರೆಡ್ ಉದ್ಯೋಗದಲ್ಲಿ ಕಠಿನತೆ — ನೀವು ಯಾವಾಗಲೂ ಗರಿಷ್ಠ ಮೌಲ್ಯ ಪಡೆಯುತ್ತೀರಿ.',
      noDedications: 'ತಯಾರಿ ಚಾರ್ಜಗಳಿಗೆ ಯಾವುದೇ ಕಡಿತ ಇಲ್ಲ. ಯಾವುದೇ ಲುಕಾವಣೆ ಶುಲ್ಕ ಇಲ್ಲ. ನೀವು ಕಾಣುವುದು ನೀವು ಪಡೆಯುವುದು — ನೇರವಾಗಿ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ವರ್ಗಾವಣೆ ಮಾಡಲಾಗುತ್ತದೆ.',
      hallmark: 'ಹಾಲ್‌ಮಾರ್ಕ್',
      karat: 'ಕ್ಯಾರೆಟ್',
      purityPercent: 'ಶುದ್ಧತೆ %',
      ratePerGram: 'ದರ (ಪ್ರತಿ ಗ್ರಾಮ್)',
      bis999: 'BIS 999',
      bis916: 'BIS 916',
      bis750: 'BIS 750',
      bis585: 'BIS 585',
      processTitle: 'ಸರಳ. ವೇಗ. ಸ್ವಚ್ಛತೆ.',
      processSubtitle: 'ಚಿನ್ನ ಖಾತೆಗೆ ನಿಮಿಷಗಳಲ್ಲಿ.',
      callText: 'ಕರೆ ಮಾಡಿ',
      callDesc: 'ನಮ್ಮನ್ನು ಕರೆ ಮಾಡಿ ಅಥವಾ WhatsApp ಮಾಡಿ. ನಾವು ನಿಮ್ಮ ಸಂಚಯಾಲಯವನ್ನು ಬುಕ್ ಮಾಡುತ್ತೇವೆ',
      weighAndTest: 'ತೂಕ ಮತ್ತು ಪರೀಕ್ಷೆ',
      weighDesc: 'ಪ್ರಮಾಣೀಕೃತ BIS ತೂಕ. ನಿಮ್ಮ ಮುಂದೆ XRF ಶುದ್ಧತೆ ಪರೀಕ್ಷೆ 100% ಸ್ವಚ್ಛ ಪ್ರಕ್ರಿಯೆ.',
      getYourQuote: 'ನಿಮ್ಮ ಉದ್ಧರಣ ಪಡೆಯಿರಿ',
      quoteDesc: 'ಲೈವ್ ಮಾರುಕಟ್ಟೆ ದರಗಳ ಆಧಾರದ ತತ್ಕ್ಷಣ ಬೆಲೆ ಉದ್ಧರಣ. ಸಿರಿ ದರ ಖಚಿತ — ಯಾವುದೇ ಆಲೋಚನೆ ಅಗತ್ಯವಿಲ್ಲ.',
      instantMoney: 'ತಾತ್ಕ್ಷಣಿಕ ಹಣ',
      instantDesc: 'ನಿಮಿಷಗಳಲ್ಲಿ ತಾತ್ಕ್ಷಣಿಕ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ.',
      whyUs: 'ಕ್ಯಾರೆಟ್ ಮನಿ ಏಕೆ',
      bisCertified: 'BIS ಪ್ರಮಾಣೀಕೃತ ಪರೀಕ್ಷೆ',
      bisCertifiedDesc: 'ಭಾರತೀಯ ಮಾನದಂಡ ಬ್ಯೂರೋ ಅವಕಾಶ ಪ್ರಮಾಣೀಕೃತ XRF ತಂತ್ರಜ್ಞಾನ ಬಳಸಿ ಪ್ರತಿ ಗ್ರಾಮ ಪರೀಕ್ಷಿಸಲಾಗುತ್ತದೆ. ಯಾವುದೇ ಊಹೆ — ಕೇವಲ ನಿಖರ, ಪ್ರಮಾಣೀಕೃತ ಶುದ್ಧತೆ ಅಳತೆ.',
      liveMcx: 'ಲೈವ್ MCX ದರ ಬೆಲೆ ನಿರ್ಧಾರ',
      liveMcxDesc: 'ನಿಮ್ಮ ಚಿನ್ನದ ಬೆಲೆ ಲೈವ್ MCX ಮತ್ತು IBJA ದರಗಳ ವಿರುದ್ಧ ಪ್ರತಿದಿನ ನವೀಕರಣಗೊಳ್ಳುತ್ತದೆ. ನೀವು ಯಾವಾಗಲೂ ಮಾರುಕಟ್ಟೆ ದರ ಪಡೆಯುತ್ತೀರಿ, ಛಾಯೆ ಸಂಖ್ಯೆ ಅಲ್ಲ.',
      instantBankTransfer: 'ತಾತ್ಕ್ಷಣಿಕ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ',
      instantBankDesc: 'ಡೀಲ್ ಮುಚ್ಚುವಿಕೆಯ 5 ನಿಮಿಷಗಳ ಬಳಿಕ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ IMPS/RTGS ವರ್ಗಾವಣೆ.',
      fullTransparency: 'ಸಂಪೂರ್ಣ ಸ್ವಚ್ಛತೆ',
      fullTransparencyDesc: 'ಪ್ರತಿ ಹೆಜ್ಜೆ — ತೂಕ, ಶುದ್ಧತೆ ಪರೀಕ್ಷೆ, ದರ ಲೆಕ್ಕ — ನಿಮ್ಮ ಮುಂದೆ ಸಂಭವಿಸುತ್ತದೆ. ನಾವು ನಿಮಗೆ ಪ್ರತಿಯೊಂದು ಸವಾಲುಗಾರಿತ್ವಕ್ಕೆ ವಿಸ್ತೃತ ರಸೀದಿ ಮಾಡಿಕೊಡುತ್ತೇವೆ.',
      safeSecurity: 'ಸುರಕ್ಷಿತ ಮತ್ತು ಸುರಕ್ಷಿತ',
      safeSecurityDesc: 'CCTV-ಮೇಲ್ವಿಚಾರಣೆ ಸ್ಥಳ, ವಿಮೆಪತ್ರ ವಜ್ರಾನ್, ಮತ್ತು ತರಬೇತಿ ಸಿಬ್ಬಂದಿ. ನಿಮ್ಮ ಚಿನ್ನ ನೀವು ಪ್ರವೇಶಿಸುವ ಕ್ಷಣದಿಂದ ಸುರಕ್ಷಿತ ಹಸ್ತಗಳಲ್ಲಿದೆ.',
      noPressure: 'ಯಾವುದೇ ಒತ್ತಡ ಇಲ್ಲ. ಎಂದಿದ್ದೂ.',
      noPressureDesc: 'ಉದ್ಧರಣ ಇಷ್ಟವಿಲ್ಲ? ಅಪತಾಸ್ಥಾನ. ಯಾವುದೇ ಪ್ರಶ್ನೆ ಕೇಳಲಾಗಿಲ್ಲ. ನಿಮ್ಮ ವಿಶ್ವಾಸ ಸವಾಲುಗಾರಿತ್ವಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ವಿಷಯಗಳು.',
      reviews: 'ವಿಮರ್ಶೆ',
      overallRating: 'ಒಟ್ಟಾರೆ ರೇಟಿಂಗ್',
      transactionsDone: 'ಸವಾಲುಗಾರಿತ್ವ ನಡೆದೆ',
      avgProcessTime: 'ಸರಾಸರಿ ಪ್ರಕ್ರಿಯೆ ಸಮಯ',
      sellGoldHeading: 'ಪ್ರತಿಯೊಂದು ಕ್ಯಾರೆಟ್ ಮಾಹಿತ್ಯವಹ — ಸಿರಿ ದರಗಳು. ನಿಜವಾಗಿಯೂ ವೇಗ.',
      readyToSell: 'ನಿಮ್ಮ ಚಿನ್ನ ಮಾರಲು ಸಜ್ಜಿತರು?',
      estimate: 'ಅನುಮಾನ',
      process: 'ಪ್ರಕ್ರಿಯೆ',
      whyUsNav: 'ಅಭಿಪ್ರಾಯ',
      sellGold: 'ಚಿನ್ನ ಮಾರಿ'
    },
    ml: {
      header: 'ഓരോ കാരറ്റും പ്രാധാന്യമുള്ളത് — മികച്ച നിരക്കുകൾ. ശരിയായ വേഗത.',
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
      youReceive: 'നിങ്ങൾ പലിശ',
      today: 'ഇന്നത്തെ കാരറ്റ് മണി നിരക്ക്',
      calcTitle: 'സ്വർണ്ണ മൂല്യ കാൽക്കുലേറ്റർ',
      calcSubtitle: 'ഇപ്പോൾ നിങ്ങളുടെ സ്വർണ്ണ മൂല്യം പരിശോധിക്കുക.',
      serviceFeeDeduction: 'സേവന ഫീസ് കുറയ്ക്കൽ (3%)',
      getExactQuote: 'കൃത്യമായ ഉദ്ധരണം ലഭിക്കുക →',
      enterMobile: '10 ഡിജിറ്റ് മൊബൈൽ നമ്പർ നൽകുക',
      getQuoteForYourGold: 'നിങ്ങളുടെ സ്വർണ്ണത്തിനായി ഉദ്ധരണം നേടുക',
      howItWorks: 'ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു',
      callNowConsultation: '☎ ഇപ്പോൾ കോൾ ചെയ്യുക — സ്വതന്ത്ര കൂടിയാലോചന',
      calculateValueFirst: 'ആദ്യം മൂല്യം കണ്ണ്കാക്കുക',
      bookAppointmentWhatsApp: '💬 WhatsApp ൽ നിയമനം ബുക്ക് ചെയ്യുക',
      pricingHeading: 'നിങ്ങളുടെ സ്വർണ്ണത്തിന്റെ വില നിങ്ങൾ എങ്ങനെ നിശ്ചയിക്കുന്നു',
      pricingSubtext: 'ഞങ്ങൾ പ്രതിദിനം അപ്‌ഡേറ്റ് ചെയ്യുന്ന ലൈവ് MCX/IBJA സ്വർണ്ണ നിരക്കുകൾ ഉപയോഗിക്കുന്നു. നിങ്ങളുടെ സ്പ്രെഡ് ഉദ്യോഗത്തിൽ ഏറ്റവും കർശനമായത് — നിങ്ങൾ എപ്പോഴും അതിയായ മൂല്യം ലഭിക്കുന്നു.',
      noDedications: 'നിർമ്മാണ ചാർജ്ജുകൾക്കായി കോനും മുറിക്കൽ ഇല്ല. ഒരു ലുകാവണ ഫി ഇല്ല. നിങ്ങൾ കാണുന്നത് നിങ്ങൾ സ്വീകരിക്കുന്നത് — നേരിട്ട് നിങ്ങളുടെ ബാങ്ക് അക്കൗണ്ടിലേക്ക് മാറ്റുന്നു.',
      hallmark: 'ഹാൾമാർക്ക്',
      karat: 'കാരറ്റ്',
      purityPercent: 'ശുദ്ധത %',
      ratePerGram: 'നിരക്ക് (ഗ്രാമിനു വേണ്ടി)',
      bis999: 'BIS 999',
      bis916: 'BIS 916',
      bis750: 'BIS 750',
      bis585: 'BIS 585',
      processTitle: 'ലളിതം. വേഗത. സ്വരൂപത.',
      processSubtitle: 'സ്വർണ്ണം അക്കൗണ്ടിലേക്ക് നിമിഷങ്ങളിൽ.',
      callText: 'കോൾ ചെയ്യുക',
      callDesc: 'നങ്ങളെ കോൾ ചെയ്യുക അല്ലെങ്കിൽ WhatsApp ചെയ്യുക. ഞങ്ങൾ നിങ്ങളുടെ നിയമനം ബുക്ക് ചെയ്യും',
      weighAndTest: 'വിതരണം ചെയ്യുക ഒ പരിശോധന',
      weighDesc: 'സർട്ടിഫായ്ഡ് BIS വിതരണം. നിങ്ങളുടെ മുന്നിലെ XRF ശുദ്ധത പരിശോധന 100% സുതാര്യ പ്രക്രിയ.',
      getYourQuote: 'നിങ്ങളുടെ ഉദ്ധരണം നേടുക',
      quoteDesc: 'ലൈവ് മാർക്കറ്റ് നിരക്കുകളെ അടിസ്ഥാനമാക്കിയുള്ള തൃപ്തിദായകമായ വിലയിലുള്ള ഉദ്ധരണം. മികച്ച നിരക്ക് ഉറപ്പ് — യാതൊരു കൂടിയാലോചന ആവശ്യമില്ല.',
      instantMoney: 'തൃപ്തിദായകം പണം',
      instantDesc: 'നിമിഷങ്ങളിൽ തൃപ്തിദായകം ബാങ്ക് കൈമാറ്റം.',
      whyUs: 'കാരറ്റ് മണി എന്തുകൊണ്ട്',
      bisCertified: 'BIS സർട്ടിഫായ്ഡ് പരിശോധന',
      bisCertifiedDesc: 'ഇന്ത്യൻ മാനനിരച്ചാര ബ്യൂറോ സർട്ടിഫിക്കേഷൻ XRF സാങ്കേതികത ഉപയോഗിച്ച് ഓരോ ഗ്രാമും പരിശോധന ചെയ്യുന്നു. കേവലം കൃത്യ, സർട്ടിഫിക്കേഷൻ ശുദ്ധത അളവ്.',
      liveMcx: 'ലൈവ് MCX നിരക്ക് വില നിശ്ചയം',
      liveMcxDesc: 'നിങ്ങളുടെ സ്വർണ്ണത്തിന്റെ വില ലൈവ് MCX ഒ IBJA നിരക്കുകൾ പ്രതിദിനം അപ്‌ഡേറ്റ് ചെയ്യുന്നു. നിങ്ങൾ എപ്പോഴും മാർക്കറ്റ് നിരക്ക് സ്വീകരിക്കുന്നു, ഛായാ സംഖ്യ ഇല്ല.',
      instantBankTransfer: 'തൃപ്തിദായകം ബാങ്ക് കൈമാറ്റം',
      instantBankDesc: 'ഡീൽ അടയ്ക്കൽ 5 നിമിഷത്തേക്കുറിച്ച് നിങ്ങളുടെ ബാങ്ക് അക്കൗണ്ടിലേക്ക് IMPS/RTGS കൈമാറ്റം.',
      fullTransparency: 'സമ്പൂർണ സുതാര്യത',
      fullTransparencyDesc: 'ഓരോ ഘട്ടം — വിതരണം, ശുദ്ധത പരിശോധന, നിരക്ക് കണക്കാക്കൽ — നിങ്ങളുടെ മുന്നിൽ സംഭവിക്കുന്നു. ഞങ്ങൾ പ്രതിയോരു ലെന്ദെന്നിന് വിശദമായ രസീദ് നിങ്ങൾക്ക് കൈമാറിത്തരുന്നു.',
      safeSecurity: 'സുരക്ഷിതം ഒ സുരക്ഷിത',
      safeSecurityDesc: 'CCTV-നിരീക്ഷണ പരിസരം, ബിമ വാൾട്, ഒ പരിശീലനം കർമ്മചാരി. നിങ്ങളുടെ സ്വർണ്ണം നിങ്ങൾ പ്രവേശിക്കുന്ന നിമിഷത്തിൽ സുരക്ഷിത കൈകളിൽ.',
      noPressure: 'സമ്മര്ദ്ദം ഇല്ല. കറ്റിലും.',
      noPressureDesc: 'ഉദ്ധരണം ഇഷ്ടപ്പെടുന്നില്ലേ? സ്വതന്ത്ര. സവാലായ കൂടിയാലോചനയോ ഇല്ല. നിങ്ങളുടെ ബിസ്വാസം ലെന്ദെനിനു കൂടുതൽ പ്രാധാന്യമുള്ളത്.',
      reviews: 'പുനരവലോകനം',
      overallRating: 'മൊത്തത്തിൽ റേറ്റിംഗ്',
      transactionsDone: 'ലെന്ദെന സമ്പന്നമായ്',
      avgProcessTime: 'സരാസരി പ്രക്രിയ സമയം',
      sellGoldHeading: 'ഓരോ കാരറ്റും പ്രാധാന്യമുള്ളത് — മികച്ച നിരക്കുകൾ. ശരിയായ വേഗത.',
      readyToSell: 'നിങ്ങളുടെ സ്വർണ്ണ വിൽക്കാൻ തയാറല്ലേ?',
      estimate: 'അനുമാനം',
      process: 'പ്രക്രിയ',
      whyUsNav: 'നിങ്ങൾ',
      sellGold: 'സ്വർണ്ണ വിൻ'
    },
    mr: {
      header: 'प्रत्येक कैरेट महत्वपूर्ण — सर्वश्रेष्ठ दरें. खरं उडत.',
      goldPurchased: 'सोना खरेदी',
      happyCustomers: 'खुश ग्राहक',
      avgRating: 'सरासरी रेटिंग',
      weight: 'वजन (ग्रामांत)',
      goldPurity: 'सोन्याची शुद्धता (कॅरेट)',
      mobileNumber: 'मोबाइल नंबर',
      carat24: '24 कॅरेट — 99.9% शुद्ध',
      carat22: '22 कॅरेट — 91.6% शुद्ध',
      carat18: '18 कॅरेट — 75% शुद्ध',
      carat14: '14 कॅरेट — 58.5% शुद्ध',
      youReceive: 'तुम्हाला मिळेल',
      today: 'आजचा कॅरेट मनी दर',
      calcTitle: 'सोन्याचे मूल्य कॅलक्युलेटर',
      calcSubtitle: 'आता आपल्या सोन्याचे मूल्य तपासा.',
      serviceFeeDeduction: 'सेवा शुल्क कपात (3%)',
      getExactQuote: 'अचूक उद्धरण मिळवा →',
      enterMobile: '10 अंकांचा मोबाइल नंबर टाका',
      getQuoteForYourGold: 'आपल्या सोन्यासाठी उद्धरण मिळवा',
      howItWorks: 'हे कसे काम करते',
      callNowConsultation: '☎ आता कॉल करा — विनामूल्य परामर्श',
      calculateValueFirst: 'प्रथम मूल्य मोजा',
      bookAppointmentWhatsApp: '💬 व्हाट्सअँप वर नियुक्ती बुक करा',
      pricingHeading: 'आम्ही आपल्या सोन्याचे मूल्य कसे ठरवतो',
      pricingSubtext: 'आम्ही दैनिक अपडेट होणारे लाइव MCX/IBJA सोन्याचे दर वापरतो. आमचा प्रसार उद्योगात सर्वात घट्ट आहे — आपल्याला नेहमी जास्तीत जास्त मूल्य मिळते.',
      noDedications: 'बनवण्याच्या शुल्कांमध्ये कोणतीही कपात नाही. कोणतेही लपलेले फी नाही. आप जे पहात आहात ते आपल्याला मिळते — आपल्या बँक खात्यात थेट हस्तांतरित.',
      hallmark: 'हॉलमार्क',
      karat: 'कॅरेट',
      purityPercent: 'शुद्धता %',
      ratePerGram: 'दर (प्रति ग्रॅम)',
      bis999: 'BIS 999',
      bis916: 'BIS 916',
      bis750: 'BIS 750',
      bis585: 'BIS 585',
      processTitle: 'सरल. वेगवान. पारदर्शक.',
      processSubtitle: 'सोना खात्यात मिनिटांत.',
      callText: 'कॉल करा',
      callDesc: 'आम्हाला कॉल करा किंवा व्हाट्सअँप करा. आम्ही आपली नियुक्ती बुक करू',
      weighAndTest: 'वजन आणि चाचणी',
      weighDesc: 'प्रमाणित BIS वजन. आपल्या समोर XRF शुद्धता चाचणी 100% पारदर्शक प्रक्रिया.',
      getYourQuote: 'आपला उद्धरण मिळवा',
      quoteDesc: 'लाइव मार्केट रेटवर आधारित तत्काल किंमत उद्धरण. सर्वश्रेष्ठ दर गारंटीड — कोणतीही आलोचना आवश्यक नाही.',
      instantMoney: 'तत्काल पैसे',
      instantDesc: 'मिनिटांत तत्काल बँक हस्तांतरण.',
      whyUs: 'कॅरेट मनी का',
      bisCertified: 'BIS प्रमाणित चाचणी',
      bisCertifiedDesc: 'भारतीय मानक ब्यूरो द्वारे प्रमाणित XRF तंत्रज्ञान वापरून प्रत्येक ग्राम चाचणी केली जाते. कोणतेही अनुमान — फक्त अचूक, प्रमाणित शुद्धता मापन.',
      liveMcx: 'लाइव MCX दर किंमत ठरविणे',
      liveMcxDesc: 'आपल्या सोन्याची किंमत लाइव MCX आणि IBJA दरांच्या विरुद्ध दैनिक अपडेट केली जाते. आपल्याला नेहमी बाजार दर मिळते, सवलत संख्या नाही.',
      instantBankTransfer: 'तत्काल बँक हस्तांतरण',
      instantBankDesc: 'डील बंद होण्याच्या 5 मिनिटांत आपल्या बँक खात्यात IMPS/RTGS हस्तांतरण.',
      fullTransparency: 'संपूर्ण पारदर्शकता',
      fullTransparencyDesc: 'प्रत्येक पायरी — वजन, शुद्धता चाचणी, दर गणना — आपल्या समोर होते. आम्ही आपल्याला प्रत्येक व्यवहारासाठी तपशीलवार रसीद देतो.',
      safeSecurity: 'सुरक्षित आणि सुरक्षित',
      safeSecurityDesc: 'CCTV-निरीक्षण परिसर, विमाकृत तिजोरी आणि प्रशिक्षित कर्मचारी. आपला सोना आप आत प्रवेश केल्या मुहूर्तापासून सर्वात सुरक्षित हातांत आहे.',
      noPressure: 'कोणताही दबाव नाही. कधीही.',
      noPressureDesc: 'उद्धरण आवडत नाही? चले जा. कोणतेही प्रश्न विचारले जात नाही. आपला विश्वास व्यवहारापेक्षा अधिक महत्वपूर्ण आहे.',
      reviews: 'पुनरावलोकन',
      overallRating: 'एकूण रेटिंग',
      transactionsDone: 'व्यवहार पूर्ण',
      avgProcessTime: 'सरासरी प्रक्रिया वेळ',
      sellGoldHeading: 'प्रत्येक कैरेट महत्वपूर्ण — सर्वश्रेष्ठ दरें. खरं उडत.',
      readyToSell: 'आपला सोना विकण्यासाठी तयार?',
      estimate: 'अनुमान',
      process: 'प्रक्रिया',
      whyUsNav: 'आपल्या बद्दल',
      sellGold: 'सोना विक्रय'
    },
    ta: {
      header: 'ஒவ்வொரு கேரட்ও பாடிய — சிறந்த விலைகள். உண்மைவாக வேகம்.',
      goldPurchased: 'தங்கம் ក្រយ',
      happyCustomers: 'மகிழ்ந்த வாடிக்கையாளர்கள்',
      avgRating: 'சராசரி ரேट்டிங்',
      weight: 'எடை (கிராமில்)',
      goldPurity: 'தங்கத்தின் தூய்மை (கேரட்)',
      mobileNumber: 'மொபைல் எண்',
      carat24: '24 கேரட் — 99.9% தூய',
      carat22: '22 கேரட் — 91.6% தூய',
      carat18: '18 கேரட் — 75% தூய',
      carat14: '14 கேரட் — 58.5% தூய',
      youReceive: 'நீங்கள் பெறுவீர்கள்',
      today: 'இன்றைய கேரட் மணி விலை',
      calcTitle: 'தங்கத்தின் மூல்य ക్ણకୟલ້ेടর',
      calcSubtitle: 'இப்போதே உங்கள் தங்கத்தின் மூல்யத்தை சரிபார்க்கவும்.',
      serviceFeeDeduction: 'சேवा கட्टணम் குறைப्पु (3%)',
      getExactQuote: 'சरियான मेष्कोल् पेरुभुम् →',
      enterMobile: '10 इलक्क मॊबाइल् एणु उल्लिडवुम्',
      getQuoteForYourGold: 'உங்கள் தங்கத்திற்கு மேற्கோள் பெறுங்கள்',
      howItWorks: 'இது எப்படி வேலை செய்கிறது',
      callNowConsultation: '☎ இப்போது அழைக்கவும் — இலவச ஆலோசனை',
      calculateValueFirst: 'முதலில் மூல्य கணக्கிடுங்கள்',
      bookAppointmentWhatsApp: '💬 WhatsApp இல் நியமனம் பதிவு செய்யவும்',
      pricingHeading: 'நாம் உங்கள் தங்கத்தின் விலை நிर्ধারிக்கும் विধम्',
      pricingSubtext: 'नाम् दिनसरि पुथुप्पिक्कप्पडुम् नेरिडु MCX/IBJA तङ्कम् विलैकळुकळ पयनपादुक्कुम्। नमर पेरिस् तोझ्यिलगतिल् इरुक्कमनम् — नीञ्कळ एप्पोझुम् अधिक मूल्य पेरुभीर्कळ।',
      noDedications: 'मेर्प् अरक्कम् गलिल कोनुम् मुरिक्कळ इल्ल। कोनो लुकावन् पी इल्ल। निन्नुळ कानुन्नत् निन्नुळ स्वीकरिक्कुन्नत् — नेरिज़ निन्नुळ बान्क अक्कौन्टिलेक्क मरत्तुन्नु।',
      hallmark: 'हॊलमार्क',
      karat: 'केरेट',
      purityPercent: 'शुद्धत %',
      ratePerGram: 'दर (प्रती ग्रामु)',
      bis999: 'BIS 999',
      bis916: 'BIS 916',
      bis750: 'BIS 750',
      bis585: 'BIS 585',
      processTitle: 'सहज। वेग। प्रशक्तत.',
      processSubtitle: 'तङ्कम् अक्कौन्टिलेक्क निमिशङ्गलिल्।',
      callText: 'अझैकवुम्',
      callDesc: 'अमहेनु अझैकवुम् अथवा व्हट्सअप् चेयवुम्। अहम् निन्नुळ निमनम् बुक् चेय्युम्',
      weighAndTest: 'वितरनम् अन्टु परीक्षन्',
      weighDesc: 'सर्त्तिपाड् BIS वितरनम्। निन्नुळ मुन्निले XRF शुद्धत परीक्षन् 100% सुतार्य प्रक्रिय।',
      getYourQuote: 'निन्नुळ उद्धरनम् नेडुक',
      quoteDesc: 'लाइव् मार्केट् दरङ्कल् अडिस्तानमाय् तृप्तिदायकमाय विलयिल् उद्धरनम्। मिक्कच् निरक्क उरप्पु — यातॊरु कुडियालोचन अवश्यमिल्ल।',
      instantMoney: 'तृप्तिदायकम् पणम्',
      instantDesc: 'निमिशङ्गलिल् तृप्तिदायकम् बान्क् कैमारत्तम्।',
      whyUs: 'केरेट् मणि एन्तुक्कोण्ड्',
      bisCertified: 'BIS सर्त्तिपाड् परीक्षन्',
      bisCertifiedDesc: 'इन्तियन् मान निरच्चार ब्यूरो सर्त्तिपिक्केशन् XRF सान्केतिकत उपयोगिच्च ओरोरु ग्रामुम् परीक्षन् चेय्युन्नु। केवलम् कृत्य सर्त्तिपिक्केशन् शुद्धत अलैपु।',
      liveMcx: 'लाइव् MCX निरक्क् विल निश्चयम्',
      liveMcxDesc: 'निन्नुळ स्वर्णत्तिन्नुळ विल लाइव् MCX ओ IBJA निरक्कुकळ् प्रतिदिनम् अप्पुडेट् चेय्युन्नु। निन्नुळ एप्पोझुम् मार्केट् निरक्क स्वीकरिक्कुन्नु छायां सन्ख्य इल्ल।',
      instantBankTransfer: 'तृप्तिदायकम् बान्क् कैमारत्तम्',
      instantBankDesc: 'डील अडैक्कल् 5 निमिशङ्गलेक्कुरिच्च निन्नुळ बान्क् अक्कौन्टिलेक्क IMPS/RTGS कैमारत्तम्।',
      fullTransparency: 'सम्पूरण सुतार्यत',
      fullTransparencyDesc: 'ओरोरु घट्टम् — वितरनम् शुद्धत परीक्षन निरक्क कण्कलक्कल् — निन्नुळ मुन्निल सम्भविक्कुन्नु। अहम् प्रतियोरु लेन्देन्निनु विशदमाय रसीद् निन्नुळक् कैमारितारुन्नु।',
      safeSecurity: 'सुरक्षितम् ओ सुरक्षित',
      safeSecurityDesc: 'CCTV-निरीक्षण परिसरम् बिम वाल्ट ओ परिशीलनम् कर्मचारी। निन्नुळ स्वर्णम् निन्नुळ प्रवेशिक्कुन्ना निमिशतिल सुरक्षित कैकलिल्।',
      noPressure: 'सम्मर्दम् इल्ल। करत्तिलुम्।',
      noPressureDesc: 'उद्धरनम् इष्टापेडुन्निल्ले? स्वतन्त्र। सवालाय कुडियालोचनयो इल्ल। निन्नुळ बिस्वासम् लेन्देनिनु कुडुतेल् प्राधानयमुल्लत्।',
      reviews: 'पुनरवलोकनम्',
      overallRating: 'मॊत्तत्तिल् रेट्टिङ्',
      transactionsDone: 'लेन्देन सम्पन्नमाय्',
      avgProcessTime: 'सरासरि प्रक्रिय समयम्',
      sellGoldHeading: 'ઓરોરු केरेट् संख्य — सिरिस दरगुल्। निजवागि वेगम्।',
      readyToSell: 'निन्नुळ स्वर्णम् विल्क्कान् तयारल्ले?',
      estimate: 'अनुमानम्',
      process: 'प्रक्रिय',
      whyUsNav: 'अहम्',
      sellGold: 'स्वर्णम् विन्'
    },
    te: {
      header: 'ప్రతి కేరట్ సంఖ్య — సుఖుదుదుई రేటులు. నిజమైన వేగం.',
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
      youReceive: 'మీకు వస్తుంది',
      today: 'ఈ రోజు క్యారెట్ మనీ రేట్',
      calcTitle: 'బంగారం విలువ కాలిక్యులేటర్',
      calcSubtitle: 'ఇప్పుడే మీ బంగారం విలువను తనిఖీ చేయండి.',
      serviceFeeDeduction: 'సేవా ఫీ తగ్గింపు (3%)',
      getExactQuote: 'ఖచ్చితమైన కోట్ పొందండి →',
      enterMobile: '10 అంకెల మోబైల్ నంబర్ నమోదు చేయండి',
      getQuoteForYourGold: 'మీ బంగారం కోసం కోట్ పొందండి',
      howItWorks: 'ఇది ఎలా కూడుతుంది',
      callNowConsultation: '☎ ఇప్పుడు కాల్ చేయండి — ఉచిత సంప్రదింపు',
      calculateValueFirst: 'మొదట విలువను లెక్కించండి',
      bookAppointmentWhatsApp: '💬 WhatsApp పై నియమితం బుక్ చేయండి',
      pricingHeading: 'మేము మీ బంగారం విలువను ఎలా నిర్ణయిస్తాము',
      pricingSubtext: 'మేము రోజూ అప్‌డేట్ చేసే లైవ్ MCX/IBJA బంగారం రేట్లను ఉపయోగిస్తాము. మా స్ప్రెడ్ ఇండస్ట్రీలో ఎక్కువ — మీరు ఎల్లప్పుడు గరిష్ట విలువ పొందుతారు.',
      noDedications: 'తయారీ ఛార్జీలకు కూడా కోటేషన్ లేదు. లుకానిచిన ఫీ లేదు. మీరు కంటున్నది మీరు పొందుతారు — మీ బ్యాంకు ఖాతకు నేరుగా బదిలీ చేయబడుతుంది.',
      hallmark: 'హాల్‌మార్క్',
      karat: 'క్యారెట్',
      purityPercent: 'స్వచ్ఛత %',
      ratePerGram: 'రేట్ (గ్రాముకు)',
      bis999: 'BIS 999',
      bis916: 'BIS 916',
      bis750: 'BIS 750',
      bis585: 'BIS 585',
      processTitle: 'సరళమైనది. వేగం. పారదర్శకత.',
      processSubtitle: 'బంగారం ఖాతకు నిమిషాలలో.',
      callText: 'కాల్ చేయండి',
      callDesc: 'మాకు కాల్ చేయండి లేదా WhatsApp చేయండి. మేము మీ నియమితం బుక్ చేస్తాము',
      weighAndTest: 'బరువు మరియు పరీక్ష',
      weighDesc: 'సర్టిఫైడ్ BIS బరువు. మీ ముందు XRF స్వచ్ఛత పరీక్ష 100% పారదర్శక ప్రక్రియ.',
      getYourQuote: 'మీ కోట్ పొందండి',
      quoteDesc: 'లైవ్ మార్కెట్ రేట్ల ఆధారంగా తక్షణ ధర కోటేషన్. సుఖుదుదుই రేట్ గ్యారంటీ — ఎటువంటి చర్చ అవసరం లేదు.',
      instantMoney: 'తక్షణ డబ్బు',
      instantDesc: 'నిమిషాలలో తక్షణ బ్యాంకు బదిలీ.',
      whyUs: 'క్యారెట్ మనీ ఎందుకు',
      bisCertified: 'BIS సర్టిఫైడ్ పరీక్ష',
      bisCertifiedDesc: 'భారత ప్రమాణ కార్యాలయం ద్వారా ధృవీకరించిన XRF సాంకేతికతను ఉపయోగించి ప్రతి గ్రాము పరీక్ష చేయబడుతుంది. ఏ ఊహ లేదు — కేవలం ఖచ్చితమైన, సర్టిఫైడ్ స్వచ్ఛత కొలత.',
      liveMcx: 'లైవ్ MCX రేట్ ధర నిర్ణయం',
      liveMcxDesc: 'మీ బంగారం ధర లైవ్ MCX మరియు IBJA రేట్ల నుండి రోజూ అప్‌డేట్ చేయబడుతుంది. మీరు ఎల్లప్పుడు మార్కెట్ రేట్ పొందుతారు, ఎటువంటి ఛాయా సంఖ్య లేదు.',
      instantBankTransfer: 'తక్షణ బ్యాంకు బదిలీ',
      instantBankDesc: 'డీల్ ముగింపుకు 5 నిమిషాలలో మీ బ్యాంకు ఖాతకు IMPS/RTGS బదిలీ.',
      fullTransparency: 'పూర్తి పారదర్శకత',
      fullTransparencyDesc: 'ప్రతి అడుగు — బరువు, స్వచ్ఛత పరీక్ష, రేట్ లెక్కింపు — మీ ముందు జరుగుతుంది. ఎటువంటి లెన్ధేన కోసం మేము మీకు వివరణాత్మక రసీదు ఇస్తాము.',
      safeSecurity: 'సురక్షితమైన మరియు సురక్షిత',
      safeSecurityDesc: 'CCTV-పర్యవేక్షణ చేసిన ప్రాంగణ, బీమా చేసిన ఆర్ములు మరియు శిక్షణ పొందిన సిబ్బంది. మీ బంగారం మీరు అక్కడకు ప్రవేశించిన మానిరోజు నుండి సురక్షితమైన చేతులలో ఉంది.',
      noPressure: 'ఎటువంటి ఒత్తిడి లేదు. ఎన్నటికీ.',
      noPressureDesc: 'కోట్ నచ్చకపోతే? నడిచిపోండి. ఎటువంటి ప్రశ్న అడియవద్దు. మీ విశ్వాసం లెన్ధేన కంటే ఎక్కువ ముఖ్యమైనది.',
      reviews: 'సమీక్ష',
      overallRating: 'సరిపెట్టిన రేటింగ్',
      transactionsDone: 'లెన్ధేన పూర్తిచేయబడిందఁ',
      avgProcessTime: 'సగటు ప్రక్రియ సమయం',
      sellGoldHeading: 'ప్రతి కేరట్ సంఖ్య — సుఖుదుదుई రేటులు. నిజమైన వేగం.',
      readyToSell: 'మీ బంగారం విక్రయించటానికి సిద్ధమైనారా?',
      estimate: 'అనుమానం',
      process: 'ప్రక్రియ',
      whyUsNav: 'మాగురించి',
      sellGold: 'బంగారం విక్రయం'
    }
  };

  const t = translations[language] || translations['en'];

  const calculateValue = () => {
    if (!weight || weight <= 0) return 0;
    const weightNum = parseFloat(weight);
    const purityPercent = purities[purity];
    const grossValue = weightNum * purityPercent * RATE_24K;
    const deduction = grossValue * 0.03;
    return Math.round(grossValue - deduction);
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

  const reviews = [
    { text: "Excellent experience at Carat Money. The staff were very professional and patient. The quality of the service was outstanding.", author: "Priya Sharma", city: "Mumbai", profession: "Consultant", timeframe: "1 month ago", initials: "PS" },
    { text: "I compared rates with other buyers in my area. Carat Money offered ₹8,400 more per 10 grams than others. The process was completely transparent.", author: "Arjun Nair", city: "Bangalore", profession: "Business Owner", timeframe: "2 months ago", initials: "AN" },
    { text: "As a woman going alone to sell gold, I was nervous. The staff at Carat Money were professional and respectful. I felt completely safe.", author: "Anjali Patel", city: "Delhi", profession: "Teacher", timeframe: "3 weeks ago", initials: "AP" },
    { text: "The XRF testing machine was a game changer. I could see the exact purity percentage on screen. No trust issues whatsoever.", author: "Vikram Dutta", city: "Kolkata", profession: "IT Professional", timeframe: "2 weeks ago", initials: "VD" },
    { text: "Money was transferred to my bank account instantly. The entire process from walking in to getting money was under 12 minutes.", author: "Rahul Verma", city: "Pune", profession: "Engineer", timeframe: "6 months ago", initials: "RV" },
    { text: "Outstanding service. The team explained every step clearly. I got the best rate and no hidden charges. Highly recommended.", author: "Shruti Bansal", city: "Mumbai", profession: "Housewife", timeframe: "5 weeks ago", initials: "SB" }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Sticky Nav + Content continues... */}
      {/* [REST OF CODE - Paste everything after this line into GitHub] */}
    </div>
  );
};

export default CaratMoney;

{/* Sticky Navigation Bar */}
      <nav style={{ backgroundColor: '#000000', borderBottom: '1px solid #1f2937', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>Carat Money</div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => scrollToSection(estimateRef)} style={{ backgroundColor: 'transparent', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: '0.875rem' }}>{t.estimate}</button>
            <button onClick={() => scrollToSection(processRef)} style={{ backgroundColor: 'transparent', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: '0.875rem' }}>{t.process}</button>
            <button onClick={() => scrollToSection(whyUsRef)} style={{ backgroundColor: 'transparent', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: '0.875rem' }}>{t.whyUsNav}</button>
            <button onClick={() => scrollToSection(reviewsRef)} style={{ backgroundColor: 'transparent', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: '0.875rem' }}>{t.reviews}</button>
            <button onClick={() => scrollToSection(sellGoldRef)} style={{ backgroundColor: '#fbbf24', border: 'none', color: '#000000', cursor: 'pointer', fontSize: '0.875rem', padding: '0.5rem 1rem', borderRadius: '0.375rem', fontWeight: '600' }}>{t.sellGold}</button>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} style={{ backgroundColor: '#111827', color: '#ffffff', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #374151', cursor: 'pointer' }}>
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
        </div>
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
          <button onClick={() => scrollToSection(estimateRef)} style={{ backgroundColor: '#fbbf24', color: '#000000', fontWeight: 'bold', padding: '0.75rem 1.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>{t.getQuoteForYourGold}</button>
          <button onClick={() => scrollToSection(processRef)} style={{ backgroundColor: 'transparent', color: '#ffffff', fontWeight: 'bold', padding: '0.75rem 1.5rem', borderRadius: '0.375rem', border: '1px solid #374151', cursor: 'pointer', fontSize: '1rem' }}>{t.howItWorks}</button>
        </div>
      </section>

      {/* Estimate Section */}
      <section ref={estimateRef} style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1rem', borderTop: '1px solid #1f2937' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>{t.calcTitle}</h2>
        <p style={{ color: '#9ca3af', marginBottom: '3rem' }}>{t.calcSubtitle}</p>

        <div style={{ backgroundColor: '#111827', borderRadius: '0.75rem', padding: '2rem', border: '1px solid #1f2937', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>{t.weight} <span style={{ color: '#ef4444' }}>*</span></label>
              <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={t.weight} style={{ width: '100%', backgroundColor: '#1f2937', border: weight ? '1px solid #10b981' : '1px solid #374151', borderRadius: '0.375rem', padding: '0.75rem', color: '#ffffff' }} />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>{t.goldPurity}</label>
              <select id="purity" value={purity} onChange={(e) => setPurity(e.target.value)} style={{ width: '100%', backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '0.375rem', padding: '0.75rem', color: '#ffffff', cursor: 'pointer' }}>
                <option value="24">{t.carat24}</option>
                <option value="22">{t.carat22}</option>
                <option value="18">{t.carat18}</option>
                <option value="14">{t.carat14}</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>{t.mobileNumber} <span style={{ color: '#ef4444' }}>*</span></label>
              <input type="text" id="mobileNumber" value={mobileNumber} onChange={handleMobileChange} placeholder={t.enterMobile} maxLength="10" style={{ width: '100%', backgroundColor: '#1f2937', border: mobileError ? '2px solid #ef4444' : mobileNumber && !mobileError ? '1px solid #10b981' : '1px solid #374151', borderRadius: '0.375rem', padding: '0.75rem', color: '#ffffff' }} />
              {mobileError && <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{mobileError}</div>}
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
            <button onClick={() => { if (isFormValid) { alert(`Quote for ${weight}g of ${purity} Carat gold`); } }} disabled={!isFormValid} style={{ width: '100%', backgroundColor: isFormValid ? '#f59e0b' : '#6b7280', color: '#000000', fontWeight: 'bold', padding: '0.75rem', borderRadius: '0.375rem', border: 'none', marginTop: '1.5rem', cursor: isFormValid ? 'pointer' : 'not-allowed', fontSize: '1rem', opacity: isFormValid ? 1 : 0.6 }}>{t.getExactQuote}</button>
          </div>
        </div>

        {/* Pricing Table */}
        <div style={{ backgroundColor: '#111827', borderRadius: '0.75rem', padding: '3rem', border: '1px solid #1f2937' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>{t.pricingHeading}</h3>
          <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>{t.pricingSubtext}</p>
          <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>{t.noDedications}</p>
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
      </section>

      {/* Process, Why Us, Reviews, Sell Gold sections... CONTINUE PASTING BELOW */}

      {/* Footer + Floating WhatsApp */}
      <footer style={{ backgroundColor: '#0f0f0f', borderTop: '1px solid #1f2937', marginTop: '0', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', color: '#6b7280' }}>
          <p>© 2026 Carat Money India. All rights reserved.</p>
        </div>
      </footer>

      <a href="https://wa.me/918618542353?text=Hi%20Carat%20Money!%20I%20want%20to%20book%20an%20appointment%20to%20sell%20my%20gold." target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '2rem', right: '2rem', backgroundColor: '#25D366', color: '#ffffff', width: '3.5rem', height: '3.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', zIndex: 40, textDecoration: 'none' }} title="Chat on WhatsApp">
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default CaratMoney;

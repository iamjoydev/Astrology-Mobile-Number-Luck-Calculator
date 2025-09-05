'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MobileAnalyzer() {
  const [mobile, setMobile] = useState('');
  const [result, setResult] = useState(null);

  const analyzeNumber = () => {
    const digits = mobile.replace(/\D/g, '');
    if (!digits || digits.length < 1) {
      alert('দয়া করে মোবাইল নম্বর লিখুন!');
      return;
    }
    const lastDigit = parseInt(digits.slice(-1), 10);
    let profile = {};
    const data = {
      0: { planet:'কেতু/রাহু', overview:'শূন্য–বর্ধক: অস্থিরতা ও গোপন শক্তি', remedy:'কালো তিল দান করুন' },
      1: { planet:'সূর্য', overview:'নেতৃত্ব ও দৃঢ়তা', remedy:'রবিবার সূর্য আরাধনা' },
      2: { planet:'চন্দ্র', overview:'সম্পর্ক ও সৃজনশীলতা', remedy:'সোমবার দুধ-ফুল দান' },
      3: { planet:'বৃহস্পতি', overview:'জ্ঞান ও প্রসার', remedy:'বৃহস্পতিবার হলুদ দান' },
      4: { planet:'রাহু', overview:'প্রযুক্তি ও চতুরতা', remedy:'শনিবার কালো তিল' },
      5: { planet:'বুধ', overview:'যোগাযোগ ও বাণিজ্য', remedy:'বুধবার সবুজ দান' },
      6: { planet:'শুক্র', overview:'সৌন্দর্য ও স্বাচ্ছন্দ্য', remedy:'শুক্রবার সাদা ফুল' },
      7: { planet:'কেতু', overview:'আধ্যাত্ম ও গভীরতা', remedy:'মন্ত্র জপ' },
      8: { planet:'শনি', overview:'শৃঙ্খলা ও স্থিতি', remedy:'লোহার আংটি পরুন' },
      9: { planet:'মঙ্গল', overview:'শক্তি ও কর্মজীবন', remedy:'মঙ্গলবার হনুমান পাঠ' },
    };
    profile = data[lastDigit] || { planet: 'অজানা', overview:'দ্রষ্টব্য নেই', remedy:'যোগাযোগ করুন' };
    setResult({ lastDigit, ...profile });
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white shadow-xl rounded-2xl p-6">
      <h1 className="text-2xl font-bold text-center text-primary">মোবাইল নাম্বার তান্ত্রিক বিশ্লেষক 🔮</h1>
      <p className="text-sm text-slate-600 mt-2">নম্বরের শেষ অঙ্ক অনুযায়ী দ্রুত বিশ্লেষণ পান — ব্যবসা ও কর্মজীবনে কী সতর্কতা নেবেন ও টোটকা।</p>
      <input
        className="w-full mt-4 p-3 border rounded-lg"
        placeholder="উদাহরণ: +91 9876543210"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={analyzeNumber} className="mt-4 w-full bg-primary text-white p-3 rounded-lg">বিশ্লেষণ করুন</button>

      {result && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 bg-indigo-50 p-4 rounded-xl">
          <h2 className="text-lg font-bold">শেষ অঙ্ক: {result.lastDigit} — গ্রহ: {result.planet}</h2>
          <p className="mt-2">{result.overview}</p>
          <p className="mt-2 font-semibold">প্রতিকার: {result.remedy}</p>
        </motion.div>
      )}
    </div>
  );
}

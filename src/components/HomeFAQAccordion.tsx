import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  isSpecial?: boolean;
}

export default function HomeFAQAccordion() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.homeQ4'),
      answer: t('faq.homeA4'),
      isSpecial: true
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="group bg-gradient-to-r from-purple-500/8 via-cyan-500/5 to-purple-500/8 border border-white/8 rounded-xl overflow-hidden hover:border-cyan-500/25 transition-all duration-300"
          style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
          >
            <span className="text-lg font-medium text-white pr-8">
              {faq.question}
            </span>
            <div className="flex-shrink-0">
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-cyan-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              )}
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-5 pt-2">
              {faq.isSpecial ? (
                <div className="text-gray-300 leading-relaxed">
                  <p className="mb-4">{faq.answer}</p>
                  <Link
                    to="/faq"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    {t('faq.homeQ4Button')}
                  </Link>
                </div>
              ) : (
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

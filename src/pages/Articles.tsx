import { useTranslation } from 'react-i18next';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const articles = [
  {
    id: 1,
    title: 'The Future of AI Automations in Business',
    date: '2026-03-15',
    summary: 'Discover how artificial intelligence is transforming mundane processes into intelligent, seamless workflows.',
    content: 'Artificial Intelligence is no longer just a hype term. It is fundamentally reshaping how businesses handle their internal and external communications. From automating simple data entry tasks to fully conversational customer service representatives, AI agents are closing the gap between human responsiveness and robotic efficiency. Implementing these workflows requires careful orchestration, but the return on investment frequently exceeds early expectations...',
  },
  {
    id: 2,
    title: 'Understanding Answer Engine Optimization (AEO)',
    date: '2026-04-05',
    summary: 'Answer engines like Perplexity and ChatGPT are changing the SEO landscape. Here is what you need to know.',
    content: 'Classic Search Engine Optimization (SEO) focused on ranking a webpage via keywords and backlinks. However, modern users are moving towards generative Answer Engines (like ChatGPT, Claude, and Perplexity). Answer Engine Optimization (AEO) revolves around providing structured, factual, and easily extractable data. Techniques include robust FAQs, Schema.org implementations, and semantically pure HTML structure to ensure AI models confidently cite your site...',
  },
  {
    id: 3,
    title: 'Voice AI Agents: Replacing the Traditional Call Center',
    date: '2026-04-18',
    summary: 'How advanced voice synthesis and natural language processing are creating hyper-realistic automated call experiences.',
    content: 'Imagine a customer calling your business and speaking to an agent that never sleeps, never loses patience, and can access any piece of company data in milliseconds. That is the promise of Voice AI. Using advanced Text-to-Speech (TTS) paired with contextual LLM backbones, Voice Callers can book appointments, triage support requests, and seamlessly transfer critical issues to a human manager. The cost savings are monumental...',
  }
];

export default function Articles() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Neuritas-AI Articles",
    "description": "Insights on AI Automations, AEO, and Voice Agents.",
    "url": "https://neuritas-ai.com/articles"
  };

  return (
    <>
      <SEO 
        title="Articles & Insights" 
        description="Read the latest insights from Neuritas-AI regarding Artificial Intelligence, Automations, Answer Engine Optimization, and Voice Agents." 
        url="/articles"
        schema={schema}
      />
      <div className="relative min-h-screen bg-black pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.05),transparent_50%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Insights & Updates
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
                Latest Articles
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stay ahead of the curve with our deep dives into intelligent automations and digital strategy.
            </p>
          </div>

          <div className="space-y-12">
            {articles.map((article) => (
              <article key={article.id} className="group relative bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-purple-500/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={article.date}>{article.date}</time>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-lg text-gray-300 mb-6">
                  {article.summary}
                </p>

                <div className="prose prose-invert max-w-none text-gray-400">
                  <p>{article.content}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center text-cyan-400 font-medium cursor-pointer hover:text-cyan-300 transition-colors">
                  Read full article <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';

const articleImages = [
  'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&w=900',
];

const articleImageAlts = [
  'AI automation in business workflows',
  'Search engine and answer engine optimization',
  'Voice AI agent handling a customer call',
];

function ArticleBody({ text }: { text: string }) {
  return (
    <div className="space-y-4">
      {text.split('\n\n').map((block, i) => {
        if (block.startsWith('•') || block.includes('\n•')) {
          const lines = block.split('\n');
          return (
            <ul key={i} className="space-y-2 pl-2">
              {lines.map((line, j) => (
                <li key={j} className="flex gap-2 text-gray-400 leading-relaxed">
                  {line.startsWith('•') ? (
                    <>
                      <span className="text-cyan-500 flex-shrink-0">•</span>
                      <span>{line.slice(1).trim()}</span>
                    </>
                  ) : (
                    <span>{line}</span>
                  )}
                </li>
              ))}
            </ul>
          );
        }
        if (/^\d+\./.test(block)) {
          return (
            <p key={i} className="text-gray-400 leading-relaxed pl-2 border-l border-cyan-500/20">
              {block}
            </p>
          );
        }
        return (
          <p key={i} className="text-gray-400 leading-relaxed">
            {block}
          </p>
        );
      })}
    </div>
  );
}

export default function Articles() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<number[]>([]);

  const toggle = (id: number) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const articleKeys = [1, 2, 3];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Neuritas-AI Articles',
    description: 'Insights on AI Automations, AEO, and Voice Agents.',
    url: 'https://neuritas-ai.com/articles',
  };

  return (
    <>
      <SEO
        title={t('articles.title')}
        description={t('articles.subtitle')}
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
                {t('articles.badge')}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
                {t('articles.title')}
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('articles.subtitle')}
            </p>
          </div>

          <div className="space-y-12">
            {articleKeys.map((num, idx) => {
              const isOpen = expanded.includes(num);
              const title = t(`articles.article${num}Title`);
              const date = t(`articles.article${num}Date`);
              const summary = t(`articles.article${num}Summary`);
              const content = t(`articles.article${num}Content`);

              return (
                <article
                  key={num}
                  className="group relative bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-purple-500/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="relative h-52 md:h-64 w-full overflow-hidden">
                    <img
                      src={articleImages[idx]}
                      alt={articleImageAlts[idx]}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 scale-105 group-hover:scale-100 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={date}>{date}</time>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {title}
                    </h2>

                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {summary}
                    </p>

                    {isOpen && (
                      <div className="mt-2 mb-6 border-t border-white/5 pt-6">
                        <ArticleBody text={content} />
                      </div>
                    )}

                    <button
                      onClick={() => toggle(num)}
                      className="mt-2 flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
                    >
                      {isOpen ? (
                        <>
                          {t('articles.collapse')}
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          {t('articles.readFull')}
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

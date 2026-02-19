import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-cyan-400" />
          <span className="font-bold">NEURITAS-AI</span>
        </div>
        <p className="text-gray-500 text-sm">
          © 2026 Neuritas-AI. Intelligent Automation for the Future.
        </p>
      </div>
    </footer>
  );
}

import { Github, Linkedin, Twitter, TerminalSquare, Copyright } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-background-dark border-t border-surface-border relative overflow-hidden py-12">
            {/* Abstract Background */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-primary-500/10 blur-[100px] rounded-[100%] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

                <div className="mb-8 flex items-center justify-center gap-3">
                    <TerminalSquare className="text-primary-500" size={24} />
                    <span className="text-2xl font-mono font-black text-white tracking-widest uppercase">
                        ANIKET<span className="text-primary-500">_</span>JOSHI
                    </span>
                </div>

                <div className="flex space-x-6 mb-8">
                    <a
                        href="https://github.com/aniketljoshi"
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 flex items-center justify-center border border-surface-border bg-surface-dark text-gray-400 hover:text-white hover:border-primary-500 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] group"
                    >
                        <Github size={22} className="group-hover:drop-shadow-[0_0_8px_var(--color-primary-500)]" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aniketljoshi999"
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 flex items-center justify-center border border-surface-border bg-surface-dark text-gray-400 hover:text-[#0077b5] hover:border-[#0077b5] transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] group"
                    >
                        <Linkedin size={22} className="group-hover:drop-shadow-[0_0_8px_#0077b5]" />
                    </a>
                    <a
                        href="https://x.com/aniketljoshi"
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 flex items-center justify-center border border-surface-border bg-surface-dark text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] group"
                    >
                        <Twitter size={22} className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    </a>
                </div>

                <div className="text-center font-mono text-sm text-gray-500 max-w-xl mb-8 border-l-2 border-primary-500 pl-4">
                    <p className="mb-2 uppercase tracking-widest text-primary-400/80">Developed.with(Code);</p>
                    <p>
                        Vite <span className="text-gray-600">|</span> React <span className="text-gray-600">|</span> TailwindCSS <span className="text-gray-600">|</span> Framer Motion
                    </p>
                </div>

                <div className="w-full h-px bg-surface-border mb-8 max-w-sm" />

                <div className="flex items-center text-gray-500 text-xs font-mono uppercase tracking-widest">
                    <Copyright size={14} className="mr-2" />
                    <p>2026 ANIKET JOSHI. ALL_SYSTEMS_OPERATIONAL.</p>
                </div>
            </div>
        </footer>
    );
}

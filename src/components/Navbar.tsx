import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Certifications', href: '#certifications' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'glass-panel border-b-primary-500/30'
                : 'bg-transparent border-b border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer group">
                        <motion.div
                            whileHover={{ rotate: [0, -5, 5, -5, 5, 0], scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="w-12 h-12 flex items-center justify-center bg-surface-dark border-2 border-primary-500/50 group-hover:neon-border transition-all"
                        >
                            <span className="text-2xl font-mono font-black neon-text tracking-tighter">
                                AJ
                            </span>
                        </motion.div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-primary-400 uppercase tracking-widest text-[11px] font-bold transition-all duration-200 hover:tracking-[0.2em] relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_var(--color-primary-500)]"></span>
                                </a>
                            ))}
                            <div className="flex items-center space-x-5 border-l border-surface-border pl-6">
                                <a href="https://github.com/aniketljoshi" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary-400 transition-colors hover:drop-shadow-[0_0_8px_var(--color-primary-500)]">
                                    <Github size={18} />
                                </a>
                                <a href="https://www.linkedin.com/in/aniketljoshi999" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#0077b5] transition-colors">
                                    <Linkedin size={18} />
                                </a>
                                <a href="https://x.com/aniketljoshi" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                    <Twitter size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-[#0f172a] border-b border-gray-800"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center space-x-4 px-3 py-4 mt-4 border-t border-gray-800">
                            <a href="https://github.com/aniketljoshi" target="_blank" rel="noreferrer" className="text-gray-400">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/aniketljoshi999" target="_blank" rel="noreferrer" className="text-gray-400">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://x.com/aniketljoshi" target="_blank" rel="noreferrer" className="text-gray-400">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Github, Hexagon, TerminalSquare } from 'lucide-react';
import { useEffect, useState } from 'react';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4 } }
};

// Binary Rain Component
const BinaryRain = () => {
    const [drops, setDrops] = useState<{ x: number, delay: number, duration: number, seq: string }[]>([]);

    useEffect(() => {
        const generateSeq = () => Array.from({ length: 15 }, () => Math.random() > 0.5 ? '1' : '0').join('');
        const newDrops = Array.from({ length: 30 }).map(() => ({
            x: Math.random() * 100,
            delay: Math.random() * 5,
            duration: Math.random() * 5 + 5,
            seq: generateSeq()
        }));
        setDrops(newDrops);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.03]">
            {drops.map((drop, i) => (
                <motion.div
                    key={i}
                    initial={{ y: '-100vh' }}
                    animate={{ y: '100vh' }}
                    transition={{
                        duration: drop.duration,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: drop.delay
                    }}
                    className="absolute text-primary-500 font-mono text-sm font-bold flex flex-col items-center leading-none"
                    style={{ left: `${drop.x}vw` }}
                >
                    {drop.seq.split('').map((char, j) => (
                        <span key={j} className={j === drop.seq.length - 1 ? 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]' : ''}>{char}</span>
                    ))}
                </motion.div>
            ))}
        </div>
    );
};

export function Hero() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 border-b border-surface-border">
            {/* Cyber Grid Background Element */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(var(--color-surface-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-surface-border) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
            />

            {/* Binary Rain Background */}
            <BinaryRain />

            {/* Floating Tech Symbols Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {['</>', '{ }', ';;', '1010', '[ ]', '=>', '#', '()'].map((symbol, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: '120vh', x: `${Math.random() * 100}vw`, opacity: 0.1 }}
                        animate={{
                            y: '-20vh',
                            x: `${Math.random() * 100}vw`,
                            rotate: 360,
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: Math.random() * 15 + 15,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: Math.random() * 10
                        }}
                        className="absolute text-primary-500/20 font-mono text-2xl md:text-4xl font-black select-none"
                    >
                        {symbol}
                    </motion.div>
                ))}
            </div>

            <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] -left-64 w-96 h-96 bg-accent-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-left"
                    >
                        <motion.div variants={itemVariants} className="mb-6 flex flex-wrap gap-3">
                            {['Web3 Ninja ⚔️', '6x Azure Certified 🏅', 'Cloud Mastermind ☁️'].map((badge) => (
                                <span key={badge} className="px-3 py-1 text-[10px] uppercase tracking-widest font-mono text-primary-400 border border-primary-500/30 bg-primary-500/5 backdrop-blur-sm shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                                    {badge}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-8 border-l-[6px] border-primary-500 pl-6 relative">
                            <h1 className="text-5xl md:text-7xl font-mono font-black text-white tracking-tighter leading-none mb-4 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                Aniket <br /> <span className="neon-text glitch-text" data-text="Joshi">Joshi</span>
                            </h1>

                            <div className="text-lg font-mono text-gray-400 max-w-xl leading-relaxed">
                                <span className="text-primary-500">&gt;</span> initializing_profile... <br /><br />
                                <span className="typing-cursor">
                                    I turn copious amounts of coffee into scalable architectures. For over <span className="text-white font-bold">12+ years</span>, I've survived production incidents at 2 AM, argued with compilers, and built high-impact systems in Web2 and Web3 spaces. I engineer things to scale infinitely and secure them like Fort Knox 🔐. Fluent in full-stack dev, cloud ops, and dry sarcasm.
                                </span>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <a
                                href="#experience"
                                className="px-8 py-4 bg-transparent border border-primary-500 text-primary-400 font-mono font-bold uppercase tracking-widest text-sm hover:neon-border hover:bg-primary-500/10 transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
                            >
                                <span className="absolute w-2 h-full bg-primary-500 left-0 top-0 group-hover:w-full transition-all duration-300 opacity-20"></span>
                                Explore History <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                            </a>
                            <a
                                href="https://github.com/aniketljoshi"
                                target="_blank"
                                rel="noreferrer"
                                className="px-8 py-4 bg-surface-dark border border-surface-border text-gray-300 font-mono font-bold uppercase tracking-widest text-sm hover:border-gray-500 hover:text-white transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
                            >
                                <span className="absolute w-full h-0 bg-surface-border bottom-0 left-0 group-hover:h-full transition-all duration-300 -z-10"></span>
                                <Github size={18} /> GitHub
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right side abstract structural elements - Revamped Cyber Core */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="hidden lg:flex justify-center items-center relative h-[500px]"
                    >
                        <div className="relative w-80 h-80 flex items-center justify-center">
                            {/* Inner glowing core */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="absolute w-20 h-20 bg-primary-500/20 blur-xl rounded-full"
                            />

                            {/* Central Hexagon */}
                            <div className="absolute w-24 h-24 bg-surface-dark glass-panel border-2 border-primary-500 flex items-center justify-center z-20 shadow-[0_0_30px_rgba(0,240,255,0.4)] rotate-90">
                                <Hexagon size={40} className="text-primary-400 -rotate-90" />
                            </div>

                            {/* Ring 1 - Dashed fast orbit */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                                className="absolute w-48 h-48 border border-primary-500/40 rounded-full"
                                style={{ borderStyle: 'dashed', borderWidth: '2px' }}
                            >
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-surface-dark p-1 border border-primary-500 text-primary-400 rounded-sm">
                                    <TerminalSquare size={16} />
                                </div>
                            </motion.div>

                            {/* Ring 2 - Solid reverse orbit */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                                className="absolute w-64 h-64 border border-accent-500/30 rounded-full"
                            >
                                <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 bg-accent-500/20 border border-accent-400 flex items-center justify-center rounded-full shadow-[0_0_10px_var(--color-accent-500)]">
                                    <div className="w-2 h-2 bg-accent-400 rounded-full animate-ping" />
                                </div>
                                <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 bg-primary-500/20 border border-primary-400 flex items-center justify-center rounded-full shadow-[0_0_10px_var(--color-primary-500)]">
                                    <div className="w-2 h-2 bg-primary-400 rounded-full" />
                                </div>
                            </motion.div>

                            {/* Ring 3 - Outer thin dashed orbit */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                                className="absolute w-80 h-80 border border-surface-border rounded-full"
                                style={{ borderStyle: 'dotted', borderWidth: '2px' }}
                            />

                            {/* Floating code snippet panel */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="absolute -bottom-10 -right-10 w-48 glass-panel border border-primary-500/30 p-3 z-30 shadow-2xl"
                            >
                                <div className="flex gap-1 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-secondary-500 mt-0.5" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-0.5" />
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-0.5" />
                                </div>
                                <div className="font-mono text-[10px] text-gray-400 leading-tight">
                                    <span className="text-accent-400">const</span> <span className="text-primary-400">architect</span> = {'{'} <br />
                                    &nbsp;&nbsp;level: <span className="text-yellow-400">99</span>,<br />
                                    &nbsp;&nbsp;stack: [<span className="text-emerald-400">"Web2"</span>, <span className="text-emerald-400">"Web3"</span>, <span className="text-emerald-400">"Cloud"</span>]<br />
                                    {'};'}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

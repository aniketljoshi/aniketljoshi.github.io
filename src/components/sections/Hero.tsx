import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Github, Hexagon, TerminalSquare, Target, Activity, Wifi } from 'lucide-react';

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

// Cyber Radar Background Component
const CyberRadar = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
            {/* Center Container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px]">

                {/* Radar Grid/Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-primary-500/10" />
                    <div className="h-full w-[1px] absolute bg-primary-500/10" />
                </div>

                {/* Concentric Wireframe Rings */}
                <div className="radar-ring w-[20%] h-[20%] border-primary-500/20" />
                <div className="radar-ring w-[40%] h-[40%] border-primary-500/20 border-dashed" />
                <div className="radar-ring w-[60%] h-[60%] border-accent-500/10" />
                <div className="radar-ring w-[80%] h-[80%] border-primary-500/20 border-dotted" />
                <div className="radar-ring w-[100%] h-[100%] border-accent-500/5" />

                {/* Rotating Radar Sweep Gradient */}
                <div className="absolute inset-0 radar-sweep blur-[2px]" />

                {/* SVGs for connecting lines to nodes */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                    <line x1="50%" y1="50%" x2="30%" y2="20%" stroke="var(--color-primary-500)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                    <line x1="50%" y1="50%" x2="35%" y2="75%" stroke="var(--color-accent-500)" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
                    <line x1="50%" y1="50%" x2="61%" y2="79%" stroke="var(--color-primary-500)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                </svg>

                {/* Tracking Nodes / Blips with Icons and Text */}
                {[
                    { t: '20%', l: '30%', icon: Target, text: 'TGT-A' },
                    { t: '75%', l: '35%', icon: Activity, text: 'SYS-UP' },
                    { t: '79%', l: '61%', icon: Wifi, text: 'UPLINK' },
                ].map((pos, i) => (
                    <div key={i} className="absolute flex items-center gap-1 z-10" style={{ top: pos.t, left: pos.l }}>
                        <div className="relative w-2 h-2 bg-primary-400 rounded-full">
                            <div className="absolute inset-0 bg-primary-400 rounded-full animate-[radar-pulse_2s_infinite]" style={{ animationDelay: `${i * 0.5}s` }} />
                        </div>
                        {pos.icon && <pos.icon size={12} className="text-primary-500 opacity-60 ml-1" />}
                        {pos.text && <span className="text-[10px] font-mono text-primary-400/60 uppercase hidden md:inline">{pos.text}</span>}
                    </div>
                ))}

                {/* Central Wireframe Earth */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full shadow-[inset_0_0_30px_rgba(0,240,255,0.2)] border border-primary-500/40 flex items-center justify-center overflow-hidden z-20 bg-surface-darker/50 backdrop-blur-sm">
                    <div className="absolute w-[120%] h-[30%] border border-primary-500/30 rounded-[50%]" />
                    <div className="absolute w-[120%] h-[70%] border border-primary-500/20 rounded-[50%]" />
                    <div className="absolute w-[30%] h-[120%] border border-primary-500/30 rounded-[50%]" />
                    <div className="absolute w-[70%] h-[120%] border border-primary-500/20 rounded-[50%]" />
                    <div className="absolute w-full h-[1px] bg-primary-500/40" />
                    <div className="absolute h-full w-[1px] bg-primary-500/40" />
                </div>

                {/* Additional Telemetry specific to the globe */}
                <div className="absolute top-[calc(50%+7.5rem)] left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 z-20 min-w-max">
                    <span className="text-xs font-mono font-bold text-accent-400 glitch-text drop-shadow-[0_0_5px_rgba(230,0,54,0.5)]" data-text="DATA FLOW: 98%">DATA FLOW: 98%</span>
                    <span className="text-[10px] font-mono text-primary-400/80 uppercase">SYS.CORE.ACTIVE</span>
                </div>

                {/* Floating Telemetry Panels */}
                <div className="absolute top-[35%] right-[15%] border-r-2 border-primary-500/50 pr-2 text-right hidden md:block">
                    <div className="text-[10px] font-mono text-primary-400/80">LAT: 45.9822</div>
                    <div className="text-[10px] font-mono text-accent-400/80 mt-0.5">LON: -12.441</div>
                </div>
                <div className="absolute top-[15%] left-[15%] border-l-2 border-accent-500/50 pl-2 hidden md:block">
                    <div className="text-[10px] font-mono text-primary-400/80">SEC: ENCRYPTED</div>
                    <div className="text-[10px] font-mono text-white/60 mt-0.5">PING: 12ms</div>
                </div>
            </div>

            {/* Tactical HUD Corner Reticles */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary-500/30" />
            <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary-500/30" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary-500/30" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-primary-500/30" />
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

            {/* Cyber Radar HUD Background */}
            <CyberRadar />

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

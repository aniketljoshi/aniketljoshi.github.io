import { motion } from 'framer-motion';
import { Target, Trophy } from 'lucide-react';

const domains = [
    { name: 'BANKING // FIN', delay: 0 },
    { name: 'AVIATION // LOGISTICS', delay: 0.1 },
    { name: 'SUPPLY_CHAIN // TRANS', delay: 0.2 },
    { name: 'HEALTHCARE // MED', delay: 0.3 },
    { name: 'E_COMMERCE // RETAIL', delay: 0.4 },
    { name: 'ERP_SYSTEMS // ENTERPRISE', delay: 0.5 },
];

const achievements = [
    {
        title: 'REDUCED_AZURE_COSTS_BY_20%',
        description: 'Optimized resource allocation and computational usage across multiple cloud services.',
        icon: '🧮'
    },
    {
        title: 'ACCELERATED_CI_CD_BY_30%',
        description: 'Streamlined deployment cycles utilizing advanced containerized DevOps practices.',
        icon: '🚀'
    },
    {
        title: 'ENGINEERED_ENTERPRISE_BYOK',
        description: 'Designed secure key encryption strategies for stringent data protection (PCI compliant).',
        icon: '🔐'
    },
    {
        title: 'ARCHITECTED_98+_REUSABLE_COMPONENTS',
        description: 'Established a comprehensive modular library for rapid application scaling.',
        icon: '🧰'
    },
    {
        title: 'RECOGNIZED:"SHOUT-OUT"_AWARD',
        description: 'Awarded for outstanding technical contributions and architectural oversight at Tavisca.',
        icon: '🏅'
    }
];

export function DomainsAchievements() {
    return (
        <section id="achievements" className="py-24 bg-background-darker relative z-10 border-b border-surface-border">
            {/* Background Matrix-like glow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,var(--color-accent-500)_0%,transparent_50%)] opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-16">

                    {/* Domains Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 border-l-4 border-accent-500 pl-4"
                        >
                            <h2 className="text-3xl font-mono font-black text-white flex items-center gap-3 tracking-widest uppercase">
                                <Target className="text-accent-400" size={28} />
                                OPERATIONAL.DOMAINS
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {domains.map((domain, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.02 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: domain.delay }}
                                    className="bg-surface-dark border border-surface-border p-4 text-gray-400 font-mono text-xs hover:border-accent-500 hover:text-white transition-all shadow-[0_4px_15px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                                >
                                    <div className="absolute left-0 top-0 w-1 h-full bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="opacity-50 group-hover:opacity-100 group-hover:text-accent-400 mr-2 transition-colors">&gt;</span>
                                    {domain.name}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 border-l-4 border-secondary-500 pl-4"
                        >
                            <h2 className="text-3xl font-mono font-black text-white flex items-center gap-3 tracking-widest uppercase">
                                <Trophy className="text-secondary-400" size={28} />
                                KEY.MILESTONES
                            </h2>
                        </motion.div>

                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex glass-panel p-4 hover:border-secondary-500 transition-all group relative overflow-hidden"
                                >
                                    <div className="flex-shrink-0 mr-4 z-10">
                                        <span className="text-2xl pt-1 block grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all transform group-hover:scale-110">
                                            {achievement.icon}
                                        </span>
                                    </div>
                                    <div className="z-10">
                                        <h3 className="font-mono text-sm font-bold text-gray-300 group-hover:text-secondary-400 transition-colors">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-xs font-sans text-gray-500 mt-2 leading-relaxed">
                                            {achievement.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

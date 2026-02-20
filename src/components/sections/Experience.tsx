import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        company: 'Vanderlande (Toyota Group)',
        role: 'Software Architect',
        period: 'May 2023 – Present',
        location: 'Pune, India',
        description: 'Built AI-powered search using RAG pipelines, migrated secure services in Azure, integrated with Unity Catalog, and led containerized MSSQL infra rollouts.',
        logo: 'assets/logos/logo_page1_1.png'
    },
    {
        company: 'Caizin',
        role: 'Technical Architect',
        period: 'Jun 2022 – May 2023',
        location: 'Pune, India',
        description: 'Crafted reusable architectural frameworks, and implemented CI/CD for client projects with advanced visual modeling.',
        logo: 'assets/logos/logo_page1_2.png'
    },
    {
        company: 'GoKloud',
        role: 'Senior Software Engineer',
        period: 'Jun 2021 – May 2022',
        location: 'Pune, India',
        description: 'Standardized clean code practices, guided architecture, and prepared teams for cloud-native applications deployments.',
        logo: 'assets/logos/logo_page2_1.png'
    },
    {
        company: 'MediaAgility',
        role: 'Senior Developer',
        period: 'Mar 2021 – Jun 2021',
        location: 'Pune, India',
        description: 'Led the design, build, and implementation of scalable, secure cloud-native products using AI/ML frameworks and best practices.',
        logo: 'assets/logos/logo_page2_2.jpeg'
    },
    {
        company: 'Tavisca, JPMorgan',
        role: 'Technology Principal',
        period: 'Jul 2019 – Mar 2021',
        location: 'Pune, India',
        description: 'Built encryption SDK with BYOK, launched PCI UI and migrated legacy infra to Nextgen-Kubernetes patterns.',
        logo: 'assets/logos/logo_page2_3.jpeg'
    },
    {
        company: 'UPS Logistics Pvt Ltd',
        role: 'Senior Developer',
        period: 'Oct 2017 – Jun 2019',
        location: 'Pune, India',
        description: 'Designed reusable AngularJS components, optimized service queues and SQL models to support high-load events.',
        logo: 'assets/logos/logo_page2_4.jpeg'
    },
    {
        company: 'LogicalDNA Solutions',
        role: 'Full Stack Developer',
        period: 'Jun 2016 – Oct 2017',
        location: 'Pune, India',
        description: 'Delivered full-stack .NET and AngularJS solutions, contributing to end-to-end development lifecycles.',
        logo: 'assets/logos/logo_page2_5.jpeg'
    },
    {
        company: 'Econsign Soft',
        role: 'Backend Developer',
        period: 'Sep 2015 – May 2016',
        location: 'Pune, India',
        description: 'Built scalable backend services and participated in .NET application development cycles.',
        logo: 'assets/logos/logo_page2_6.jpeg'
    },
    {
        company: 'Noetic Systems Pvt Ltd',
        role: 'Developer',
        period: 'Jun 2014 – Aug 2015',
        location: 'Pune, India',
        description: 'Contributed to early-stage .NET projects, focusing on core logic, UI integration, and agile sprints.',
        logo: 'assets/logos/logo_page2_7.jpeg'
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-background-dark relative z-10 border-b border-surface-border">
            {/* Cyber Grid abstract */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-border shadow-[0_0_15px_rgba(255,255,255,0.05)] opacity-50 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center p-3 mb-6 bg-surface-dark border border-surface-border"
                    >
                        <Briefcase className="text-primary-500" size={32} />
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-mono font-black text-white tracking-widest uppercase mb-4">
                        FILE_ARCHIVE:<span className="neon-text">EXPERIENCE</span>
                    </h2>
                    <p className="text-gray-500 font-mono text-sm max-w-2xl mx-auto">
                        &gt; loading_career_history... <br /> Twelve plus years building robust systems.
                    </p>
                </div>

                <div className="relative border-l-2 border-surface-border ml-3 md:ml-0 md:border-none">
                    {/* Center line for larger screens */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-surface-border shadow-[0_0_10px_var(--color-surface-border)]" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`mb-12 relative flex md:justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Connector line for mobile */}
                            <div className="md:hidden absolute left-[-13px] top-8 w-6 h-[2px] bg-primary-500" />
                            {/* Glowing central node */}
                            <div className="absolute left-[-6px] md:left-1/2 md:-ml-1.5 top-6 w-3 h-3 bg-primary-500 shadow-[0_0_10px_var(--color-primary-500)] animate-pulse" />

                            <div className="w-full pl-6 md:pl-0 md:w-[45%]">
                                <div className="glass-panel p-6 border-l-[3px] border-l-primary-500 hover:border-r-[3px] hover:border-r-accent-500 hover:border-l-primary-400 transition-all duration-300 relative group overflow-hidden">
                                    {/* Background cyber accent */}
                                    <div className="absolute block top-0 left-0 w-full h-[1px] bg-primary-500/20" />
                                    <div className="absolute block bottom-0 right-0 w-full h-[1px] bg-accent-500/20" />

                                    <div className="flex items-center space-x-4 mb-4">
                                        {exp.logo && (
                                            <div className="w-12 h-12 bg-white flex items-center justify-center p-1 rounded-sm border border-surface-border group-hover:border-primary-500 transition-colors">
                                                <img src={exp.logo} alt={`${exp.company} logo`} className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                                            </div>
                                        )}
                                        <div>
                                            <h3 className="text-xl font-mono font-bold text-white tracking-wide">{exp.role}</h3>
                                            <h4 className="text-sm font-bold text-primary-400 font-mono tracking-widest uppercase">{exp.company}</h4>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 mb-4 text-xs font-mono text-gray-400">
                                        <div className="flex items-center">
                                            <span className="text-accent-400 mr-2">📅</span>
                                            {exp.period}
                                        </div>
                                        <div className="flex items-center mt-1 sm:mt-0">
                                            <span className="text-secondary-400 mr-2">📍</span>
                                            {exp.location}
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-400 leading-relaxed font-sans">{exp.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

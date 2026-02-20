import { motion } from 'framer-motion';
import {
    SiDotnet, SiTypescript, SiSolidity,
    SiAngular, SiTailwindcss, SiHtml5, SiSass,
    SiGooglecloud, SiKubernetes, SiTerraform, SiJenkins,
    SiEthereum, SiWeb3Dotjs, SiOpenai, SiLangchain,
    SiPostgresql, SiRedis, SiApachekafka, SiGraphql, SiDapr
} from 'react-icons/si';
import { FaJava, FaNodeJs, FaReact, FaAws, FaDocker, FaRobot, FaCoins, FaBrain, FaMicrosoft, FaDatabase, FaCode } from 'react-icons/fa';
import { Cpu, Globe, Database, Cloud, ShieldCheck, TerminalSquare } from 'lucide-react';

const skillCategories = [
    {
        title: "BACKEND_&_LANGUAGES",
        icon: <TerminalSquare size={20} className="text-primary-400" />,
        skills: [
            { name: ".NET 8", icon: <SiDotnet className="text-[#512BD4]" /> },
            { name: "C#", icon: <FaCode className="text-[#239120]" /> },
            { name: "Java", icon: <FaJava className="text-[#f89820]" /> },
            { name: "NodeJs", icon: <FaNodeJs className="text-[#339933]" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
            { name: "Solidity", icon: <SiSolidity className="text-gray-300" /> }
        ]
    },
    {
        title: "FRONTEND_SYSTEMS",
        icon: <Globe size={20} className="text-primary-500" />,
        skills: [
            { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
            { name: "Angular 15+", icon: <SiAngular className="text-[#DD0031]" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
            { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
            { name: "SCSS", icon: <SiSass className="text-[#CC6699]" /> }
        ]
    },
    {
        title: "CLOUD_&_DEVOPS",
        icon: <Cloud size={20} className="text-accent-400" />,
        skills: [
            { name: "Azure", icon: <FaMicrosoft className="text-[#0078D4]" /> },
            { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
            { name: "GCP", icon: <SiGooglecloud className="text-[#4285F4]" /> },
            { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
            { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
            { name: "Terraform", icon: <SiTerraform className="text-[#7B42BC]" /> },
            { name: "Jenkins", icon: <SiJenkins className="text-[#D24939]" /> }
        ]
    },
    {
        title: "WEB3_&_BLOCKCHAIN",
        icon: <ShieldCheck size={20} className="text-secondary-400" />,
        skills: [
            { name: "Smart Contracts", icon: <SiEthereum className="text-[#888888]" /> },
            { name: "Web3.js", icon: <SiWeb3Dotjs className="text-[#F16822]" /> },
            { name: "Tokenization", icon: <FaCoins className="text-yellow-500" /> }
        ]
    },
    {
        title: "AI_&_GENERATIVE",
        icon: <Cpu size={20} className="text-primary-600" />,
        skills: [
            { name: "Azure OpenAI", icon: <SiOpenai className="text-white" /> },
            { name: "LangChain", icon: <SiLangchain className="text-green-500" /> },
            { name: "RAG", icon: <FaBrain className="text-pink-400" /> },
            { name: "Agentic AI", icon: <FaRobot className="text-primary-500" /> }
        ]
    },
    {
        title: "DATABASES_&_INFRA",
        icon: <Database size={20} className="text-accent-500" />,
        skills: [
            { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
            { name: "MSSQL", icon: <FaDatabase className="text-[#CC292B]" /> },
            { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
            { name: "Kafka", icon: <SiApachekafka className="text-gray-300" /> },
            { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> },
            { name: "Dapr", icon: <SiDapr className="text-blue-300" /> }
        ]
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-background-dark relative z-10 border-b border-surface-border">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-surface-dark)_0%,transparent_100%)] opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 border-l-4 border-primary-500 pl-4">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-5xl font-mono font-black text-white uppercase tracking-tighter"
                    >
                        <span className="neon-text">SYS.</span>ARSENAL
                    </motion.h2>
                    <p className="text-gray-500 font-mono text-sm mt-2">&gt; loaded_tech_stack_dependencies</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-6 group hover:neon-border transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Scanning line animation */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary-500/50 shadow-[0_0_10px_var(--color-primary-500)] -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite]" />

                            <div className="flex items-center gap-3 mb-6 border-b border-surface-border pb-4">
                                <div className="p-2 bg-surface-dark border border-surface-border group-hover:border-primary-500/50 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-sm font-mono font-bold text-gray-300 group-hover:text-white transition-colors tracking-widest">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span
                                        key={skill.name}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-surface-dark text-gray-400 text-xs font-mono font-medium border border-surface-border hover:border-primary-500/50 hover:text-white transition-colors cursor-default"
                                    >
                                        <span className="text-sm grayscale group-hover:grayscale-0 transition-all duration-500">{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

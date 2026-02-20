import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
    {
        title: 'Microsoft Certified: Azure Solutions Architect Expert',
        issuer: 'Microsoft',
        date: 'Issued Aug 2025 · Expires Aug 2026',
        credentialId: 'C8703161466427FD',
        link: 'https://learn.microsoft.com/api/credentials/share/en-us/AniketJoshi999/C8703161466427FD?sharingId=FEEF5CDE0CFA77D3',
        logo: 'assets/logos/certifications/AZ-305.png'
    },
    {
        title: 'Microsoft Certified: DevOps Engineer Expert',
        issuer: 'Microsoft',
        date: 'Issued Aug 2025 · Expires Aug 2026',
        credentialId: '6482CF00991692F5',
        link: 'https://learn.microsoft.com/api/credentials/share/en-us/AniketJoshi999/6482CF00991692F5?sharingId=FEEF5CDE0CFA77D3',
        logo: 'assets/logos/certifications/AZ-400.png'
    },
    {
        title: 'Microsoft Certified: Azure AI Engineer Associate',
        issuer: 'Microsoft',
        date: 'Issued Aug 2025 · Expires Aug 2026',
        credentialId: 'AFBD9B91FE41D2FC',
        link: 'https://learn.microsoft.com/api/credentials/share/en-us/AniketJoshi999/AFBD9B91FE41D2FC?sharingId=FEEF5CDE0CFA77D3',
        logo: 'assets/logos/certifications/AI-102.png'
    },
    {
        title: 'Microsoft Certified: Azure Developer Associate',
        issuer: 'Microsoft',
        date: 'Issued Aug 2025 · Expires Aug 2026',
        credentialId: 'A19153F2A3D15AA1',
        link: 'https://learn.microsoft.com/api/credentials/share/en-us/AniketJoshi999/A19153F2A3D15AA1?sharingId=FEEF5CDE0CFA77D3',
        logo: 'assets/logos/certifications/AZ-204.png'
    },
    {
        title: 'Microsoft Certified: Azure Administrator Associate',
        issuer: 'Microsoft',
        date: 'Issued Aug 2025 · Expires Aug 2026',
        credentialId: '80C59DEA9FB46D38',
        link: 'https://learn.microsoft.com/api/credentials/share/en-us/AniketJoshi999/80C59DEA9FB46D38?sharingId=FEEF5CDE0CFA77D3',
        logo: 'assets/logos/certifications/AZ-104.png'
    },
    {
        title: 'Microsoft Certified: Azure AI Fundamentals',
        issuer: 'Microsoft',
        date: 'Issued Aug 2025',
        credentialId: '967A091FD115995E',
        link: 'https://learn.microsoft.com/api/credentials/share/en-us/AniketJoshi999/967A091FD115995E?sharingId=FEEF5CDE0CFA77D3',
        logo: 'assets/logos/certifications/AI-900.png'
    }
];

export function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-background-darker relative z-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring" }}
                        className="inline-flex items-center justify-center border border-primary-500 p-4 mb-4 bg-primary-500/10 shadow-[0_0_15px_var(--color-primary-500)]"
                    >
                        <Award className="text-primary-400" size={40} />
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-mono font-black text-white uppercase tracking-widest mt-2 mb-4">
                        VALIDATED_CREDENTIALS
                    </h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full shadow-[0_0_10px_var(--color-primary-500)]" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.credentialId}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface-dark border border-surface-border p-6 relative group overflow-hidden"
                        >
                            {/* Scanning overlay effect */}
                            <div className="absolute inset-0 bg-primary-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                            {/* Cyber corners */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary-500" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary-500" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary-500" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-16 h-16 bg-white shrink-0 p-1 flex items-center justify-center border border-surface-border">
                                        <img src={cert.logo} alt={cert.title} className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-500 hover:text-primary-400 transition-colors p-2 bg-surface-darker border border-surface-border"
                                        title="Verify Credential"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="font-mono font-bold text-lg text-white mb-2 leading-tight tracking-wide">{cert.title}</h3>
                                    <p className="text-sm font-mono text-primary-500 uppercase tracking-widest mb-4">{cert.issuer}</p>
                                </div>

                                <div className="mt-4 pt-4 border-t border-surface-border text-xs font-mono text-gray-500 space-y-2">
                                    <p className="flex justify-between">
                                        <span>DATE:</span>
                                        <span className="text-gray-400">{cert.date}</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>CRED_ID:</span>
                                        <span className="text-accent-400 tracking-wider font-bold">#{cert.credentialId}</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { Download, Code2, Sparkles, Webhook, GraduationCap, Handshake, BrainCircuit } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_STATS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import { skills } from '../../data/skills';
import { BsPeople } from 'react-icons/bs';

const About = () => {

    const enhancedBio = [
        "I’m a software engineer applicant currently pursuing a Master of Computer Science Degree program, where I am actively learning about Database Systems, Data Structures, Operating Systems, etc.",
        "The experience I hava as a Software Project Manager shaped how I approach engineering practices today. I not just write code, but build scalable, maintainable solutions that align with real product and business outcomes.",
        "I now focus on frontend and full-stack development using React, JavaScript/TypeScript, Spring Boot, and RESTful APIs, with an emphasis on clean architecture, performance, and system design thinking.",
        "I’m actively seeking Associate Software Engineer or Associate Full-Stack Developer roles where I can contribute to industrial production systems while growing in a fast-paced engineering environment."
    ];

    return (
        <section id="about" className="relative py-20 bg-black overflow-hidden">
            <RadialGradientBackground variant="about" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

                    {/* Left Column */}
                    <div className="flex flex-col gap-12">

                        <div className="flex flex-col gap-8">

                            <FadeIn delay={60}>
                                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                                    <Code2 className="w-4 h-4 text-primary" />
                                    <span className="text-sm text-primary font-medium">
                                        Frontend / Full-Stack Software Engineer
                                    </span>
                                    <Sparkles className="w-4 h-4 text-primary" />
                                </div>
                            </FadeIn>

                            <FadeIn delay={100}>
                                <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                                    Engineering with Product Thinking and Execution Focus
                                </h2>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <div className="flex flex-col gap-4">
                                    {enhancedBio.map((paragraph, index) => (
                                        <p key={index} className="text-base text-white/70 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </FadeIn>

                        </div>

                        <FadeIn delay={300}>
                            <div className="grid grid-cols-3 gap-8">
                                {ABOUT_STATS.map((stat, index) => (
                                    <div key={index} className="relative">
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>
                                        <div className="text-3xl font-normal text-white mb-2 font-mono">
                                            {stat.value}
                                        </div>
                                        <p className="text-sm text-white/60 leading-snug">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <button
                                onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                                className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group"
                            >
                                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                                Download Resume
                            </button>
                        </FadeIn>

                    </div>

                    {/* Right Column */}
                    <FadeIn delay={200}>
                        <div className="grid grid-cols-2 gap-4">

                            {/* Experience */}
                            <div className="col-span-2 relative gap-4">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50"></div>

                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <GraduationCap className="w-6 h-6 text-primary" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                Experience
                                            </h3>

                                            <p className="text-sm text-white/70 leading-relaxed">
                                                2+ years in software Project Management within Agile delivery environments, where I coordinated cross-functional teams, translated requirements into execution plans, and ensured on-time delivery of production systems.
                                                <br /><br />
                                                This foundation now strengthens my transition into software engineering — giving me a strong understanding of system constraints, product requirements, and real-world delivery expectations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Problem Solving */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50"></div>

                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">

                                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                        <BrainCircuit className="w-5 h-5 text-primary" />
                                    </div>

                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        Problem Solving
                                    </h3>

                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Breaking down complex product requirements into scalable, maintainable engineering solutions with a focus on usability, performance, and system design clarity.
                                    </p>
                                </div>
                            </div>

                            {/* Team Work */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50"></div>

                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">

                                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                        <BsPeople className="w-5 h-5 text-primary" />
                                    </div>

                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        Collaboration
                                    </h3>

                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Experienced in cross-functional team environments, bridging communication between technical implementation and business requirements to ensure alignment and delivery efficiency.
                                    </p>
                                </div>
                            </div>

                            {/* API Integration */}
                            <div className="col-span-2 relative group">

                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50"></div>

                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">

                                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                        <Handshake className="w-5 h-5 text-primary" />
                                    </div>

                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        API & System Integration
                                    </h3>

                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Integrating frontend applications with RESTful APIs, managing data flow, authentication patterns, and dynamic state handling to build responsive and data-driven web applications.
                                    </p>

                                </div>
                            </div>

                        </div>
                    </FadeIn>
                </div>

                {/* Skills Section (unchanged) */}
                <FadeIn delay={500}>
                    <div className="flex flex-col items-center gap-8">
                        <div className="text-center">
                            <h3 className="text-2xl font-normal text-white mb-2">
                                Tech-Stack and Expertise
                            </h3>
                            <p className="text-sm text-white/60">
                                Technologies and tools I use to design and develop modern web applications.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-4xl">
                            {skills.slice(0, 10).map((skill, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-120"
                                >
                                    <skill.icon className="text-3xl text-primary" />
                                    <div className="text-sm text-white/80 font-medium text-center">
                                        {skill.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};

export default About;
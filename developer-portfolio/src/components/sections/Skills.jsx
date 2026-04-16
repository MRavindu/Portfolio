import { skills } from "../../data/skills";
import * as Icons from 'lucide-react'
import FadeIn from "../animations/FadeIn";

const Skills = () => {

    // Categorize skills with better structure
    const skillCategories = {
        'Frontend Engineering': {
            description: 'Building responsive and interactive user interfaces using modern frameworks and UI systems.',
            skills: [
                'HTML',
                'JavaScript',
                'TypeScript',
                'React.js',
                'Next.js',
                'Angular.js',
                'Tailwind CSS',
                'Bootstrap',
                'Redux',
            ]
        },
        'Backend & API Development': {
            description: 'Designing backend services, REST APIs, and handling data flow, persistence, and business logic.',
            skills: [
                'Java',
                'Spring Boot',
                'Node.js',
                'Express.js',
                'PHP',
                'Python',
                '.NET',
                'MySQL',
                'MongoDB',
            ]
        },
        'Tools, Workflow & Collaboration': {
            description: 'Tools and platforms used for development workflow, version control, testing, and team collaboration.',
            skills: [
                'Git & GitHub',
                'Postman',
                'Jira',
                'VS Code',
                'IntelliJ IDEA',
                'Figma',
                'Wordpress',
            ]
        },
    };

    // Map skill names to actual objects
    const getSkillsFromNames = (names) =>
        names.map(name => skills.find(s => s.name === name)).filter(Boolean);

    const getProficiencyLevel = (level) => {
        const levels = {
            'Expert': 85,
            'Advanced': 65,
            'Intermediate': 50,
            'Beginner': 30,
        }
        return levels[level] || 25;
    };

    const getLevelColor = (level) => {
        const colors = {
            'Expert': 'text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30',
            'Advanced': 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',
            'Intermediate': 'text-[#10b981] bg-[#10b981]/20 border-[#10b981]/30',
            'Beginner': 'text-[#F4C430] bg-[#F4C430]/20 border-[#F4C430]/30',
        }
        return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    };

    return (
        <section id="skills" className="relative py-20 bg-black overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <FadeIn delay={100}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                            <Icons.Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">Technical Capabilities</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
                            Skills & Technologies
                        </h2>

                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Technologies I use to design, build, and deliver scalable web applications, with a focus on real-world implementation and system reliability.
                        </p>
                    </div>
                </FadeIn>

                {/* Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {Object.entries(skillCategories).map(([category, data], categoryIndex) => {

                        const categorySkills = getSkillsFromNames(data.skills);

                        return (
                            <FadeIn key={category} delay={categoryIndex * 100}>
                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">

                                    {/* Title */}
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-1 h-8 bg-linear-to-b from-primary/30 to-primary/10 rounded-full"></div>
                                            <h3 className="text-xl font-medium text-white">{category}</h3>
                                        </div>

                                        {/* NEW: Context Description */}
                                        <p className="text-xs text-white/50 leading-relaxed pl-4">
                                            {data.description}
                                        </p>
                                    </div>

                                    {/* Skills */}
                                    <div className="space-y-5 mt-6">
                                        {categorySkills.map((skill) => {
                                            const IconComponent = Icons[skill.icon] || Icons.Code2;
                                            const proficiency = getProficiencyLevel(skill.level);

                                            return (
                                                <div key={skill.id} className="space-y-2">

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2 bg-white/5 rounded-lg">
                                                                <IconComponent className="w-4 h-4 text-primary" />
                                                            </div>

                                                            <div>
                                                                <div className="text-sm font-medium text-white">
                                                                    {skill.name}
                                                                </div>

                                                                <div className="text-xs text-white/50">
                                                                    {skill.experience}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                                                            {skill.level}
                                                        </span>
                                                    </div>

                                                    <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                        <div
                                                            className="absolute top-0 left-0 h-full bg-linear-to-r from-primary/10 to-primary/80 rounded-full transition-all duration-1000 ease-out"
                                                            style={{ width: `${proficiency}%` }}
                                                        ></div>
                                                    </div>

                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Skills;
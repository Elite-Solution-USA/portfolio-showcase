import { projects, Project } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import {
    SunriseBailSimulator,
    NancyBeautySimulator,
    NursingAISimulator,
    OceanMarineSimulator,
    GenericSimulator,
} from '@/components/DemoSimulators';
import { notFound } from 'next/navigation';

// Pre-build all project slugs at build time (static generation)
export async function generateStaticParams() {
    return projects.map(p => ({ slug: p.slug }));
}

// Dynamic SEO metadata per project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find(p => p.slug === slug);
    if (!project) return {};
    return {
        title: `${project.name} — Project Detail | Elite Solution USA LLC`,
        description: project.tagline,
        openGraph: {
            title: project.name,
            description: project.tagline,
            type: 'website',
        },
    };
}

// Map project IDs to their custom demo simulators
function getSimulator(project: Project) {
    switch (project.id) {
        case 'sunrise-bail': return <SunriseBailSimulator />;
        case 'nancy-beauty': return <NancyBeautySimulator />;
        case 'nursing-study': return <NursingAISimulator />;
        case 'ocean-marine': return <OceanMarineSimulator />;
        default: return <GenericSimulator project={project} />;
    }
}

// Next.js 15: params is a Promise — must be awaited
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find(p => p.slug === slug);
    if (!project) notFound();
    return <ProjectDetailLayout project={project!} simulator={getSimulator(project!)} />;
}

import { projects } from '@/data/projects';
import { ProjectDetailLayout } from '@/components/ProjectDetailLayout';
import {
    SunriseBailSimulator,
    NancyBeautySimulator,
    NursingAISimulator,
    OceanMarineSimulator,
    GenericSimulator,
} from '@/components/DemoSimulators';
import { notFound } from 'next/navigation';

// Pre-build all project slugs at build time
export async function generateStaticParams() {
    return projects.map(p => ({ slug: p.slug }));
}

// Dynamic SEO metadata per project
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const project = projects.find(p => p.slug === params.slug);
    if (!project) return {};
    return {
        title: `${project.name} — Project Detail | Elite Solution USA LLC`,
        description: project.tagline,
    };
}

// Map project IDs to their custom demo simulators
function getSimulator(project: ReturnType<typeof projects[0]['id'] extends string ? typeof projects.find : never>) {
    if (!project) return null;
    switch (project.id) {
        case 'sunrise-bail': return <SunriseBailSimulator />;
        case 'nancy-beauty': return <NancyBeautySimulator />;
        case 'nursing-study': return <NursingAISimulator />;
        case 'ocean-marine': return <OceanMarineSimulator />;
        default: return <GenericSimulator project={project} />;
    }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find(p => p.slug === params.slug);
    if (!project) notFound();
    return <ProjectDetailLayout project={project!} simulator={getSimulator(project!)} />;
}

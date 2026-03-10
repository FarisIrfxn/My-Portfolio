import { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  layout?: 'grid' | 'list';
};

export default function ProjectCard({ project, layout = 'grid' }: ProjectCardProps) {
  const isList = layout === 'list';
  
  return (
    <div className={isList ? "project-detail-card" : "project-card"}>
      <div className="project-tag">{project.tag}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      {isList && project.impact && (
        <div className="project-impact-box">
          <strong>Impact:</strong> {project.impact}
        </div>
      )}

      <div className={isList ? "project-tech-tags" : "project-tech"}>
        {isList ? (
          project.tech.map((t, i) => (
            <span key={i} className="tech-badge">{t}</span>
          ))
        ) : (
          project.tech.join(' • ')
        )}
      </div>
    </div>
  );
}

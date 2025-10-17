import Button from "./Button";

export default function ProjectsSidebar({
    onStartAddProject,
    onSelectProject,
    projects,
    selectedProjectId,
}) {
    return (
        <aside className="w-full md:w-72 h-screen px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl flex flex-col">
            <h2 className="mb-8 font-bold uppercase text-lg md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="mt-8 flex-1 overflow-y-auto">
                {projects.map(project => {
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

                    if (project.id === selectedProjectId) {
                        cssClasses += ' bg-stone-800 text-stone-200'
                    } else {
                        cssClasses += ' text-stone-400'
                    }

                    return (
                        <li key={project.id}>
                            <button
                                className={cssClasses}
                                onClick={() => onSelectProject(project.id)}>
                                {project.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}
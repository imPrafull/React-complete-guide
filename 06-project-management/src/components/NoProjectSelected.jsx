import noProjectImage from '../assets/no-projects.png'
import Button from './Button'

export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="mt-16 md:mt-24 text-center w-full max-w-2xl mx-auto">
            <img src={noProjectImage} alt="An empty task list" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-lg md:text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4 px-4">Select a project or get started with a new one</p>
            <p className="mt-8">
                <Button onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>
    )
}
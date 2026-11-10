import React, { useRef } from 'react';
import { PROJECTS } from '../constants';

function ProjectsSection() {
    const videoRefs = useRef([]);

    const playVideo = (index) => {
        videoRefs.current[index]?.play().catch((error) => {
            console.warn('Video playback failed:', error);
        });
    };

    const pauseVideo = (index) => {
        videoRefs.current[index]?.pause();
    };

    return (
        <div id="projects">
            <h1 className="sub-title">PROJECTS</h1>
            <div className="projects-container">
                {Object.values(PROJECTS).map((project, index) => (
                    <div
                        className="projects-section"
                        key={project.title}
                        onMouseEnter={() => playVideo(index)}
                        onMouseLeave={() => pauseVideo(index)}
                    >
                        <div className='img-container'>
                            {project.image.toLowerCase().endsWith('.mp4') ? (
                                <video
                                    muted loop playsInline
                                    ref={(video) => {
                                        videoRefs.current[index] = video;
                                    }}
                                >
                                    <source src={project.image} type="video/mp4" />
                                </video>
                            ) : project.image.toLowerCase().endsWith('.png') ? (
                                <img
                                    src={project.image}
                                    className="ux-img"
                                    alt={project.title}
                                />
                            ) : null}
                        </div>
                        <div className="project-info">
                            <div className="project-header">
                                <h2>{project.title}</h2>
                                <div>
                                    {project.technology.map((technology) => (
                                        <div className="technology-card">
                                            <img
                                                src={technology.image}
                                                alt=""
                                            />
                                            <p>{technology.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>
                            <div className="buttons-section">
                                <div>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={project.liveDemoLink}
                                    >
                                        <button
                                            type="button"
                                            className={`primary-button ${project.gradient}`}
                                        >
                                            LIVE DEMO
                                        </button>
                                    </a>
                                </div>
                                <div>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={project.codeLink}
                                    >
                                        <button
                                            type="button"
                                            className="secondary-button"
                                        >
                                            CODE
                                        </button>
                                    </a>
                                </div>
                         </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsSection;

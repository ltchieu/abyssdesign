import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments
} from '@fortawesome/free-solid-svg-icons';
import { PROJECTS } from '../data/projectsData';
import { Project } from '../types';
import { ProjectTicketScrollStack } from './projects/ProjectTicketScrollStack';
import { ProjectDetailModal } from './projects/ProjectDetailModal';
import { CONTACT_DATA } from '../data/contactData';

export const RecentWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenConsultation = () => {
    window.open(CONTACT_DATA.zaloUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="relative w-full bg-[#fafafa]">

      {/* 1. SCROLL-PINNED 3D CARD STACK (Physical Card Stack) */}
      <ProjectTicketScrollStack
        projects={PROJECTS}
        onSelectProject={setSelectedProject}
      />

      {/* 3. DEEP-DIVE CASE STUDY MODAL */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

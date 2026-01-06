import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
}

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent {
  selectedStack: string = 'All';

  stacks: string[] = ['All', 'Angular', 'React Native', 'Backend'];

  projects: Project[] = [
    {
      title: 'Turf Booking App',
      description: 'Sports turf booking platform with real-time availability.',
      tech: ['React Native']
    },
    {
      title: 'Parking Management System',
      description: 'Vehicle parking dashboard with wallet and activity tracking.',
      tech: ['Angular', 'Backend']
    },
    {
      title: 'My Task Manager',
      description: 'Mobile task manager app with all features',
      tech: ['React Native']
    },
    {
      title: 'Self Portfolio',
      description: 'An web app which showcase all my deatils',
      tech: ['Angular']
    }
  ];

  get filteredProjects(): Project[] {
    if (this.selectedStack === 'All') {
      return this.projects;
    }
    return this.projects.filter(project =>
      project.tech.includes(this.selectedStack)
    );
  }

  selectStack(stack: string) {
    this.selectedStack = stack;
  }


}

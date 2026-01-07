import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  code?: string;
}

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent {
  selectedStack: string = 'All';

  stacks: string[] = ['All', 'Angular', 'React Native', '.Net'];

  projects: Project[] = [
    {
      title: 'Parking Management System',
      description: 'Vehicle parking dashboard with wallet and activity tracking.',
      tech: ['Angular', '.Net'],
      image: 'app/assets/project-image/parkingManagment.png',
      code: 'https://github.com/vinayakbirajdar/My-Parking-Web-App'

    },
    {
      title: 'My Task Manager',
      description: 'Mobile task manager app with all features',
      tech: ['React Native'],
      image: 'app/assets/project-image/myTask.png',

    },
    {
      title: 'Self Portfolio',
      description: 'An web app which showcase all my deatils',
      tech: ['Angular'],
      image: 'app/assets/project-image/myPortfolio.png',
      code: 'https://github.com/vinayakbirajdar/My-portfolio'
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

  openCode(codeUrl?: string) {
    if (!codeUrl) {
      alert('Code link not available');
      return;
    }
    window.open(codeUrl, '_blank');
  }

}

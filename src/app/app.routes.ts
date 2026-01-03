import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { AboutComponent } from './screens/about/about.component';
import { ProjectComponent } from './screens/project/project.component';
import { ContactComponent } from './screens/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'contact', component: ContactComponent },

    { path: '**', redirectTo: '' }

];

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeUtilisateursComponent } from './components/utilisateurs/liste-utilisateurs/liste-utilisateurs.component';
// import { RouterModule , Router}

export const routes: Routes = [ {
    path: '',
    component: ListeUtilisateursComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
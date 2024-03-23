import { Component } from '@angular/core';
import { Utilisateur } from '../../../models/Utilisateurs.model';

@Component({
  selector: 'app-liste-utilisateurs',
  standalone: true,
  imports: [],
  templateUrl: './liste-utilisateurs.component.html',
  styleUrl: './liste-utilisateurs.component.scss'
})

export class ListeUtilisateursComponent {
utilisateurs: Utilisateur[]=[
  {
  id:'001',
  nom:'utilisateur1',
  prenom:'ww',
  phone:123456789
  },
  {
    id:'002',
    nom:'utilisateur2',
    prenom:'ww',
    phone:456789123
    },
    {
      id:'003',
      nom:'utilisateur3',
      prenom:'ww',
      phone:545444
      }
];
constructor() {}
ngOnInit(): void {
  
}
}
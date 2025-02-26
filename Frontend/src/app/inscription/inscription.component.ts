import {Component, inject} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    MatLabel,
    MatFormFieldModule,
    MatFormField,
    ReactiveFormsModule,
    MatIcon,
    MatButton,
    MatIconButton,
    MatInput,
    MatRadioButton,
    MatRadioGroup,
    MatOption,
    MatSelect
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  formBuilder: FormBuilder = inject(FormBuilder);
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);

  // champs obligatoires
  formulaire: FormGroup = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    gender: ['',[]]
  });

  afficheMotDePasse = false;
  erreurConnexion: boolean = false;

  onInscription(): void {
    // test de la validité du formulaire
    if (this.formulaire.valid) {
      this.http
        .post('http://localhost:8080/inscription', this.formulaire.value)
        .subscribe({
          next: (resultat) => {
            //renvoi vers la page d'accueil après inscription
            this.router.navigateByUrl('/accueil');
            console.log(resultat);
          },
          error: (reponse) => {
            //renvoi de l'erreur
            this.erreurConnexion = true;
            console.log(reponse);
          },
        });
    }
  }
}


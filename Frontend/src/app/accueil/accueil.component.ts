import {Component, inject, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatCardModule} from '@angular/material/card';
import {MatButton, MatButtonModule} from "@angular/material/button";



@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit{


  http: HttpClient = inject(HttpClient);

  ngOnInit(): void{
    console.log("EZ on est là")
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  public name: string = "ironman";
  public age:  number = 45;

  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${ this.age }`
  }

  changeHero():void {
    this.name = "Spiderman";
  }

  changeAge(): void {
    this.age = 25;
  }

}

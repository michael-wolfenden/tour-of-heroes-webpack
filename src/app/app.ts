import {Component, FORM_DIRECTIVES, NgFor, NgIf, NgClass} from 'angular2/angular2';
import Hero from './hero';
import Heroes from './heroes';

@Component({
    directives: [FORM_DIRECTIVES, NgFor, NgIf, NgClass],
    selector: 'my-app',
    styles: [`
.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
.heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
.heroes .badge {
    font-size: small;
    color: white;
    padding: 0.1em 0.7em;
    background-color: #369;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -1px;
}
.selected { background-color: #EEE; color: #369; }
  `],
    template: `
<h1>{{title}}</h1>
<h2>My Heroes</h2>
<ul class="heroes">
    <li *ng-for="#hero of heroes"
    [ng-class]="getSelectedClass(hero)"
    (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}</a>
    </li>
</ul>
<div *ng-if="selectedHero">
  <h2>{{selectedHero.name}} details!</h2>
  <div><label>id: </label>{{selectedHero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ng-model)]="selectedHero.name" placeholder="name"></input>
  </div>
</div>
    `
})
export default class App {
    public title = 'Tour of Heroes';
    public heroes = Heroes;
    public selectedHero: Hero;
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getSelectedClass(hero: Hero) {
        return {
            'selected': hero === this.selectedHero
        };
    }
}
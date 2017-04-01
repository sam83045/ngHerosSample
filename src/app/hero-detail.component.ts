import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common';


import { Hero } from './hero';
import { HeroService } from './hero.service';


import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/hero-detail.component.html' ,
    styleUrls:['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    @Input() hero: Hero;

    constructor(private heroservice: HeroService, private route: ActivatedRoute, private location: Location) { };

    ngOnInit():void{
        this.route.params
            .switchMap((params: Params)=>this.heroservice.getHero(+params['id']))
            .subscribe(hero=>this.hero=hero);
    }

    goBack():void{
        this.location.back();
    }
}
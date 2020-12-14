import { Component, OnInit } from '@angular/core';
import { QuillotaService } from '../../services/quillota.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.page.html',
  styleUrls: ['./trabajos.page.scss'],
})
export class TrabajosPage implements OnInit {
  posts: Article[] = [];

  constructor( private quillotaService: QuillotaService) { }

  ngOnInit() {
    this.quillotaService.getTopHeadlines()
              .subscribe( resp => {
                console.log('post', resp);
                this.posts.push( ...resp.articles );
              });
  }

}

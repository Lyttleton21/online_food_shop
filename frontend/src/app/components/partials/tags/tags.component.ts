import { Component, OnInit } from '@angular/core';
import { Tags } from 'src/app/models/tags';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags!:Tags[];
  constructor(private foodListService:FoodlistService) { }

  ngOnInit(): void {
    this.tags = this.foodListService.getAllTags();
  }

}

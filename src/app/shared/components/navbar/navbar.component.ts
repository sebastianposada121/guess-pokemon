import {Component, OnInit} from '@angular/core';
import {Constants} from "../../assets/global/constants";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  public logo!: string;

  constructor() {
    this.logo = Constants.icons.LOGO;
  }

  ngOnInit() { }

}

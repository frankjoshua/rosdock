import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.css']
})
export class RobotListComponent implements OnInit {

  robots: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRobots().subscribe(robots => {
      this.robots = robots;
    });
  }

  createNewRobot(name: string){
    this.dataService.createRobot(name);
  }

  activateRobot(name: string){
    this.dataService.activateRobot(name);
  }

}

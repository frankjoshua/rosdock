import { DataService } from './../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Robot } from '../model/robot';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css']
})
export class RobotComponent implements OnInit {

  @Input() name: string;
  robot: Robot;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //check if name was passed int
    if(this.name){
      this.getRobot(this.name);
    } else {
      //Create a new robot
      this.robot = new Robot("NEW")
    }
  }

  getRobot(name: string){
    this.dataService.getRobot(name).valueChanges().subscribe(
      robot => {
        //Check if null
        if(robot){
          //Set the robot
          this.robot = robot;
        }
      }
    );
  }

}

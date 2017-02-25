import { PlaysService } from './../../providers/plays-service';
import { ViewChild, Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('footage') private footagePlayer : any ;
  @ViewChild('visualisation') private visualisationPlayer : any ;

  constructor(public navController: NavController, public toastController: ToastController, public playsService: PlaysService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage'); 
    this.footagePlayer.nativeElement.currentTime = 15;
    this.footagePlayer.nativeElement.play();
  }

  startVisualisationPlayer() {
      console.log('Playing visualisation');
      this.visualisationPlayer.nativeElement.play();
  };

  pauseVisualisationPlayer() {
    console.log('Pausing visualisation');
    this.visualisationPlayer.nativeElement.pause();
  };

  seek(e){
    console.log('Seeked to ' + e.target.currentTime);
    var newTime = e.target.currentTime - 15;
    if (newTime < 0) {
        newTime = 0;
        this.footagePlayer.nativeElement.currentTime = 15;
    }        
    this.visualisationPlayer.nativeElement.currentTime = newTime;
  };

  displayPlay(e) {
    var currentTime = Math.round(e.target.currentTime);
    //console.log(currentTime); 
    let play = this.playsService.getPlay(currentTime);
    if (play) {
      console.log(play.category); 
      let toast = this.toastController.create({
        message: play.category + ' - ' + play.Event,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
    // for (var entry in playByPlay) {
    //     var e = playByPlay[entry];
    //     var s = playByPlay[entry].start; 
    //     if ((currentTime >= s) && (currentTime < (s + 3))) {
    //         console.log(e.category + " - " + e.Event);
    //         $('#alertBar').text(e.category + " - " + e.Event);
    //         $('#alertBar').show();
    //     } else {
    //         //$('#alertBar').text("");
    //       //$('#alertBar').hide();
    //     }
  } 

}

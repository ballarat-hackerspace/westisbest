import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlaysService {

  private lastPlayReturned : any;

  constructor(public http: Http) {
    for (let play of this.PLAYS){
      let endTimeArray = play.endTime.split(":");
      let endMin = parseInt(endTimeArray[1]);
      let endSec = parseInt(endTimeArray[2]);
      let end = (endMin * 60) + endSec;
      play.end = end;
    }
  }

  getPlay(second : number){
    for (let play of this.PLAYS){
      if ((second > (play.end -2)) && (second < play.end) && (play != this.lastPlayReturned)) {
        this.lastPlayReturned = play;
        return play;
      }
    }    
    return null;
  };

  private PLAYS : any = 
  [
  {
    "startTime": "00:00:07:87",
    "endTime": "00:00:17:87",
    "category": "16 Toby McLean",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:00:11:51",
    "endTime": "00:00:21:51",
    "category": "42 Liam Picken",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:00:15:55",
    "endTime": "00:00:25:55",
    "category": "36 Brad Lynch",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:00:29:55",
    "endTime": "00:00:39:55",
    "category": "08 Stewart Crameri",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:00:31:95",
    "endTime": "00:00:41:95",
    "category": "09 Jake Stringer",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:00:39:95",
    "endTime": "00:00:49:95",
    "category": "02 Robert Murphy",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:01:00:43",
    "endTime": "00:01:10:43",
    "category": "42 Liam Picken",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:01:02:35",
    "endTime": "00:01:12:35",
    "category": "08 Stewart Crameri",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:01:04:03",
    "endTime": "00:01:14:03",
    "category": "06 Luke Dahlhaus",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:01:36:75",
    "endTime": "00:01:46:75",
    "category": "19 Lukas Webb",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:01:40:67",
    "endTime": "00:01:50:67",
    "category": "38 Dale Morris",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:01:42:83",
    "endTime": "00:01:52:83",
    "category": "26 Declan Hamilton",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:01:46:75",
    "endTime": "00:01:56:75",
    "category": "24 Shane Biggs",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:01:50:99",
    "endTime": "00:01:58:83",
    "category": "06 Luke Dahlhaus",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:01:54:91",
    "endTime": "00:02:04:91",
    "category": "42 Liam Picken",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:01:58:83",
    "endTime": "00:02:06:67",
    "category": "06 Luke Dahlhaus",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:02:02:27",
    "endTime": "00:02:12:27",
    "category": "31 Bailey Dale",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:02:29:15",
    "endTime": "00:02:39:15",
    "category": "22 Mitch Honeychurch",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:02:39:71",
    "endTime": "00:02:49:71",
    "category": "39 Jason Johannisen",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:02:42:99",
    "endTime": "00:02:52:99",
    "category": "02 Robert Murphy",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:02:53:23",
    "endTime": "00:03:03:23",
    "category": "23 Jordan Roughead",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:03:10:07",
    "endTime": "00:03:20:07",
    "category": "15 Tom Campbell",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:03:20:19",
    "endTime": "00:03:30:19",
    "category": "36 Brad Lynch",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:03:25:07",
    "endTime": "00:03:35:07",
    "category": "09 Jake Stringer",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:03:32:43",
    "endTime": "00:03:42:43",
    "category": "44 Tim English",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:03:37:23",
    "endTime": "00:03:47:23",
    "category": "19 Lukas Webb",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:03:51:47",
    "endTime": "00:04:01:47",
    "category": "02 Robert Murphy",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:03:56:99",
    "endTime": "00:04:06:99",
    "category": "26 Declan Hamilton",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:04:03:55",
    "endTime": "00:04:13:55",
    "category": "19 Lukas Webb",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:04:08:66",
    "endTime": "00:04:18:66",
    "category": "26 Declan Hamilton",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:04:10:35",
    "endTime": "00:04:20:35",
    "category": "17 Tom Boyd",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:04:13:63",
    "endTime": "00:04:23:63",
    "category": "16 Toby McLean",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:04:18:75",
    "endTime": "00:04:28:75",
    "category": "42 Liam Picken",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:04:20:63",
    "endTime": "00:04:30:63",
    "category": "24 Shane Biggs",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:04:21:87",
    "endTime": "00:04:26:91",
    "category": "20 Josh Dunkley",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:04:23:23",
    "endTime": "00:04:33:23",
    "category": "08 Stewart Crameri",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:04:27:39",
    "endTime": "00:04:37:39",
    "category": "09 Jake Stringer",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:04:30:75",
    "endTime": "00:04:40:75",
    "category": "06 Luke Dahlhaus",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:04:32:83",
    "endTime": "00:04:42:83",
    "category": "44 Tim English",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:04:36:67",
    "endTime": "00:04:46:67",
    "category": "26 Declan Hamilton",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:04:42:43",
    "endTime": "00:04:52:43",
    "category": "14 Clay Smith",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:04:54:67",
    "endTime": "00:05:04:67",
    "category": "39 Jason Johannisen",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:04:59:23",
    "endTime": "00:05:09:23",
    "category": "14 Clay Smith",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:05:03:95",
    "endTime": "00:05:13:95",
    "category": "19 Lukas Webb",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:05:08:51",
    "endTime": "00:05:18:51",
    "category": "13 Travis Cloke",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:05:12:27",
    "endTime": "00:05:22:27",
    "category": "44 Tim English",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:06:01:23",
    "endTime": "00:06:11:23",
    "category": "16 Toby McLean",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:06:03:39",
    "endTime": "00:06:08:47",
    "category": "26 Declan Hamilton",
    "Event": ""
  },
  {
    "startTime": "00:06:06:83",
    "endTime": "00:06:16:83",
    "category": "46 Lin Jong",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:06:08:35",
    "endTime": "00:06:18:35",
    "category": "40 Nathan Mullenger-McHugh",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:06:08:47",
    "endTime": "00:06:13:55",
    "category": "26 Declan Hamilton",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:06:17:47",
    "endTime": "00:06:27:47",
    "category": "35 Caleb Daniel",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:06:19:55",
    "endTime": "00:06:29:55",
    "category": "21 Tom Liberatore",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:06:28:43",
    "endTime": "00:06:38:43",
    "category": "14 Clay Smith",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:07:41:15",
    "endTime": "00:07:51:15",
    "category": "22 Mitch Honeychurch",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:07:44:03",
    "endTime": "00:07:54:03",
    "category": "09 Jake Stringer",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:07:50:03",
    "endTime": "00:08:00:03",
    "category": "13 Travis Cloke",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:07:55:55",
    "endTime": "00:08:05:55",
    "category": "14 Clay Smith",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:07:59:95",
    "endTime": "00:08:09:95",
    "category": "35 Caleb Daniel",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:08:03:63",
    "endTime": "00:08:13:63",
    "category": "16 Toby McLean",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:08:08:99",
    "endTime": "00:08:18:99",
    "category": "21 Tom Liberatore",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:08:11:87",
    "endTime": "00:08:21:87",
    "category": "46 Lin Jong",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:08:17:39",
    "endTime": "00:08:26:23",
    "category": "26 Declan Hamilton",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:08:19:47",
    "endTime": "00:08:29:47",
    "category": "23 Jordan Roughead",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:08:22:11",
    "endTime": "00:08:32:11",
    "category": "14 Clay Smith",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:08:26:23",
    "endTime": "00:08:35:07",
    "category": "26 Declan Hamilton",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:08:46:34",
    "endTime": "00:08:56:34",
    "category": "07 Lachie Hunter",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:08:56:03",
    "endTime": "00:09:06:03",
    "category": "36 Brad Lynch",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:09:00:03",
    "endTime": "00:09:10:03",
    "category": "31 Bailey Dale",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:09:05:79",
    "endTime": "00:09:15:79",
    "category": "22 Mitch Honeychurch",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:09:10:75",
    "endTime": "00:09:19:51",
    "category": "31 Bailey Dale",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:09:14:87",
    "endTime": "00:09:24:87",
    "category": "09 Jake Stringer",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:09:19:51",
    "endTime": "00:09:28:26",
    "category": "31 Bailey Dale",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:09:30:75",
    "endTime": "00:09:40:75",
    "category": "40 Nathan Mullenger-McHugh",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:09:36:35",
    "endTime": "00:09:46:35",
    "category": "42 Liam Picken",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:10:20:15",
    "endTime": "00:10:30:15",
    "category": "44 Tim English",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:10:23:20",
    "endTime": "00:10:33:20",
    "category": "15 Tom Campbell",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:10:25:47",
    "endTime": "00:10:35:47",
    "category": "31 Bailey Dale",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:10:36:95",
    "endTime": "00:10:46:95",
    "category": "13 Travis Cloke",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:10:43:71",
    "endTime": "00:10:53:71",
    "category": "24 Shane Biggs",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:10:47:15",
    "endTime": "00:10:57:15",
    "category": "32 Kieran Collins",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:10:55:71",
    "endTime": "00:11:05:71",
    "category": "21 Tom Liberatore",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:10:59:07",
    "endTime": "00:11:09:07",
    "category": "26 Declan Hamilton",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:11:01:79",
    "endTime": "00:11:11:79",
    "category": "35 Caleb Daniel",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:11:32:54",
    "endTime": "00:11:42:54",
    "category": "38 Dale Morris",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:12:22:99",
    "endTime": "00:12:32:99",
    "category": "07 Lachie Hunter",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:12:31:47",
    "endTime": "00:12:41:47",
    "category": "22 Mitch Honeychurch",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:12:36:35",
    "endTime": "00:12:46:35",
    "category": "19 Lukas Webb",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:13:05:87",
    "endTime": "00:13:15:87",
    "category": "21 Tom Liberatore",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:13:08:43",
    "endTime": "00:13:18:43",
    "category": "44 Tim English",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:13:26:11",
    "endTime": "00:13:36:11",
    "category": "02 Robert Murphy",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:13:28:67",
    "endTime": "00:13:38:67",
    "category": "39 Jason Johannisen",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:13:31:47",
    "endTime": "00:13:41:47",
    "category": "46 Lin Jong",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:13:53:63",
    "endTime": "00:14:03:63",
    "category": "21 Tom Liberatore",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:13:55:79",
    "endTime": "00:14:04:09",
    "category": "27 Patrick Lipinski",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:13:57:79",
    "endTime": "00:14:07:79",
    "category": "16 Toby McLean",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:14:00:19",
    "endTime": "00:14:10:19",
    "category": "39 Jason Johannisen",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:14:04:09",
    "endTime": "00:14:12:39",
    "category": "27 Patrick Lipinski",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:14:04:67",
    "endTime": "00:14:14:67",
    "category": "35 Caleb Daniel",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:14:08:51",
    "endTime": "00:14:18:51",
    "category": "02 Robert Murphy",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:14:12:51",
    "endTime": "00:14:22:51",
    "category": "46 Lin Jong",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:14:32:51",
    "endTime": "00:14:42:51",
    "category": "24 Shane Biggs",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:14:36:59",
    "endTime": "00:14:46:59",
    "category": "32 Kieran Collins",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:14:42:03",
    "endTime": "00:14:52:03",
    "category": "19 Lukas Webb",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:14:44:51",
    "endTime": "00:14:54:51",
    "category": "42 Liam Picken",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:14:48:91",
    "endTime": "00:14:58:91",
    "category": "06 Luke Dahlhaus",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:14:54:59",
    "endTime": "00:15:04:59",
    "category": "22 Mitch Honeychurch",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:14:57:23",
    "endTime": "00:15:07:23",
    "category": "08 Stewart Crameri",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:15:16:99",
    "endTime": "00:15:26:99",
    "category": "13 Travis Cloke",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:16:23:63",
    "endTime": "00:16:33:63",
    "category": "08 Stewart Crameri",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:16:30:03",
    "endTime": "00:16:40:03",
    "category": "36 Brad Lynch",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:16:32:43",
    "endTime": "00:16:42:43",
    "category": "26 Declan Hamilton",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:16:39:55",
    "endTime": "00:16:43:59",
    "category": "16 Toby McLean",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:16:40:83",
    "endTime": "00:16:50:83",
    "category": "14 Clay Smith",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:16:43:59",
    "endTime": "00:16:52:51",
    "category": "16 Toby McLean",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:16:44:51",
    "endTime": "00:16:54:51",
    "category": "38 Dale Morris",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:16:45:79",
    "endTime": "00:16:55:79",
    "category": "39 Jason Johannisen",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:16:47:07",
    "endTime": "00:16:57:07",
    "category": "46 Lin Jong",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:16:51:87",
    "endTime": "00:17:01:87",
    "category": "27 Patrick Lipinski",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:16:56:27",
    "endTime": "00:17:06:27",
    "category": "17 Tom Boyd",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:16:59:79",
    "endTime": "00:17:09:79",
    "category": "07 Lachie Hunter",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:17:52:67",
    "endTime": "00:18:02:67",
    "category": "06 Luke Dahlhaus",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:17:56:83",
    "endTime": "00:18:06:83",
    "category": "44 Tim English",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:17:58:83",
    "endTime": "00:18:08:83",
    "category": "09 Jake Stringer",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:18:04:11",
    "endTime": "00:18:14:11",
    "category": "13 Travis Cloke",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:18:34:99",
    "endTime": "00:18:44:99",
    "category": "14 Clay Smith",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:18:37:95",
    "endTime": "00:18:47:95",
    "category": "35 Caleb Daniel",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:18:42:83",
    "endTime": "00:18:52:83",
    "category": "46 Lin Jong",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:18:55:23",
    "endTime": "00:19:05:23",
    "category": "08 Stewart Crameri",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:18:57:55",
    "endTime": "00:19:07:55",
    "category": "24 Shane Biggs",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:19:02:51",
    "endTime": "00:19:12:51",
    "category": "13 Travis Cloke",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:19:05:69",
    "endTime": "00:19:15:69",
    "category": "15 Tom Campbell",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:19:11:87",
    "endTime": "00:19:21:87",
    "category": "31 Bailey Dale",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:19:44:35",
    "endTime": "00:19:54:35",
    "category": "42 Liam Picken",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:20:34:67",
    "endTime": "00:20:44:67",
    "category": "09 Jake Stringer",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:20:42:11",
    "endTime": "00:20:52:11",
    "category": "20 Josh Dunkley",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:20:44:51",
    "endTime": "00:20:54:51",
    "category": "16 Toby McLean",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:20:46:51",
    "endTime": "00:20:56:51",
    "category": "07 Lachie Hunter",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:20:59:79",
    "endTime": "00:21:09:79",
    "category": "06 Luke Dahlhaus",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:21:03:95",
    "endTime": "00:21:13:95",
    "category": "08 Stewart Crameri",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:21:07:55",
    "endTime": "00:21:17:55",
    "category": "09 Jake Stringer",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:21:38:59",
    "endTime": "00:21:48:59",
    "category": "08 Stewart Crameri",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:21:41:87",
    "endTime": "00:21:51:87",
    "category": "09 Jake Stringer",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:22:08:51",
    "endTime": "00:22:18:51",
    "category": "21 Tom Liberatore",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:22:12:59",
    "endTime": "00:22:22:59",
    "category": "17 Tom Boyd",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:22:14:75",
    "endTime": "00:22:23:03",
    "category": "26 Declan Hamilton",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:22:19:31",
    "endTime": "00:22:26:95",
    "category": "14 Clay Smith",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:22:23:03",
    "endTime": "00:22:31:31",
    "category": "26 Declan Hamilton",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:22:26:83",
    "endTime": "00:22:36:83",
    "category": "46 Lin Jong",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:22:26:95",
    "endTime": "00:22:34:59",
    "category": "14 Clay Smith",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:22:43:84",
    "endTime": "00:22:53:84",
    "category": "31 Bailey Dale",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:23:05:71",
    "endTime": "00:23:15:71",
    "category": "21 Tom Liberatore",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:23:34:59",
    "endTime": "00:23:44:59",
    "category": "02 Robert Murphy",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:23:38:27",
    "endTime": "00:23:48:27",
    "category": "46 Lin Jong",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:23:42:43",
    "endTime": "00:23:52:43",
    "category": "21 Tom Liberatore",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:23:44:59",
    "endTime": "00:23:54:59",
    "category": "26 Declan Hamilton",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:23:47:63",
    "endTime": "00:23:57:63",
    "category": "40 Nathan Mullenger-McHugh",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:23:51:95",
    "endTime": "00:24:01:95",
    "category": "14 Clay Smith",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:24:07:55",
    "endTime": "00:24:17:55",
    "category": "27 Patrick Lipinski",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:24:10:99",
    "endTime": "00:24:20:99",
    "category": "23 Jordan Roughead",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:24:38:27",
    "endTime": "00:24:48:27",
    "category": "42 Liam Picken",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:24:40:59",
    "endTime": "00:24:50:59",
    "category": "06 Luke Dahlhaus",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:24:43:63",
    "endTime": "00:24:53:63",
    "category": "31 Bailey Dale",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:24:46:67",
    "endTime": "00:24:56:67",
    "category": "09 Jake Stringer",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:25:11:79",
    "endTime": "00:25:21:79",
    "category": "44 Tim English",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:25:57:07",
    "endTime": "00:26:07:07",
    "category": "19 Lukas Webb",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:26:12:91",
    "endTime": "00:26:22:91",
    "category": "16 Toby McLean",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:26:19:71",
    "endTime": "00:26:29:71",
    "category": "21 Tom Liberatore",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:26:31:55",
    "endTime": "00:26:41:55",
    "category": "20 Josh Dunkley",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:26:54:90",
    "endTime": "00:27:04:90",
    "category": "27 Patrick Lipinski",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:27:37:07",
    "endTime": "00:27:47:07",
    "category": "23 Jordan Roughead",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:27:40:11",
    "endTime": "00:27:50:11",
    "category": "26 Declan Hamilton",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:27:48:43",
    "endTime": "00:27:58:43",
    "category": "35 Caleb Daniel",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:27:53:30",
    "endTime": "00:28:03:30",
    "category": "16 Toby McLean",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:27:58:43",
    "endTime": "00:28:08:43",
    "category": "46 Lin Jong",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:28:06:27",
    "endTime": "00:28:16:27",
    "category": "23 Jordan Roughead",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:28:12:35",
    "endTime": "00:28:22:35",
    "category": "36 Brad Lynch",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:28:18:11",
    "endTime": "00:28:28:11",
    "category": "15 Tom Campbell",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:28:24:23",
    "endTime": "00:28:34:23",
    "category": "36 Brad Lynch",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:28:26:67",
    "endTime": "00:28:36:67",
    "category": "24 Shane Biggs",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:28:29:15",
    "endTime": "00:28:39:15",
    "category": "31 Bailey Dale",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:28:40:55",
    "endTime": "00:28:50:55",
    "category": "06 Luke Dahlhaus",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:28:45:23",
    "endTime": "00:28:55:23",
    "category": "14 Clay Smith",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:28:48:83",
    "endTime": "00:28:58:83",
    "category": "35 Caleb Daniel",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:28:51:27",
    "endTime": "00:29:01:27",
    "category": "38 Dale Morris",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:28:53:39",
    "endTime": "00:29:03:39",
    "category": "26 Declan Hamilton",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:28:56:75",
    "endTime": "00:29:06:75",
    "category": "14 Clay Smith",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:29:18:11",
    "endTime": "00:29:28:11",
    "category": "02 Robert Murphy",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:29:20:51",
    "endTime": "00:29:30:51",
    "category": "14 Clay Smith",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:29:24:91",
    "endTime": "00:29:34:91",
    "category": "46 Lin Jong",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:29:54:90",
    "endTime": "00:30:04:90",
    "category": "27 Patrick Lipinski",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:30:01:55",
    "endTime": "00:30:11:55",
    "category": "36 Brad Lynch",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:30:05:95",
    "endTime": "00:30:15:95",
    "category": "32 Kieran Collins",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:30:26:03",
    "endTime": "00:30:36:03",
    "category": "22 Mitch Honeychurch",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:30:31:63",
    "endTime": "00:30:41:63",
    "category": "06 Luke Dahlhaus",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:30:36:59",
    "endTime": "00:30:46:59",
    "category": "07 Lachie Hunter",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:31:06:99",
    "endTime": "00:31:16:99",
    "category": "15 Tom Campbell",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:31:16:27",
    "endTime": "00:31:26:27",
    "category": "39 Jason Johannisen",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:31:23:79",
    "endTime": "00:31:33:79",
    "category": "26 Declan Hamilton",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:31:35:07",
    "endTime": "00:31:45:07",
    "category": "40 Nathan Mullenger-McHugh",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:31:37:07",
    "endTime": "00:31:47:07",
    "category": "39 Jason Johannisen",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:31:42:24",
    "endTime": "00:31:52:24",
    "category": "46 Lin Jong",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:31:45:31",
    "endTime": "00:31:55:31",
    "category": "02 Robert Murphy",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:31:48:71",
    "endTime": "00:31:58:71",
    "category": "14 Clay Smith",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:32:22:46",
    "endTime": "00:32:32:46",
    "category": "23 Jordan Roughead",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:33:11:63",
    "endTime": "00:33:21:63",
    "category": "44 Tim English",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:33:29:51",
    "endTime": "00:33:39:51",
    "category": "07 Lachie Hunter",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:33:32:27",
    "endTime": "00:33:42:27",
    "category": "31 Bailey Dale",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:33:35:47",
    "endTime": "00:33:45:47",
    "category": "02 Robert Murphy",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:33:40:26",
    "endTime": "00:33:50:26",
    "category": "39 Jason Johannisen",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:33:47:07",
    "endTime": "00:33:57:07",
    "category": "20 Josh Dunkley",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:33:50:83",
    "endTime": "00:34:00:83",
    "category": "34 Bailey Williams",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:33:54:99",
    "endTime": "00:34:04:99",
    "category": "07 Lachie Hunter",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:33:57:95",
    "endTime": "00:34:07:95",
    "category": "22 Mitch Honeychurch",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:34:05:39",
    "endTime": "00:34:15:39",
    "category": "06 Luke Dahlhaus",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:34:11:87",
    "endTime": "00:34:21:87",
    "category": "09 Jake Stringer",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:34:17:55",
    "endTime": "00:34:27:55",
    "category": "44 Tim English",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:34:25:47",
    "endTime": "00:34:33:47",
    "category": "19 Lukas Webb",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:34:27:63",
    "endTime": "00:34:37:63",
    "category": "15 Tom Campbell",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:34:33:47",
    "endTime": "00:34:41:47",
    "category": "19 Lukas Webb",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:34:36:99",
    "endTime": "00:34:46:99",
    "category": "40 Nathan Mullenger-McHugh",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:34:42:35",
    "endTime": "00:34:52:35",
    "category": "13 Travis Cloke",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:35:04:55",
    "endTime": "00:35:14:55",
    "category": "16 Toby McLean",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:35:09:23",
    "endTime": "00:35:19:23",
    "category": "07 Lachie Hunter",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:35:16:11",
    "endTime": "00:35:24:59",
    "category": "18 Fletcher Roberts",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:35:17:95",
    "endTime": "00:35:27:95",
    "category": "17 Tom Boyd",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:35:24:59",
    "endTime": "00:35:33:07",
    "category": "18 Fletcher Roberts",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:35:25:23",
    "endTime": "00:35:35:23",
    "category": "16 Toby McLean",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:35:37:19",
    "endTime": "00:35:47:19",
    "category": "32 Kieran Collins",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:35:41:31",
    "endTime": "00:35:51:31",
    "category": "34 Bailey Williams",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:35:44:43",
    "endTime": "00:35:54:43",
    "category": "08 Stewart Crameri",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:35:47:47",
    "endTime": "00:35:57:47",
    "category": "07 Lachie Hunter",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:36:07:07",
    "endTime": "00:36:17:07",
    "category": "21 Tom Liberatore",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:36:09:31",
    "endTime": "00:36:19:31",
    "category": "38 Dale Morris",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:36:11:15",
    "endTime": "00:36:18:87",
    "category": "20 Josh Dunkley",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:36:13:55",
    "endTime": "00:36:23:55",
    "category": "27 Patrick Lipinski",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:36:18:19",
    "endTime": "00:36:28:19",
    "category": "14 Clay Smith",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:36:18:87",
    "endTime": "00:36:26:59",
    "category": "20 Josh Dunkley",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:36:21:55",
    "endTime": "00:36:31:55",
    "category": "35 Caleb Daniel",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:36:47:37",
    "endTime": "00:36:57:37",
    "category": "02 Robert Murphy",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:37:38:67",
    "endTime": "00:37:48:67",
    "category": "21 Tom Liberatore",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:37:42:11",
    "endTime": "00:37:52:11",
    "category": "46 Lin Jong",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:37:45:83",
    "endTime": "00:37:55:83",
    "category": "14 Clay Smith",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:38:34:83",
    "endTime": "00:38:44:83",
    "category": "42 Liam Picken",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:38:38:19",
    "endTime": "00:38:48:19",
    "category": "46 Lin Jong",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:38:43:23",
    "endTime": "00:38:53:23",
    "category": "02 Robert Murphy",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:38:47:15",
    "endTime": "00:38:57:15",
    "category": "35 Caleb Daniel",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:38:50:43",
    "endTime": "00:39:00:43",
    "category": "22 Mitch Honeychurch",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:38:53:23",
    "endTime": "00:39:03:23",
    "category": "06 Luke Dahlhaus",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:38:58:76",
    "endTime": "00:39:08:76",
    "category": "08 Stewart Crameri",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:39:04:35",
    "endTime": "00:39:14:35",
    "category": "31 Bailey Dale",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:39:52:35",
    "endTime": "00:40:02:35",
    "category": "42 Liam Picken",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:39:54:59",
    "endTime": "00:40:04:59",
    "category": "06 Luke Dahlhaus",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:40:03:95",
    "endTime": "00:40:13:95",
    "category": "39 Jason Johannisen",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:40:11:47",
    "endTime": "00:40:21:47",
    "category": "23 Jordan Roughead",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:40:18:95",
    "endTime": "00:40:28:95",
    "category": "20 Josh Dunkley",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:40:22:31",
    "endTime": "00:40:32:31",
    "category": "19 Lukas Webb",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:40:24:75",
    "endTime": "00:40:34:75",
    "category": "31 Bailey Dale",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:40:33:23",
    "endTime": "00:40:43:23",
    "category": "39 Jason Johannisen",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:40:35:47",
    "endTime": "00:40:45:47",
    "category": "02 Robert Murphy",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:40:39:07",
    "endTime": "00:40:49:07",
    "category": "46 Lin Jong",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:41:11:39",
    "endTime": "00:41:21:39",
    "category": "17 Tom Boyd",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:42:02:11",
    "endTime": "00:42:12:11",
    "category": "19 Lukas Webb",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:42:04:27",
    "endTime": "00:42:14:27",
    "category": "42 Liam Picken",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:42:06:47",
    "endTime": "00:42:16:47",
    "category": "06 Luke Dahlhaus",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:42:12:03",
    "endTime": "00:42:20:01",
    "category": "40 Nathan Mullenger-McHugh",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:42:20:01",
    "endTime": "00:42:27:99",
    "category": "40 Nathan Mullenger-McHugh",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:42:23:55",
    "endTime": "00:42:33:55",
    "category": "19 Lukas Webb",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:42:26:91",
    "endTime": "00:42:36:91",
    "category": "07 Lachie Hunter",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:42:47:15",
    "endTime": "00:42:57:15",
    "category": "44 Tim English",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:43:21:93",
    "endTime": "00:43:27:11",
    "category": "09 Jake Stringer",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:44:07:71",
    "endTime": "00:44:17:71",
    "category": "21 Tom Liberatore",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:44:10:43",
    "endTime": "00:44:20:43",
    "category": "20 Josh Dunkley",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:44:16:83",
    "endTime": "00:44:26:83",
    "category": "35 Caleb Daniel",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:44:26:19",
    "endTime": "00:44:36:19",
    "category": "02 Robert Murphy",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:44:30:99",
    "endTime": "00:44:40:99",
    "category": "16 Toby McLean",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:44:35:63",
    "endTime": "00:44:45:63",
    "category": "21 Tom Liberatore",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:44:59:79",
    "endTime": "00:45:09:79",
    "category": "19 Lukas Webb",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:45:01:39",
    "endTime": "00:45:11:39",
    "category": "06 Luke Dahlhaus",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:45:04:07",
    "endTime": "00:45:14:07",
    "category": "26 Declan Hamilton",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:45:08:19",
    "endTime": "00:45:18:19",
    "category": "20 Josh Dunkley",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:45:11:15",
    "endTime": "00:45:21:15",
    "category": "35 Caleb Daniel",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:45:14:91",
    "endTime": "00:45:24:91",
    "category": "19 Lukas Webb",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:45:20:19",
    "endTime": "00:45:30:19",
    "category": "20 Josh Dunkley",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:45:23:87",
    "endTime": "00:45:33:87",
    "category": "18 Fletcher Roberts",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:45:26:59",
    "endTime": "00:45:36:59",
    "category": "06 Luke Dahlhaus",
    "Event": "Handball Ineffective"
  },
  {
    "startTime": "00:45:42:03",
    "endTime": "00:45:52:03",
    "category": "16 Toby McLean",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:45:46:11",
    "endTime": "00:45:56:11",
    "category": "40 Nathan Mullenger-McHugh",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:45:51:11",
    "endTime": "00:46:01:11",
    "category": "27 Patrick Lipinski",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:45:55:15",
    "endTime": "00:46:05:15",
    "category": "44 Tim English",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:45:59:07",
    "endTime": "00:46:09:07",
    "category": "42 Liam Picken",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:46:02:11",
    "endTime": "00:46:12:11",
    "category": "20 Josh Dunkley",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:46:05:31",
    "endTime": "00:46:15:31",
    "category": "38 Dale Morris",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:46:11:70",
    "endTime": "00:46:21:70",
    "category": "21 Tom Liberatore",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:46:14:03",
    "endTime": "00:46:24:03",
    "category": "02 Robert Murphy",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:46:16:90",
    "endTime": "00:46:26:90",
    "category": "39 Jason Johannisen",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:46:20:19",
    "endTime": "00:46:30:19",
    "category": "17 Tom Boyd",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:46:26:43",
    "endTime": "00:46:36:43",
    "category": "07 Lachie Hunter",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:46:34:11",
    "endTime": "00:46:44:11",
    "category": "24 Shane Biggs",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:46:41:79",
    "endTime": "00:46:51:79",
    "category": "36 Brad Lynch",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:46:41:95",
    "endTime": "00:46:46:99",
    "category": "42 Liam Picken",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:46:46:99",
    "endTime": "00:46:56:99",
    "category": "44 Tim English",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:46:55:55",
    "endTime": "00:47:05:55",
    "category": "24 Shane Biggs",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:46:58:43",
    "endTime": "00:47:08:43",
    "category": "07 Lachie Hunter",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:47:03:95",
    "endTime": "00:47:13:95",
    "category": "31 Bailey Dale",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:47:07:58",
    "endTime": "00:47:16:09",
    "category": "13 Travis Cloke",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:47:10:99",
    "endTime": "00:47:20:99",
    "category": "09 Jake Stringer",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:47:16:09",
    "endTime": "00:47:24:59",
    "category": "13 Travis Cloke",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:47:57:47",
    "endTime": "00:48:07:47",
    "category": "39 Jason Johannisen",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:48:00:27",
    "endTime": "00:48:10:27",
    "category": "16 Toby McLean",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:48:02:11",
    "endTime": "00:48:12:11",
    "category": "14 Clay Smith",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:48:07:55",
    "endTime": "00:48:17:55",
    "category": "34 Bailey Williams",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:48:11:87",
    "endTime": "00:48:21:87",
    "category": "42 Liam Picken",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:49:26:63",
    "endTime": "00:49:36:63",
    "category": "22 Mitch Honeychurch",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:49:29:07",
    "endTime": "00:49:39:07",
    "category": "19 Lukas Webb",
    "Event": "Kick Effective"
  },
  {
    "startTime": "00:49:31:47",
    "endTime": "00:49:41:47",
    "category": "06 Luke Dahlhaus",
    "Event": "Kick Ineffective"
  },
  {
    "startTime": "00:49:34:18",
    "endTime": "00:49:44:18",
    "category": "18 Fletcher Roberts",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:49:37:07",
    "endTime": "00:49:47:07",
    "category": "20 Josh Dunkley",
    "Event": "Handball Effective"
  },
  {
    "startTime": "00:49:40:43",
    "endTime": "00:49:50:43",
    "category": "39 Jason Johannisen",
    "Event": "Handball Effective"
  }
];

}

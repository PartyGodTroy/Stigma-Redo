import http from "http";
import { Room, Client } from "@colyseus/core";
import { JWT } from "@colyseus/auth";
import { PVPRoomState } from "./schema/PVPRoomState";

export class PVPRoom extends Room<PVPRoomState> {
  maxClients =  3;
   // (optional) Validate client auth token before joining/creating the room
   static async onAuth (token: string, request: http.IncomingMessage) { 
     return JWT.verify(token);
   }

   
  onCreate (options: any) {
    this.setState(new PVPRoomState());
    this.onMessage("type", (client, message) => {
      //
      // handle "type" message
      //
    });
  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}



const addRoomActions = (room:Room<PVPRoomState>) =>{
  room.onMessage("end_turn", (client, msg) =>{

  });
  room.onMessage("forfeit", (client, msg) =>{

  });
  room.onMessage("query", (client, msg) =>{

  });
  room.onMessage("action", (client, msg) =>{

  });
  

  
}
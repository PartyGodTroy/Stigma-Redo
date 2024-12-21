import http from "http";
import { Room, Client } from "@colyseus/core";
import { MyRoomState } from "./schema/MyRoomState";

export class PVPRoom extends Room<MyRoomState> {
  maxClients =  3;
   // (optional) Validate client auth token before joining/creating the room
   static async onAuth (token: string, request: http.IncomingMessage) { }
  onCreate (options: any) {
    this.setState(new MyRoomState());
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

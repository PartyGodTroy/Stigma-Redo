import { Schema, Context, type } from "@colyseus/schema";

export class PVPRoomState extends Schema {

  @type("string") mySynchronizedProperty: string = "Hello world";

}

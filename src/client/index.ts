import * as Colyseus from "colyseus.js"; // not necessary if included via <script> tag.

// 'ws://localhost:2567'
export function createClient( url:string){
    const client = new Colyseus.Client(url);
    return {
        client
    }
}
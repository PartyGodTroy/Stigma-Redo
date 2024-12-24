import * as Colyseus from "colyseus.js"; // not necessary if included via <script> tag.
import * as Appwrite from "appwrite"

/**
 * 
 * @returns a client for Appwrite and Colyseus
 */
export function createClient(){
    const colyseus = new Colyseus.Client(process.env._STIGMA_COLYSEUS_URL);
    const appwrite = new Appwrite.Client();
    appwrite.setEndpoint(`${process.env._APP_DOMAIN}/v1`)
    appwrite.setProject(`${process.env._STIGMA_APPWRITE_PROJECT_ID}`)
    return {
        colyseus,
        appwrite
    }
}
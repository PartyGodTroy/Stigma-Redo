import sdk from "node-appwrite";

let client = new sdk.Client();
client
    .setEndpoint(`${process.env._APP_DOMAIN}/v1`) // Your API Endpoint
    .setProject(`${process.env._STIGMA_APPWRITE_PROJECT_ID}`) // Your project ID
    .setKey(`${process.env._STIGMA_SECRET_KEY}`) // Your secret API key
    .setSelfSigned(process.env.NODE_ENV !== "production") // Use only on dev mode with a self-signed SSL cert
;


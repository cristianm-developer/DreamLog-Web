export const environment = {
    production: true,
    secretKey: "KeyToCrypt",
    firebaseConfig: {
        apiKey: process.env["Firebase_Api_Key"] || '',
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
    }
}
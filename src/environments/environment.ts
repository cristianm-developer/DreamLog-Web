export const environment = {
    production: true,
    secretKey: "KeyToCrypt",
    firebaseConfig: {
        apiKey: import.meta.env.NG_APP_API_FIREBASE_KEY || '',
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
    }
}
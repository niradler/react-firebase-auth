import * as firebase from "firebase";

const signInWithEmailAndPassword = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

const sendEmailVerification = () => firebase.auth().currentUser.sendEmailVerification();

const sendPasswordResetEmail = (email) => firebase.auth().sendPasswordResetEmail(email);

const createUserWithEmailAndPassword = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

const signOut = () => firebase.auth().signOut();

const signInAnonymously = () => firebase.auth().signInAnonymously();

const signInWithPopup = (provider) => firebase.auth().signInWithPopup(provider);

const signInWithPopupGoogle = (scope = 'https://www.googleapis.com/auth/contacts.readonly') => {
    const provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope(scope);

    return signInWithPopup(provider);
};

const signInWithPopupFacebook = (scope = 'user_birthday') => {
    const provider = new firebase.auth.FacebookAuthProvider();

    provider.addScope(scope);

    return signInWithPopup(provider);
};

const signInWithPopupGithub = (scope = 'repo') => {
    const provider = new firebase.auth.GithubAuthProvider();

    provider.addScope(scope);

    return signInWithPopup(provider);
};

export {
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopupGithub,
    signInWithPopupGoogle,
    signInAnonymously,
    signInWithPopupFacebook
}
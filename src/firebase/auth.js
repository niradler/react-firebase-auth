import * as React from "react";

import Firebase from "./firebase";

const defaultFirebaseContext = {
    authStatusReported: false,
    isUserSignedIn: false
};

export const FirebaseAuthContext = React.createContext(defaultFirebaseContext);

export default class FirebaseAuthProvider extends React.Component {

    state = defaultFirebaseContext;

    componentDidMount() {
        Firebase.auth.onAuthStateChanged(user => this.setState({
            authStatusReported: true,
            isUserSignedIn: !!user,
            user: user
        }));
    }

    render() {
        const {children} = this.props;
        const {authStatusReported, isUserSignedIn, user} = this.state;
        console.log('FirebaseAuthProvider',this.state)
        return (
            <FirebaseAuthContext.Provider value={{isUserSignedIn, authStatusReported, user}}>
                {authStatusReported && children}
            </FirebaseAuthContext.Provider>
        );
    }
}
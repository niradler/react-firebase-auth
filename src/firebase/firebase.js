import * as firebase from "firebase";
import config from '../keys';

firebase.initializeApp(config);

const fb = {
    auth: firebase.auth()
}

export default fb;
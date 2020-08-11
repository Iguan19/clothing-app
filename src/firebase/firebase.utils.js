import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDQ_VRB69k0NSMjy9ZXxF6ilE7fh5Cp6hs",
  authDomain: "crwn-db-d9cc9.firebaseapp.com",
  databaseURL: "https://crwn-db-d9cc9.firebaseio.com",
  projectId: "crwn-db-d9cc9",
  storageBucket: "crwn-db-d9cc9.appspot.com",
  messagingSenderId: "1017105409188",
  appId: "1:1017105409188:web:b1b535c88e2c9dbb4e7231",
  measurementId: "G-BQ2N8TWVZ2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch(error) {
			console.log('Error creating user', error.message);
		}
	}
	return userRef;	
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

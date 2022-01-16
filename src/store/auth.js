import firebase from 'firebase/compat/app';
export default {
	actions: {
		async login({email, password}) {
			try {
				console.log(email)
				console.log(password)
				await firebase.auth().signInWithEmailAndPassword(email, password)
			} catch (e) {
				console.log(e)
				throw e
			}
		}
	}
}

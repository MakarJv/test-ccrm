import firebase from 'firebase/compat/app'
export default {
	mutations: {
		async log() {
			console.log('commit')
		}
	},
	actions: {
		async login({commit}, {email, password}) {
			commit('log')
			console.log({email, password})
				try {
					await firebase.auth().signInWithEmailAndPassword(email, password)
				} catch (e) {
					console.log()
					throw e
				}
		}
	}
}

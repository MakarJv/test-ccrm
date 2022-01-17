import firebase from 'firebase/compat/app'

export default {
	mutations: {
		async log() {
			console.log('commit')
		}
	},
	actions: {
		// eslint-disable-next-line no-unused-vars
		async login({dispatch, commit}, {email, password}) {
			try {
				await firebase.auth().signInWithEmailAndPassword(email, password)
			} catch (e) {
				commit('setError', e)
				throw e
			}
		},
		async register({dispatch, commit}, {email, password, name}) {
			try {
				await firebase.auth().createUserWithEmailAndPassword(email, password)
				const uid = await dispatch('getUid')
				console.log(uid)
				await firebase.database().ref(`/users/${uid}/info`).set({
					bill: 10000,
					name: name
				})
				console.log('pot')
			} catch (e) {
				commit('setError', e)
				throw e
			}
		},
		getUid() {
			const user = firebase.auth().currentUser
			return user ? user.uid : null
		},
		async logout() {
			await firebase.auth().signOut()
		}
	}
}

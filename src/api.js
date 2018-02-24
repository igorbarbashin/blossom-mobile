
import fire from './fire';

function addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
}

export function createStudent(){
	var student = {
		firstName:   undefined,
		lastName:    undefined,
		age:         undefined,
		flower_id:   undefined,
		location:    undefined,
		likes:       undefined,
		dislikes:    undefined,
		schedule_id: undefined,
	};
	return firebase.database().ref().child('students').push();
}

export function createEducator(){
	var educator = {
		firstName:     undefined,
		lastName:      undefined,
		phone:         undefined,
		email:         undefined,
		avatar:        undefined,
		certification: undefined,
	}
	return firebase.database().ref().child('educators').push();
}

export function createCard(){
	var card = {
		title:       undefined,
		description: undefined,
		image:       undefined,
		capacity:    undefined,
		educator_id: undefined,
		location:    undefined,
	}
	firebase.database().ref('cards/' + card.id).set(card);
}


export function writeStudentData(student){
	firebase.database().ref('students/' + student.id).set(student);
}

export function writeEducatorData(educator){
	firebase.database().ref('educators/' + educators.id).set(educators);
}

export function writeCardData(card){
	firebase.database().ref('cards/' + card.id).set(card);
}


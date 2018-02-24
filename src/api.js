
import fire from './fire';

function addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
}

function writeStudentData(student){
	firebase.database().ref('students/' + student.id).set(student);
}

function writeEducatorData(educator){
	firebase.database().ref('educators/' + educators.id).set(educators);
}

function writeCardData(card){
	firebase.database().ref('cards/' + card.id).set(card);
}


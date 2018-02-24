
import fire from './fire';
import firebase from 'firebase';

export function createStudent(){
	var student = {
		firstName:   '',
		lastName:    '',
		age:         null,
		flower_id:   null,
		location:    null,
		likes:       [],
		dislikes:    [],
		schedule_id: null,
	};
	const studentKey = firebase.database().ref().child('students').push().key;
    firebase.database().ref().update({ ['/students/' + studentKey]: student});
    return studentKey;

>>>>>>> ecf97cfe46ee7400ef6213038b6e198b26ed48bd
}

export function createEducator(){
	var educator = {
		firstName:     '',
		lastName:      '',
		phone:         null,
		email:         null,
		avatar:        null,
		certification: null,
	}
	const educatorKey = firebase.database().ref().child('educators').push().key;
    firebase.database().ref().update({ ['/educators/' + educatorKey]: educator});
    return educatorKey;
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
	return firebase.database().ref().child('cards').push();
}

export function writeStudentData(student){
	firebase.database().ref('students/' + student.id).set(student);
}

export function writeEducatorData(educator){
	firebase.database().ref('educators/' + educator.id).set(educator);
}

export function writeCardData(card){
	firebase.database().ref('cards/' + card.id).set(card);
}


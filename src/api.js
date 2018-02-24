
import fire from './fire';
import firebase from 'firebase';

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
	studentKey = firebase.database().ref().child('students').push().key;
	return firebase.database().ref().update({'/students/' + studentKey: student});
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


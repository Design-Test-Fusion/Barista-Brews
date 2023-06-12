'use strict'
let feedbackArray=[]
function Feedback(name, email,feedback) {
  this.name = name;
  this.email = email;
  this.feedback = feedback;
  feedbackArray.push(this)
}


let inputName=document.getElementsByClassName('name');
inputName.textContent=this.name;

  let inputemail=document.getElementsByClassName('email');
  inputemail.textContent=this.email;

  let feedback=document.getElementsByClassName('feedback');
  feedback.textContent=this.feedback;



// function final(e){
//   e.preventDefault();
//   let userName=e.target.username.value;
//   let userEmail=e.target.email.value;
//   let userFeedback=e.target.feedback.value;

//   let newFeedback=new Feedback(userName,userEmail,userFeedback)


 

// if(userName =='null' && userEmail=='null' && userFeedback=='null' ) {
//   alert('fill the blank')
// }
// else {
// alert('thank you '+"  " +userName )
//  }
// store();

// };


// function store() {

//    const jsonArray=JSON.stringify(feedbackArray);
//  window.localStorage.setItem("feedback",jsonArray);
// }

function final(e) {
  e.preventDefault();
  let name = e.target. username.value;
  let email = e.target. email.value;
  let feedback = e.target. feedback.value;

  const drink = new Feedback(name, email, feedback);

  const feedbackConst = localStorage.getItem('feedbackInLocalStorage');
  let feedbackInLocalStorageArray = JSON.parse(feedbackConst)

  if (feedbackInLocalStorageArray) {
     feedbackInLocalStorageArray.push(feedback)
  } else {
      feedbackInLocalStorageArray = [feedback]
  }

  const stringfeedbackInLocalStorageArray = JSON.stringify(feedbackInLocalStorageArray)

  // save data to localstorage
  localStorage.setItem(' feedbackInLocalStorage ', feedbackInLocalStorageArray)

  openPopup();
  form1.reset();


}
function openPopup() {
  let popup = document.getElementById("popup")
  popup.classList.add("open-popup")
}
function closePopup() {
  popup.classList.remove("open-popup")
}


let submitform=document.getElementById('form1');
submitform.addEventListener('submit',final);



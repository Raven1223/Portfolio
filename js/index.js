let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

copyright.innerHTML =`Shaun Zulu ${thisYear}`;

footer.appendChild(copyright);

let skills = ["Typing", "Diagnosing", "Fixing"];

let skillsSection = document.querySelector("#skills");

let skillsList = skillSection.querySelector("ul");

for (i=0; i < skills.length; i++){
let skill = document.createElement("li");

skill.innerHTML = skills[i];

skillsList.appendChild(skill);
}

let messageForm = document.getElementsByName("leave_message");


messageForm.addEventListener("submit", function(event){
event.preventDefault();
let messageForm = event.target;

let enterName = event.target.name;
let enterEmail = event.target.email;
let enterMessage = event.target.message;

console.log(enterName);
console.log(EnterEmail);
console.log(EnterMessage);

			//Display Messages in List
let messageSection = document.getElementById("#messages");

let messageList = messageSection.querySelector("ul");

let newMessage = document.createElement("li");

newMessage.innerHTML =`<a href= "mailto:${enterEmail}">${enterName}</a>
			<span>${messageInput}</span>
`;
}
				//Removing Button
let removeButton.document.createElement("button");

removeButton.type= "button";

removeButton.addEventListener("click", (event){

let entry = removeButton.parentNode;
entry.remove();

messageList.appendChild(removeButton);

messageList.appendChild(newMessage);



messageForm.reset();
}

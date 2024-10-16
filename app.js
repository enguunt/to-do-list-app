// define
let input = document.getElementsByTagName('input')[0];
let ol = document.getElementsByTagName('ol')[0];
let addBtn = document.querySelector('.add');
// onclick -> es5
// addEventListener -> es6 -> click,scroll,key...
// function () {} -> ()=>{} 
// function niilber () {} -> niilber ()=>{}
addBtn.addEventListener('click',()=>{
	//alert('test');
	if(input.value==""){
		alert("Cannot be empty");
	}else{
		// li tag shineer uusgene
		let li = document.createElement('li');
		li.innerText=input.value;
		console.log(li);
		// ol tag dotor li tagaa nemne
		ol.append(li);
		// input ee hooson bolgoh
		input.value="";
		let delBtn = document.createElement('button');
		delBtn.innerHTML="<i class='bi bi-trash3'></i>";
		li.append(delBtn);
		//emoji getbootstrap aas awn
		//class ner uguh -> className, classList
		delBtn.className = "del";
		let checkBtn = document.createElement('button');
		checkBtn.innerHTML="<i class='bi bi-file-earmark-check'></i>";
		li.append(checkBtn);
	}
	saveData();
});
// ol event
ol.addEventListener('click',(e)=>{
	console.log(e.target);
	let target = e.target;
	//parentElement => tuhain tag-iin gadna taliin tag 
	let parentEl = (target.parentElement).parentElement;
	if(target.className=="bi bi-trash3"){
		// remove() -> tag ustgah
		parentEl.remove();
	}else if(target.className=="bi bi-file-earmark-check"){
		//parentEl.Style.color="green";
		//toggle
		parentEl.classList.toggle("checked");
		
	}
});
saveData
// session-> login, register,
// localStore -> web browser / not deleted
// coockie -> tur zuurinh
// setItem() -> save/hadagah , getItem () -> hadaglasanaa avah
localStorage.setItem('name',"Enguun");
let get = localStorage.getItem('name');
console.log(get);
function saveData(){
	localStorage.setItem('todo',ol.innerHTML);
}
function getData(){
	ol.innerHTML = localStorage.getItem('todo');
}
getData();
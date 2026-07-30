// 前提
const btn = document.getElementById("btn");
const texts = document.getElementById("texts");
const ul = document.getElementById("task");

// 配列を作る
let tasks = [];

// ボタンでリストを生成する
btn.addEventListener("click", function(){

 if(texts.value === "") return; // 空入力を弾く

 tasks.push({
  text: texts.value,
  completed: false
  });

  texts.value = "";

  render();

});

// リスト・ボタンを表示する
function render(){
ul.innerHTML = "";

tasks.forEach(function(task, index){

  const li = document.createElement("li");
  li.textContent = task.text;
　li.className = "text";

  
  if(task.completed === true){
   li.classList.add("comple");
  } // 取り消し線の表示


  const delbtn = document.createElement("button");
  delbtn.textContent = "削除";
  delbtn.className = "delbtn";  

  delbtn.addEventListener("click", function(){ // 削除ボタンの中身
  tasks.splice(index, 1);
  

  render();
  });
  

  const combtn = document.createElement("button");
  combtn.textContent = "完了";
  combtn.className = "complebtn";

  combtn.addEventListener("click", function(){ // 完了ボタンの中身
  tasks[index].completed = !tasks[index].completed;

  
  render();
  });


  li.appendChild(combtn);
  li.appendChild(delbtn);
  ul.appendChild(li);
 });
}

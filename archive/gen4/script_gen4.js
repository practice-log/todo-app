// 前提
const btn = document.getElementById("btn");
const texts = document.getElementById("texts");
const ul = document.getElementById("ul");

// 配列
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 動作の保存・localStorage呼び出し
function save(){
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
 );
}

// リストデータの作成
btn.addEventListener("click", function(){

  if(texts.value.trim() === "") return;
    // trimで最初と最後の空白を無視した上で入力がなければ返す
  
  tasks.push({
   txt: texts.value,
   completed: false
   });

  texts.value = "";

  save();
  render();

});


// リスト・ボタンを表示
function render(){
 ul.innerHTML = "";

 tasks.forEach(function(task, index){
  
  const li = document.createElement("li"); // リストの生成
  li.textContent = task.txt;
  li.className = "list";

  if(task.completed === true){
   li.classList.add("lineth");
  }

  const combtn = document.createElement("button"); // 完了ボタン
  combtn.textContent = "完了";
  combtn.className = "combtn";
   combtn.addEventListener("click", function(){
   tasks[index].completed = !tasks[index].completed;
    save();
    render();
  });

  const delbtn = document.createElement("button"); // 削除ボタン
  delbtn.textContent = "削除";
  delbtn.className = "delbtn";
   delbtn.addEventListener("click", function(){
   tasks.splice(index, 1);
    save();
    render(); 
  });

  li.appendChild(combtn);
  li.appendChild(delbtn);
  ul.appendChild(li);
 });
}

render();

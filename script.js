// 前提
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const texts = document.getElementById("texts");
const ul = document.getElementById("ul");

// 配列
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 保存
function save(){
  localStorage.setItem(
   "tasks", JSON.stringify(tasks)
  )};

// タスクデータの作成

function addtask(){  
  if(texts.value.trim() === "") return;
  
  tasks.push({
    txt: texts.value,
    completed: false,
    order: Date.now()
   });

  texts.value = "";

   save();
   render();
  };

  btn.addEventListener("click", addtask); // 追加ボタン

texts.addEventListener("keydown", function(e){
   if(e.key === "Enter"){
     addtask();
    } //　エンターキーで追加
  });

// リセットボタン
btn2.addEventListener("click", function(){
  tasks = [];
 save();
 render();
});

// リスト・ボタンの生成
function render(){
 
  ul.innerHTML = "";

 tasks.forEach(function(task, index){

  const li = document.createElement("li"); // リスト
  li.className = "list";

  const span = document.createElement("span");
  span.textContent = task.txt;
   if(task.completed){
    span.classList.add("lineth");
   } // テキスト

  const actbtn = document.createElement("div");
    actbtn.className = "actbtn"; // ボタン類

  const combtn = document.createElement("button"); // 完了ボタン
   combtn.textContent = "完了";
   combtn.className = "combtn";
   combtn.addEventListener("click", function(){
    tasks[index].completed = !tasks[index].completed;

   tasks.sort(function(a, b){
    if(a.completed === b.completed){
    return a.order - b.order; // 同グループ内はorder配置
     }
    if(a.completed) return 1;
     return -1; // completedで分類
    }); // 未完了を上にして並べ替え

     save();
     render(); 
   });

  const delbtn = document.createElement("button"); // 削除ボタン
   delbtn.textContent = "消去";
   delbtn.className = "delbtn";
   delbtn.addEventListener("click", function(){
    tasks.splice(index, 1);
     save();
     render();
   });
 
  actbtn.appendChild(combtn);
  actbtn.appendChild(delbtn);
  
  li.appendChild(span);
  li.appendChild(actbtn);
  ul.appendChild(li);
 });
}

render();

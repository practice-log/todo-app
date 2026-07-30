// ボタン押下でリストに追加
const button = document.getElementById("btn");
const task = document.getElementById("text");
const ul = document.getElementById("tasklist")
button.addEventListener("click", function(){
const li = document.createElement("li");
li.textContent = task.value;
task.value = "";
li.className = "list";

// 完了ボタンでタスクに取り消し線を引く
const cl = document.createElement("button");
cl.textContent = "完了";
cl.addEventListener("click", function(){
li.classList.toggle("cl");
});
cl.className = "clbtn";

// リストを削除する
const delbtn = document.createElement("button");
delbtn.textContent = "削除";
delbtn.className = "delbtn";
delbtn.addEventListener("click", function(){
li.remove();
});

// リスト・完了ボタン・削除ボタンを生成
li.appendChild(cl);
li.appendChild(delbtn);
ul.appendChild(li);
});

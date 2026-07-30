// テキストボックスクリックで「テキストを入力」を削除
let element = document.getElementById("text1");
element.addEventListener("click", function (){element.value = ""});

// フォーカスが外れたら「テキストを入力」を戻す
element.addEventListener("blur", function(){if (element.value === ""){element.value = "テキストを入力"}});

// ボタン押下でテキストボックスをリストへ移す
const button = document.getElementById("btn");
const txt = document.getElementById("text1");
const ul = document.getElementById("tasklist");
button.addEventListener("click", function(){
const li = document.createElement("li");
li.textContent = txt.value;
li.className = "list";

// タスクリストを削除する
const delbtn = document.createElement("button");
delbtn.textContent = "削除";
delbtn.className = "delbtn";
delbtn.addEventListener("click", function(){
li.remove();
});

li.appendChild(delbtn);
ul.appendChild(li);

txt.value = "テキストを入力";
});
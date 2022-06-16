import "./styles.css";

const eventAdd = () => {
  // 入力テキストを取得、テキストボックスをリセット
  const userText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //  divタグを作成、クラス名を付与
  const div = document.createElement("div");
  div.className = "list-row";

  //  liタグを作成、入力テキストを追加、divタグ直下に追加
  const li = document.createElement("li");
  li.innerText = userText;
  div.appendChild(li);

  //  完了ボタンを作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了のTODOから削除
    const completeTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);

    // 完了したTODOに追加
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    const addCompleteList = document
      .getElementById("complete-list")
      .appendChild(li);
    addCompleteList.appendChild(backButton);

    //  戻るボタン
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);

      const li = document.createElement("li");
      li.innerText = userText;
      div.appendChild(li);
      document.getElementById("incomplete-list").appendChild(div);
      div.appendChild(completeButton);
      div.appendChild(deleteButton);
    });
  });

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //  追加
  document.getElementById("incomplete-list").appendChild(div);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => eventAdd());

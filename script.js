document.addEventListener("DOMContentLoaded", function () {
  const redInputBox = document.getElementById("input-box");
  const redList = document.getElementById("red-list");

  const whiteInputBox = document.getElementById("white-input-box");
  const whiteList = document.getElementById("white-list");

  function addTask(redInputBox, list) {
    if (redInputBox.value.trim() === "") {
      alert("Are you drunk? You forgot to write something.");
    } else {
      let li = document.createElement("li");
      li.innerHTML = redInputBox.value;
      list.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
      redInputBox.value = "";
      saveData();
    }
  }

  redInputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addTask(redInputBox, redList);
    }
  });

  whiteInputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addTask(whiteInputBox, whiteList);
    }
  });

  const redAddButton = document.getElementById("red-add-button");
  redAddButton.addEventListener("click", function () {
    addTask(redInputBox, redList);
  });

  const whiteAddButton = document.getElementById("white-add-button");
  whiteAddButton.addEventListener("click", function () {
    addTask(whiteInputBox, whiteList);
  });

  redList.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName === "SPAN") {
        const confirmDelete = window.confirm(
          "Are you sure you want to delete this wine?"
        );
        if (confirmDelete) {
          e.target.parentElement.remove();
          saveData();
        }
      }
    },
    false
  );

  whiteList.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName === "SPAN") {
        const confirmDelete = window.confirm(
          "Are you sure you want to delete this wine?"
        );
        if (confirmDelete) {
          e.target.parentElement.remove();
          saveData();
        }
      }
    },
    false
  );

  function saveData() {
    localStorage.setItem("redListData", redList.innerHTML);
    localStorage.setItem("whiteListData", whiteList.innerHTML);
  }

  function showTasks() {
    redList.innerHTML = localStorage.getItem("redListData");
    whiteList.innerHTML = localStorage.getItem("whiteListData");
  }

  showTasks();
});

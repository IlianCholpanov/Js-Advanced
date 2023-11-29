window.addEventListener("load", solve);

function solve() {
  const titleElement = document.getElementById("post-title");
  const categoryElement = document.getElementById("post-category");
  const contentElement = document.getElementById("post-content");
  const publishButton = document.getElementById("publish-btn");
  const reviewListElement = document.getElementById("review-list");
  const publishedListElement = document.getElementById("published-list");
  const clearButton = document.getElementById("clear-btn");

  publishButton.addEventListener("click", publishHandler);

  function publishHandler(e) {
    let title = titleElement.value;
    let category = categoryElement.value;
    let content = contentElement.value;

    if (title === "" || category === "" || content === "") {
      return;
    }

    let post = createPost(title, category, content);
    reviewListElement.appendChild(post);

    titleElement.value = "";
    categoryElement.value = "";
    contentElement.value = "";
  }

  function createPost(title, category, content) {
    let liElement = document.createElement("li");
    liElement.classList.add("rpost");

    let article = document.createElement("article");

    let h4 = document.createElement("h4");
    h4.textContent = title;
    let categoryParagraph = document.createElement("p");
    categoryParagraph.textContent = `Category: ${category}`;
    let contentParagraph = document.createElement("p");
    contentParagraph.textContent = `Content: ${content}`;

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("action-btn", "edit");
    editButton.addEventListener("click", editHandler);

    let approveButton = document.createElement("button");
    approveButton.textContent = "Approve";
    approveButton.classList.add("action-btn", "approve");
    approveButton.addEventListener("click", approveHandler);

    article.appendChild(h4);
    article.appendChild(categoryParagraph);
    article.appendChild(contentParagraph);

    liElement.appendChild(article);
    liElement.appendChild(approveButton);
    liElement.appendChild(editButton);

    return liElement;
  }

  function editHandler(e) {
    let liElement = e.target.parentElement;
    liElement.remove();

    let titleH4 = liElement.querySelector("h4");
    let titleValue = titleH4.textContent;

    let paragraphs = liElement.querySelectorAll("p");
    let categoryValue = paragraphs[0].textContent;
    let contentValue = paragraphs[1].textContent;

    titleElement.value = titleValue;
    categoryElement.value = categoryValue.substring(10);
    contentElement.value = contentValue.substring(9);
  }

  function approveHandler(e) {
    let liElement = e.target.parentElement;
    liElement.remove();

    let buttons = Array.from(liElement.querySelectorAll("button"));
    buttons.forEach((b) => b.remove());

    publishedListElement.appendChild(liElement);
  }

  clearButton.addEventListener("click", clearPostHandler);

  function clearPostHandler() {
    let postsToClear = Array.from(publishedListElement.children);
    postsToClear.forEach((p) => p.remove());
  }
}

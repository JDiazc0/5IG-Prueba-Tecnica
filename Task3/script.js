// Api URL
const URL = "https://jsonplaceholder.typicode.com/";

// Posts list
const postContainer = document.getElementById("post-container");
const searchInput = document.getElementById("search-input");

// Post details
const postDetails = document.querySelector(".post-details");
const detailTitle = document.getElementById("detail-title");
const detailBody = document.getElementById("detail-body");
const closeButton = document.getElementById("close-details");

let posts = [];
let userMap = {};
let comments = [];

// Get users from API
async function fetchUsers() {
  try {
    const response = await fetch(`${URL}users`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const users = await response.json();

    userMap = users.reduce((map, user) => {
      map[user.id] = user.name;
      return map;
    }, {});
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Get posts from API
async function fetchPosts() {
  try {
    const response = await fetch(`${URL}posts`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    posts = await response.json();
    renderPosts(posts);
  } catch (error) {
    postContainer.innerHTML = "<p>Error loading posts.</p>";
    console.error("Error fetching posts:", error);
  }
}

/**
 * Render posts on container
 * @param {Array} posts
 */
function renderPosts(posts) {
  postContainer.innerHTML = ""; // Clear previous posts
  posts.forEach((post) => {
    const div = document.createElement("div");
    div.className = "post-title";

    const userName = userMap[post.userId] || "Unknown User";

    div.innerHTML = `
        <strong class="post-username">${userName}</strong>
        <p>${post.title}</p>
    `;

    div.addEventListener("click", () => {
      showDetails(post);
    });

    postContainer.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  console.log("filtra");
  const query = searchInput.value.toLowerCase();
  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(query)
  );
  renderPosts(filtered);
});

async function init() {
  await fetchUsers();
  await fetchPosts();
}

// Show post details
function showDetails(post) {
  postDetails.classList.remove("hidden");

  detailTitle.textContent = post.title;
  detailBody.textContent = post.body;

  loadComments(post.id);
}

/**
 * Load comments for a post
 */
async function loadComments(postId) {
  const commentsList = document.getElementById("comments-list");
  commentsList.innerHTML = ""; // Limpiar comentarios anteriores

  try {
    const response = await fetch(`${URL}posts/${postId}/comments`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const comments = await response.json();

    if (comments.length === 0) {
      commentsList.innerHTML = "<li>No comments found.</li>";
      return;
    }

    comments.forEach((comment) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <p>(${comment.email})</p>
        <p>${comment.body}</p>
      `;
      li.classList.add("comment-item");
      commentsList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    commentsList.innerHTML = "<li>Error loading comments.</li>";
  }
}

// Hidde post details
closeButton.addEventListener("click", () => {
  postDetails.classList.add("hidden");
});

init();

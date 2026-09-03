const express = require("express");

const app = express();
const port = 3000;
const githubData={
  "login": "sakshi170501",
  "id": 197395661,
  "node_id": "U_kgDOC8QEzQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/197395661?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sakshi170501",
  "html_url": "https://github.com/sakshi170501",
  "followers_url": "https://api.github.com/users/sakshi170501/followers",
  "following_url": "https://api.github.com/users/sakshi170501/following{/other_user}",
  "gists_url": "https://api.github.com/users/sakshi170501/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sakshi170501/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sakshi170501/subscriptions",
  "organizations_url": "https://api.github.com/users/sakshi170501/orgs",
  "repos_url": "https://api.github.com/users/sakshi170501/repos",
  "events_url": "https://api.github.com/users/sakshi170501/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sakshi170501/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sakshi Kumari",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2025-02-01T14:33:34Z",
  "updated_at": "2026-08-26T16:01:14Z"
}


app.get("/", (req, res) => {
    res.send("Home page working");
});

app.get("/twitter", (req, res) => {
    res.send("Twitter page working");
});
app.get("/utube", (req, res) => {
    res.json(githubData);
});
app.get("/github", (req, res) => {
    res.send("Twitter page working");
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}


function saveArticle() {
  let target = $(event.target)
  let parent = target.parent();
  let article = {
    title: parent.children(".card-title").text(),
    preview: parent.children(".card-text").text(),
    link: parent.children(".hidden-link").text(),
    sport: parent.children(".hidden-sport").text(),
    hasBeenRead: false
  }
  console.log(article);
  $.ajax({
    method: "POST",
    url: "/api/articles/",
    data: article
  })
    .then(function (data) {
      alert("Article is saved!");
    })
    .catch((err) => console.log(err));
  target.hide();
}

function deleteArticle() {
  var id = $(event.target).attr("data-id");
  console.log("id " + id)
  $.ajax({
    method: "DELETE",
    url: "api/articles/" + id
  })
    .then(function (data) {
      location.reload();
    })
    .catch(err => console.log(err));
}
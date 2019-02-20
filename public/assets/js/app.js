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
      // target.innerHTML() = `
      // <a class="btn btn-danger disabled" role="button" aria-disabled="true">Saved</a>`;
      alert("article is saved");
      console.log(data)
    })
    .catch((err) => console.log(err));
}
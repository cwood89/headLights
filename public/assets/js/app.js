function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}


function saveArticle(id) {
  $.ajax({
    method: "POST",
    url: "/api/articles/" + id
  })
    .then(function (data) {
      if (data.success) {
        alert("Article is saved!");
      }
    })
    .catch((err) => console.log(err));
    $(event.target).hide();
}

function deleteArticle(id) {
  $.ajax({
    method: "DELETE",
    url: "api/articles/" + id
  })
    .then(function (data) {
      location.reload();
    })
    .catch(err => console.log(err));
}
var imgs =["images/bellflower.jpg", "images/free.jpg", "images/Glad.jpg", "images/ixia.jpg", "images/Lily.jpg", "images/Izzy.png", "images/weiss.png"];
var alts = ["Bellflower Clothing", "Freesia Clothing", "Gladiolus Clothing", "Ixia Clothing", "Glorisoa Lily Clothing", "Izzy", "Weiss Schnee"];

var desc = ["Part of the","Part of the", "Part of the","Part of the","Part of the", "A drawing of my character,", "Fanart of"];
var link_texts = ["Flower Clothing Study", "Flower Clothing Study", "Flower Clothing Study", "Flower Clothing Study", "Flower Clothing Study", "Izzy", "Weiss Schnee"];
var urls = ["flowerclothingstudy.html", "flowerclothingstudy.html", "flowerclothingstudy.html", "flowerclothingstudy.html", "flowerclothingstudy.html", "izzy.html", "weissschnee.html"];

var random_index = function(len) {
  return Math.floor(Math.random() * len);
}

var change_img = function() {
  var index = random_index(imgs.length);
  var img = document.getElementById("RNDimg");
  img.src = imgs[index];
  img.alt = alts[index];

  var title = document.getElementById("RNDtitle");
  title.innerHTML = alts[index];

  var bio = document.getElementById("RNDdesc");
  bio.innerHTML = desc[index];

  var link = document.getElementById("RNDlink");
  link.href = urls[index];
  link.innerHTML = link_texts[index];
}

window.onload = change_img;

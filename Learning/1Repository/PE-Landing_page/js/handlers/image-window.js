function showImage(imageId) {
  let source = document.getElementById(imageId).getAttribute("src");
  document.getElementById("gallery-image").setAttribute("src", source);
  document.getElementById("image-container").style.display = "";
  valueId = parseInt(imageId.substr(imageId.length - 1));
}

function hideImage() {
  document.getElementById("image-container").style.display = "none";
}

function previousImage() {
    let previousValue = valueId -1;
    previousValue === 0 ? previousValue = 5 : previousValue = previousValue;
    let currentID = "image" + previousValue.toString(10);
    showImage(currentID);
}

function nextImage() {
    let nextValue = valueId + 1;
    nextValue === 6 ? nextValue = 1 : nextValue = nextValue;
    let currentID = "image" + nextValue.toString(10);
    showImage(currentID);
}

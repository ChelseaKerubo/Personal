var thumbnailElement = document.getElementById("smart_thumbnail");
thumbnailElement.className ="";
thumbnailElement.addEventListener("click", function() {

    thumbnailElement.className = "";


    if (thumbnailElement.className == "") {
	thumbnailElement.className = "small";
    }
});

$(document).ready(function() {
    $("#trigam_buttom").click(function() {
        dropdownTrigam();
    });
    $("#right_arrow").click(function() {
        plusSlides(1);
    });
    $("#img-window").hover(function() {
        bigMe();
    }, function() {
        smallMe();
    });
    $("#img-window").click(function() {
        showVideo();
    });
    $("#close").click(function() {
        hideVideo();
    });
    $("#allSelector").click(function() {
        setUnderLine(this.id);
        initState();
    });
    $("#projectSelector").click(function() {
        setUnderLine(this.id);
        projects();
    });
    $("#localSelector").click(function() {
        setUnderLine(this.id);
        local();
    });
    $(".column-img").click(function() {
        showImage(this.id);
    });
    $("#close-image").click(function() {
        hideImage();
    });
    $("#previous-image").click(function() {
        previousImage();
    });
    $("#next-image").click(function() {
        nextImage();
    });
});
//dark mode toggle
$(".btn-toggle").click(function(){
    $('body').toggleClass('dark-theme');
})

//navbutton color change on hover
$(".toggleButton").hover(function(){
    $(this).toggleClass('toggleHover');}
)

//navbutton on click
$(".toggleButton").click(function(){
    $(this).toggleClass('active');

    var panelId = $(this).attr("id") + "Panel";
    
    $("#" + panelId).toggleClass("hidden");

    var numberOfActivePanels = 4 - $('.hidden').length

    if (numberOfActivePanels == 0){
        
    }

    //panel area width
    $(".panel").width(($(window).width() / numberOfActivePanels)- 10);

})

//panel height
$(".panel").height($(window).height() - $('#header').height() - 14);

//iframe change content
function changeIframe(){

    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" 
    + $('#cssPanel').val()  + "</style></head><body>" + $('#htmlPanel').val() + "</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());


}

changeIframe()

$(".panel").on('change keyup paste', function() {

changeIframe()


});

//Make Iframe white

$('iframe').css('background', 'white');
$('iframe').contents().find('body').css('backgroundColor', 'white');
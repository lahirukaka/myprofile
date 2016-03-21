$(function(){
    /*events*/
    $('#face img').hover(shakeProfilePicture);
    $("#social > div.full-inner-wrapper").hover(flipSocialIcons);
    $(".edu-section-cert > img").click(openCert);
    $(".edu-section-cert > img").hover(certFocused,certUnFocused);
    $("#contact .contact-item").hover(contactIconHover);
    $("#contact .contact-item").click(contactIconClick);
    /*sidebar*/
    shakeProfilePicture();
    contactIconRubberBand($("#contact .contact-item"),"rubberBand");
});

/*functions*/
function shakeProfilePicture()
{
    $ele=$('#face img');
    $cls="animated swing";
    $ele.addClass($cls);
    doWhenDone($ele,function(){$ele.removeClass($cls);shakeName();flashTitles();});
}

function shakeName()
{
    $ele=$("#name");
    $cls="animated shake";
    $ele.addClass($cls);
    doWhenDone($ele,function(){$ele.removeClass($cls);});
}

function flashTitles()
{
    $ele=$("#titles");
    $cls="animated flash";
    $ele.addClass($cls);
    doWhenDone($ele,function(){$ele.removeClass($cls);});
}

function flipSocialIcons()
{
    $ele=$('#social img.social-icons');
    $cls="animated rotateIn";
    $time=200;
    $ele.each(function(i,e){
        $(e).addClass($cls).delay(500);
        doWhenDone($(e),function(){
            $(e).removeClass($cls);
        });
    });
}

function openCert()
{
    var url=$(this).attr("src");
    var win=window.open(url,'_blank');
    if(win){win.focus();}
}

function certFocused()
{
    var ele=$("#notice");
    ele.removeClass("hidden");
    ele.addClass("visible");
    ele.text("Click on certificate to enlarge");
}

function certUnFocused()
{
    var ele=$("#notice");
    ele.removeClass("visible");
    ele.addClass("hidden");
}

function contactIconRubberBand($ele,$anim)
{
    var cls="animated " + $anim;
    $ele.each(function(i,e){
        $(e).children("img").addClass(cls);
        doWhenDone($ele,function(){$(e).children("img").removeClass(cls);})
    });
}

function contactIconHover()
{
    var cls="animated jello";
    $(this).addClass(cls);
    doWhenDone($(this),function(){$(this).removeClass(cls);});
}

function contactIconClick()
{
    var cls="animated flipOutY";
    var url=$(this).attr("data-url");
    $(this).children("img").addClass(cls);
    doWhenDone($(this),function(){
        var win=window.open(url,'_blank');
        if(win){win.focus();} 
        $(this).children("img").removeClass(cls);
    });
}

/*common*/
function doWhenDone($ele,$func)
{
    $ele.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', $func);
}
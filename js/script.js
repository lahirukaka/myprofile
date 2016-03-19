$(function(){
    /*events*/
    $('#face img').hover(shakeProfilePicture);
    $("#social > div.full-inner-wrapper").hover(flipSocialIcons);
    /*sidebar*/
    shakeProfilePicture();
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

/*common*/
function doWhenDone($ele,$func)
{
    $ele.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', $func);
}
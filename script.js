var clicked = 0

function opennav()
{
    if(clicked)
    {
        $('.main').css('width','0')
        $('li').css('display','none')
        clicked=0   
    }
    else
    {
        $('.main').css('width','100%')
        $('li').css('display','block')
        clicked=1;
    }
}

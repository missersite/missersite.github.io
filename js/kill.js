/*$(function() {
    var title = document.title,
        animSeq = ["_", "/", "$", "-", "_"],
        animIndex = 0,
        titleIndex = 0;	
    function doInverseSpinZeroPitch() 
    {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) 
        {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 4) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[animIndex];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 400);*/

    $(function() 
    {
        var title = document.title,
            animSeq = 
            ["< >", "< / >", "< - >", "< _ >", "< $ >", "< T >",
            "< M/ >", "< M- >", "< M_ >", "< M$ >", "< MI >", "< MI/ >", "< MI- >",
            "< MI_ >", "< MI$ >", "< MIS >", "< MIS/ >", "< MIS- >", "< MIS_ >", "< MIS$ >",
            "< MISS >", "< MISS/ >", "< MISS- >", "< MISS_ >", "< MISS$ >", "< MISS >", "< MISSE/ >",
            "< MISSE- >", "< MISSE_ >", "< MISSE$ >", "< MISSE >", "< MISSE/ >", "< MISSE- >", "< MISSE_ >",
            "< MISSER$ >", "< MISSER >", "< MISSER >", "< MISSER >", "< MISSER >", "< MISSER$ >", "< MISSE_ >", "< MISSE- >",
            "< MISSE/ >", "< MISSE >", "< MISS$ >", "< MISS_ >", "< MISS- >", "< MISS/ >", "< MISS >",
            "< MISS$ >", "< MISS_ >", "< MISS- >", "< MISS/ >", "< MISS >", "< MIS$ >", "< MIS_ >",
            "< MIS- >", "< MIS/ >", "< MIS >", "< MI$ >", "< MI_ >", "< MI- >", "< MI/ >",
            "< MI >", "< M$ >", "< M_ >", "< M- >", "< M/ >", "< M >", "< $ >",
            "< _ >", "< - >", "< / >"],
            animIndex = 0,
            titleIndex = 0;
    
        function doInverseSpinZeroPitch() {
            var loadTitle = title.substring(0, titleIndex);
            if (titleIndex > title.length) {
                animIndex = 0;
                titleIndex = 0
            }
            if (animIndex > 72) {
                titleIndex++;
                animIndex = 0
            }
            document.title = animSeq[animIndex];
            animIndex++
        } window.setInterval(doInverseSpinZeroPitch, 1000);
    /*-------------------------------------------------------------------------------------------------------------------------------------------------- */
    var tKillNames = ["MISSER"];
    var ctKillNames = ["Fozzya", "ItsFaiter", "SAI", "wavy", "NoName", "1", "FlowSeal", "es1n1n", "Keaton", "YouGame.biz", "ed"];
    var weapons = ["ssg", "deserteagle", "ak47"];
    var $killFeedContainer = $('.kill-feed');
    var $killFeedElement = $('.kill-feed > div').hide();

    function handleKillFeed() {
        var $newFeedElement = $killFeedElement.clone();
        $newFeedElement.find('.weapons img:first-child').attr('src', 'images/' + weapons[Math.floor(Math.random() * weapons.length)] + '.png');
        $newFeedElement.find('.t').text(tKillNames[Math.floor(Math.random() * tKillNames.length)]);
        $newFeedElement.find('.ct').text(ctKillNames[Math.floor(Math.random() * ctKillNames.length)]);
        $killFeedContainer.append($newFeedElement.show().delay(1500).fadeOut(1500, function() {
            $(this).remove()
        }))

    }
    window.setInterval(handleKillFeed, 350)
	document.onkeydown = function(e) { 
	if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly. 
	} 
	return false; 
	}; 
	function click() { 
	if (event.button==2||event.button==3) { 
	oncontextmenu='return false'; 
	} 
	} 
	document.onmousedown=click 
	document.oncontextmenu = new Function("return false;") 
	function disableWheelScroll(){
	if (document.body.addEventListener) document.body.addEventListener('DOMMouseScroll', blockWheel, false);
	document.body.onmousewheel = blockWheel;
	}
	function blockWheel(event){
	if (!event) event = window.event;
	if (event.stopPropagation) event.stopPropagation();
	else event.cancelBubble = true;
	if(event.preventDefault) event.preventDefault();
	else event.returnValue = false;
	}
	disableWheelScroll();
});
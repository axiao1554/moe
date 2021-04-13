/*!
 * 切换title特效
 */
var OriginTitile = document.title,
titleTime;
document.addEventListener("visibilitychange",
function() {
    if (document.hidden) {
        // $('[rel="icon"]').attr("href", "/uploads/favicon-32x32-next.ico");
        document.title = "(✿◡‿◡)喔唷，崩溃啦！";
        clearTimeout(titleTime)
    } else {
        // $('[rel="icon"]').attr("href", "/uploads/favicon-32x32-next.ico");
        document.title = "(●ˇ∀ˇ●)咦！又好了！" + OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile
        },
        2000)
    }
});
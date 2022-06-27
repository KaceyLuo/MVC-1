import './app2.css'
import $ from "jquery";
const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tabBar.on("click", "li", e => {
    const $li = $(e.currentTarget);
    $li
        .addClass("selected")
        .siblings()
        .removeClass("selected")
    const index = $li.index() //点击的元素是第几个li
    console.log(index)
    $tabContent.children()
        //.eq(index).css({ display: 'block' })
        //.eq(index).show()
        .eq(index).addClass('active')
        //.siblings().css({ display: 'none' })
        //.siblings().hide()
        .siblings().removeClass('active')
});

$tabBar.children().eq().trigger('click')//第一次自动点第一个li





import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')
$square.on('click', () => {
    $square.toggleClass('active')//如果没有就加上active 有就删除
})
import $ from './lib/lib';

$('button').on('click', function() {
    $(this).hide().show().toggleClass('active').toggleAttributes('first', 'hello').getAttributes('first');
});
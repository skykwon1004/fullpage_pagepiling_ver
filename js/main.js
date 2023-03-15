$(function () {

    var pageTitle = [
        'title01',
        'title02',
        'title03',
        'title04',
        'title05'
    ]

    var pageOption = {
        navigation: false,
        direction: 'horizontal',
        anchors: [
            '01',
            '02',
            '03',
            '04',
            '05'
        ],

        //scrollingSpeed: 2000,

        afterRender: function () {
            $('.gnb li')
                .eq(0)
                .addClass('on');
            $('.section')
                .eq(0)
                .addClass('on');
            $('h1 span').text('어어어어')
        },
        onLeave: function (index, nextIndex, direction) {
            console.log(index, nextIndex, direction);
            $('.gnb li')
                .eq(nextIndex - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');
            $('.section')
                .eq(nextIndex - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');
            $('h1 span').text(pageTitle[nextIndex - 1])
        },
        
        afterLoad: function (anchorLink, index) { },
    }

    $('.main').pagepiling(pageOption);





    // https://github.com/alvarotrigo/pagePiling.js#pagepilingjs 참고













})
"use strict";


//navbar transparen effect


$(function() {

$(document).on('click','a.page-scroll',function(event){
  var $anchor=$(this);
  $('html,body').stop().animate({
    scrollTop: ($($anchor.attr('href')).offset().top-45)
  },1500,'easeInOutExpo');
  event.preventDefault();
});
});




 $(window).scroll(function() {
    if($(this).scrollTop() > 1000)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});








// -----------------read more-------------------

$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "more about") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("less about");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("more about");
      $("#text").slideUp();
    }
  });
});





// ---------------scroll to top button-----------------

$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");
  return false})})









// ------------------------swich language-----------------------

    const langEl = document.querySelector('.langWrap');
    const link = document.querySelectorAll('a');
    const aboutV = document.querySelector('.about');
    const newsV = document.querySelector('.news');
    const eventsV = document.querySelector('.events');
    const coursesV = document.querySelector('.course');
    const contactsV = document.querySelector('.contacts');


    link.forEach(el => {
      el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        aboutV.textContent = data[attr].about;
        newsV.textContent = data[attr].news;
        eventsV.textContent = data[attr].events;
        coursesV.textContent = data[attr].course;
        contactsV.textContent = data[attr].contacts;
      });
    });
    
    var data = {
        "armenian": 
        {
          "about": "Մեր Մասին",
          "news": "Նորություններ",
          "events": "Իրադարձություններ",
          "course": "Դասնթացներ",
          "contacts": "Կոնտակտ"
           
        },
        "russian": 
        {
          "about": "О нас",
          "news": "Новости",
          "events": "Мероприятия",
          "course": "Курсы",
          "contacts": "Контакты" 
        },
        "english": 
        {
          "about": "About us",
          "news": "News",
          "events": "Events",
          "course": "Courses",
          "contacts": "Contacts"
        }
      }






// -------------slide--------------

$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";
    
    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});
$(function () {
    $('.MultiCarousel').carousel({
        interval:2000,
        pause: "false"
    });
    $('#slowButton').click(function () {
        $('#homeCarousel').carousel({interval: 10000});
    });
    $('#fastButton').click(function () {
        $('#homeCarousel').carousel({interval: 1000});
    });
})
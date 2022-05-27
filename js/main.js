// $('nav menu');
// $('.icons > div');
// $('.icons img + h4');
// $('menu li:odd');
// $('img:not(.logo img)');
// $('li:has(a)');
// $('p:contains(client)');
// $('.logo li:first');
// $('#h2 > div + li:last');
// $('div:hidden');
// $('div:visibility');
//Примеры 

$(document).ready(function(){

//    function widthAndHeight(elmnt){
//       var className = "."+elmnt;
//       var w = $(className).width();
//       var h = $(className).height();
//       $('.mainText p').text ('Width: '+w+'; Height: '+h);
//    }

//    widthAndHeight('mainText');

//    $('.mainText').hide().fadeIn(2000);
   

//    function changeAttr(element, newAttr, newValue){
//       var className = "."+element;
//       $(className).attr(newAttr, newValue);
//    };

//    changeAttr('logo', 'title', 'HINT');

//    alert($('.logo img').attr('src'));
//    $('.mainText').fadeTo(1000, 0.5).fadeTo(1000,1);

//    function elementOut(element, time){
//       if(time>5000||time<1000||isNaN(time)){
//          return false;
//       } else {
//          var className = "."+element;
//          $(className).fadeOut(time);
//       }
//    };

// elementOut('mainText',2000);

//   $('nav menu').animate().addClass('border')

//    $('nav menu li a').css({
//       'color':'white',
//       'font-size':'25px',
//       'padding':'10px'
//    });

//    $('nav menu li a').animate({
//       'color':'white',
//       'font-size':'24px',
//       'padding':'20px'
//    },3000);

//    $('.mainText').before('<span>New Block</span>');
//    $('.mainText').after('<span>New Block</span>');
//    $('.mainText').append('<p>Your turn</p>');
//    $('.mainText').prepend('<p>Your turn</p>');

   // $('.icons img').each(function(){
   //    if($(this).attr('src')=='img/icon3.png') {
   //       $(this).fadeOut(1000);
   //    }
   // });

   // alert('div: ' + $('div').length);

   // var mainText = $('.mainText').clone();
   // $('body').append(mainText);

   // $('img[alt]').css('background',"black");

   $('.arrowUp').click(function(){ 
      $('header').hide(500);
      $('section:first').before('<a class="arrowDown">&darr;</a>');
      $('.arrowUp').hide(500);
   });

   $(document).on("click", ".arrowDown:first", function(){ 
      $('header').show(500);
      $('.arrowUp').show(500);
      $('.arrowDown:first').remove();
   });

   // $('.arrowUp').click(function(){
   //    $('header').slideToggle(500);
   //    if($('.arrowUp').text()=='-'){
   //       $('.arrowUp').text('+')
   //    } else {
   //       $('.arrowUp').text('-')
   //    }
   // });

   // $('menu li a').mouseover(function (){ 

   //    $(this).addClass('border');
      
   // })

   // $('menu li a').mouseout(function (){ 

   //    $(this).removeClass('border');
      
   // })
   // $('menu li a').hover(
   //    function (){ 
   //       $(this).addClass('border');
   //    },
   //    function (){ 
   //       $(this).removeClass('border');
   //    })

   // $('.btn').click(function(e){
   //    var answer = confirm('Do you want to send date?')
   //    if(!answer){
   //       e.preventDefault();
   //    }
   // })

   $('.small a').click(function(e){
      if($('.big img').attr('src')!==$(this).attr('href')){
         $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
      }
      e.preventDefault()
   });

   $('.button').click(function(){
      $('.gallery').slideToggle(500);
      if($('.button').text()=='-'){
         $('.button').text('+')
      } else {
         $('.button').text('-')
      }
   });

   $('.small a img').click(function(){
      $('.small a img').fadeTo(500,1).css({
         'border':'none'
      });
      $(this).fadeTo(500,0.6).css({
         'border': '1px solid #fc635e'
      });
   });

   // $(':submit').click(function(){
   //    var value = $('textarea').val();
   //    alert(value);
   // })

   // $(':submit').click(function(){
   //    var value = $('input.text1').val();
   //    alert(value);
   // })

   // $(':submit').click(function(){
   //    var value = $('#select1 :selected').val();
   //    alert(value);
   // })

   // $(':submit').click(function(){
   //    var value = $(':checkbox:checked').each(function() {
   //       var value = $(this).val();
   //       alert(value);
   //    });
   // })

   // $('.form1').submit(function(e){
   //    if($('.text1').val()=="") {
   //       e.preventDefault();
   //       alert('doesnt exist')
   //    }
   // });

   // $('.text1').focus(function() {
   //    $(this).css({
   //       'border': '2px double red',
   //       'background': 'green'
   //    });
   // });

   //    $('.text1').focus(function() {
   //    $(this).addClass('border');
   // });

   // $('.text1').blur(function() {
   //    $(this).removeClass('border');
   // });

   // $('#select1').change(function() {
   //    var v = $('#select1 :selected').val();
   //    // if(v==1) {
   //    //    $('#select2').html('<option value="1">Number one</option><option value="2">Number two</option>')
   //    // }else if(v==2){
   //    //    $('#select2').html('<option value="1">Number one</option><option value="2">Number two</option><option value="3">Number three</option>' )
   //    // }else if(v==3){
   //    //    $('#select2').html('<option value="1">Number one</option><option value="2">Number two</option><option value="3">Number three</option><option value="4">Number four</option>' )
   //    // } else {
   //    //    $('#select2').html('<option value="1">Number one</option>')
   //    // }
   //    switch(v) {
   //       case '1':
   //          $('#select2').html('<option value="1">Number one</option><option value="2">Number two</option>');
   //          break;
   //       case '2':
   //          $('#select2').html('<option value="1">Number one</option><option value="2">Number two</option><option value="3">Number three</option>' );
   //          break;
   //       case '3':
   //          $('#select2').html('<option value="1">Number one</option><option value="2">Number two</option><option value="3">Number three</option><option value="4">Number four</option>' );
   //          break;
   //       case '4':
   //          $('#select2').html('<option value="1">Number one</option>')
   //          break;
   //    }
   // });

   
});



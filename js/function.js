var enter_cnt = 0;
var check_enter_cnt = false;

var gender = 0;
var select_value = 0;

$(function(){

  $('body').keypress(function(event){
    let key_code = event.which;
    //console.log(key_code);
    let video_src = "/video/IMG_5365.MP4";
    if(key_code == 13 && check_enter_cnt == true){
      enter_cnt = enter_cnt + 1;
      console.log("enter_cnt: "+enter_cnt);

      

      if (enter_cnt == 1){
        $('#text1').hide();
        
        video_src = "/video/IMG_5365.MP4";
        $('#background-video source').attr('src', video_src);
        $('#background-video')[0].load();

      }else if(enter_cnt == 2){
        $('#background-video').trigger('play');
      }else if(enter_cnt == 3){
        $('#text2').hide();
        video_src = "/video/IMG_5366.MP4";
        $('#background-video source').attr('src', video_src);
        $('#background-video')[0].load();
        
      }else if(enter_cnt == 4){
        video_src = "/video/IMG_5366.MP4";
        $('#background-video source').attr('src', video_src);
        $('#background-video')[0].load();
        $('#background-video').trigger('play');

      }else if(enter_cnt == 5){
        $('#text3').hide();
        
        video_src = "/video/IMG_5367.MP4";
        $('#background-video source').attr('src', video_src);
        $('#background-video')[0].load();
        
      }else if(enter_cnt == 6){
        $('#text4').hide();
        
        video_src = "/video/IMG_5367.MP4";
        $('#background-video source').attr('src', video_src);
        $('#background-video')[0].load();
        
      }else if(enter_cnt == 7){
        $('#background-video').trigger('play');

      }else if(enter_cnt == 8){
        alert("미션 클리어!! 다음 스탭으로 이동해주세요!");
        $('#game_container').addClass("none");
        $('#end_page').removeClass("none");
        $('#logo_area').addClass("none");

      }else if(enter_cnt == 9){
        alert("다시 시작해보시겠어요?");
        $('#logo_area').removeClass("none");
        $('#form_container').removeClass("none");
        $('#end_page').addClass("none");
        
        check_enter_cnt = false;
        enter_cnt = 0;  
      }
    }

  });
});


function fnCheckGender(num) {
  gender = num;
}


function fnCheckSelect(num) {
  select_value = num;
}


function fnMovePage(id, nextID) {
  if (nextID == 'start') {
        if (select_value == 1) {
          fnMovePage('#difficult_container', '#fruit_num1');
        }
        else if (select_value == 2) {
          fnMovePage('#difficult_container', '#manager_num1');
        }
        else if (select_value == 3) {
          fnMovePage('#difficult_container', '#family_num1');
        }
        else {
          alert("힘들었던 것 한 가지를 선택해주세요");
        }
    }

  else if (nextID == 'last') {
      if (select_value == 1 && gender == 1) {
        $("#letter_from_god").css({"background-image" : "url('./img/fianl_result1.png')"});
        fnMovePage('#letter', '#letter_from_god');
      }
      else if (select_value == 1 && gender == 2) {
        $("#letter_from_god").css({"background-image" : "url('./img/fianl_result1.png')"});
        fnMovePage('#letter', '#letter_from_god');
      }
      else if (select_value == 2 && gender == 1) {
        $("#letter_from_god").css({"background-image" : "url('./img/fianl_result2.png')"});
        fnMovePage('#letter', '#letter_from_god');
      }
      else if (select_value == 2 && gender == 2) {
        $("#letter_from_god").css({"background-image" : "url('./img/fianl_result2.png')"});
        fnMovePage('#letter', '#letter_from_god');
      }
      else if (select_value == 3 && gender == 1) {
        $("#letter_from_god").css({"background-image" : "url('./img/fianl_result2.png')"});
        fnMovePage('#letter', '#letter_from_god');
      }
      else if (select_value == 3 && gender == 2) {
        $("#letter_from_god").css({"background-image" : "url('./img/fianl_result2.png')"});
        fnMovePage('#letter', '#letter_from_god');
      }
  }

  else {
    $(id).addClass("none");
    $(nextID).removeClass("none", "");
}
}
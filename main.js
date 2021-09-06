let mission = {};
let maxCount = 11;
$(document).ready(function () {
  mission.count = 0;

  // 스크롤 다운
  $(window).on("scroll", function (e) {
    if (mission.scroll == undefined) {
      mission.scroll = true;
      showToast("스크롤 다운", "#scroll");
    }
    clearTime();
    seeFooter();
  });

  // 텍스트 드래그
  let drag_x1 = false;
  $(window).on({
    mousedown: function (event) {
      drag_x1 = event.offsetX;
    },
    mouseup: function (event) {
      if (event.offsetX - drag_x1 != 0) {
        if (mission.drag == undefined) {
          mission.drag = true;
          showToast("드래그", "#drag");
        }
      }
      clearTime();
    },
  });

  // 로고 클릭
  $(".logo").on("click", function () {
    if (mission.logo == undefined) {
      mission.logo = true;
      showToast("로고 클릭", "#logo");
    }
    clearTime();
  });

  // 마우스우클릭
  $(window).on("mousedown", function (e) {
    if ("which" in e && e.which == 3) {
      if (mission.rightclick == undefined) {
        mission.rightclick = true;
        showToast("마우스우클릭", "#rightclick");
      }
    } else if ("button" in e && e.button == 2) {
      if (mission.rightclick == undefined) {
        mission.rightclick = true;
        showToast("마우스우클릭", "#rightclick");
      }
    }
    clearTime();
  });

  // 마우스 더블클릭
  $(window).on("dblclick", function () {
    if (mission.dblclick == undefined) {
      mission.dblclick = true;
      showToast("마우스 더블클릭", "#dblclick");
    }
    clearTime();
  });

  // 브라우저 크기 조절
  $(window).on("resize", function () {
    if (mission.resize == undefined) {
      mission.resize = true;
      showToast("브라우저 크기 조절", "#resize");
    }
    clearTime();
  });

  // Timer
  let stayTime = 0;
  let notMoveTime = 0;
  timer = setInterval(function () {
    stayTime++;
    notMoveTime++;
    // 1분 머물기
    if (stayTime == 180) {
      if (mission.stay == undefined) {
        mission.stay = true;
        showToast("3분 머물기", "#stay");
      }
    }
    // 30동안 안움직이기
    if (notMoveTime == 60) {
      if (mission.notMove == undefined) {
        mission.notMove = true;
        showToast("1분동안 안움직이기", "#notMove");
      }
    }
    // 멈춰!
    if (mission.stay && mission.notMove) {
      clearInterval(timer);
    }
  }, 1000);

  // notMoveTime 초기화 함수
  function clearTime() {
    notMoveTime = 0;
  }

  // 개발자도구 열기
  $(window).on("devtoolschange", function () {
    if (mission.devtools == undefined) {
      mission.devtools = true;
      showToast("개발자도구 열기", "#devtools");
    }
    clearTime();
  });

  // 단축키로 페이지 스크롤
  let pgup, pgdn, end, home;
  $(window).on("keydown", function (e) {
    switch (e.keyCode) {
      case 33:
        pgup = true;
        break;
      case 34:
        pgdn = true;
        seeFooter();
        break;
      case 35:
        seeFooter();
        end = true;
        break;
      case 36:
        home = true;
        break;
    }
    if (pgup && pgdn && end && home) {
      if (mission.shortcut == undefined) {
        mission.shortcut = true;
        showToast("단축키로 페이지 스크롤", "#shortcut");
      }
    }
  });

  // alert 및 프로세스바
  function showToast(name, id) {
    mission.count++;
    //alert("축하합니다! " + name + "을 달성하셨습니다.");
    let percent = Math.round((mission.count / maxCount) * 100) + "%";
    let progressBar = $(".progress-bar");
    progressBar.css("width", percent);
    progressBar.text(percent);

    $(id).css("color", "white");
    $(id).children().css("display", "inline");
  }

  // 푸터보기
  function seeFooter() {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
      if (mission.footer == undefined) {
        mission.footer = true;
        showToast("푸터보기", "#footer");
      }
    }
  }

  // textarea
  $(".btn").on("click", function () {
    const value = $("#pwd").val();

    if (value.includes("홍승길")) {
      window.location.href = "success.html";
    } else {
      $("#pwd").val("");
      $("#pwd").attr("placeholder", "틀렸습니다! 다시 입력해주세요!");
    }
  });
});

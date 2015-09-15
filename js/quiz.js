    
  function addEvent(elm, evType, fn) {
    if (elm.addEventListener) {
      elm.addEventListener(evType, fn, false);
    } else if (elm.attachEvent) {
      elm.attachEvent('on' + evType, fn);
    } else {
      elm['on' + evType] = fn;
    }
  }
  function getTarget(e){
    var target = window.event ? window.event.srcElement : e ? e.target : null;
    if (!target){return false;}
      while(target.nodeType!=1 && target.nodeName.toLowerCase()!='body'){
        target=target.parentNode;
      }
    return target;
  }
  
  //The Quiz
  var Quiz = {
    answers: [],
    correctAnswers: ["a", "b", "b","c","d","a","b","b","c","a","b","d","a","b","d","c","c","d","c","c","c","a","b","c","c"], 
    
    initQuiz: function () {
      var arrInp = document.getElementsByTagName('input');
      for (var i=0; i<arrInp.length; i++) {
        if (arrInp[i].type.toLowerCase() == "radio") {
          addEvent( arrInp[i], 'click', Quiz.getAnswer);
        }
      }
    },
    getAnswer: function (e) {
      var thisRadio = getTarget(e);
      var which = thisRadio.getAttribute("rel");
      var val = thisRadio.getAttribute("value");
      var group = thisRadio.getAttribute("name");
      Quiz.recordAnswer( which, val, group )
    },
    recordAnswer: function (question, userAnswer, groupName) {
      Quiz.answers[question] = userAnswer;
//      var formName = document.myForm;
//        for (var i=0; i<formName.elements.length; i++) {//here we disable what's already checked
//          if (formName.elements[i].name == groupName) {
//            formName.elements[i].disabled = true;
//          }
//        }
    },
    scoreQuiz: function () {
      var totalCorrect = 0;
      for (var i = 0; i<Quiz.correctAnswers.length; ++i) {
        if (Quiz.answers[i] == Quiz.correctAnswers[i]) {
          ++totalCorrect;
        }
      }
    alert( "You scored " + totalCorrect + " out of " + Quiz.correctAnswers.length );
    }   
  };
  
  function loadEvnts() {
    Quiz.initQuiz();
    var scoreIt = document.getElementById('score');
    addEvent( scoreIt, 'click',  Quiz.scoreQuiz);
  }

  addEvent( window, 'load',  loadEvnts);

/* ]]> */
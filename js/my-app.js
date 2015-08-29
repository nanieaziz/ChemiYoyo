// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


myApp.onPageInit('past', function (page) {
    $$('.pb-10k1').on('click', function () {
    my10k1.open();
    });
    $$('.pb-10k2').on('click', function () {
    my10k2.open();
    });
    $$('.pb-10k3').on('click', function () {
    my10k3.open();
    });
    $$('.pb-11k1').on('click', function () {
    my11k1.open();
    });
    $$('.pb-11k2').on('click', function () {
    my11k2.open();
    });
    $$('.pb-11k3').on('click', function () {
    my11k3.open();
    });
    $$('.pb-12k1').on('click', function () {
    my12k1.open();
    });
    $$('.pb-12k2').on('click', function () {
    my12k2.open();
    });
    $$('.pb-12k3').on('click', function () {
    my12k3.open();
    });
    $$('.pb-13k1').on('click', function () {
    my13k1.open();
    });
    $$('.pb-13k2').on('click', function () {
    my13k2.open();
    });
    $$('.pb-13k3').on('click', function () {
    my13k3.open();
    });
    $$('.pb-14k1').on('click', function () {
    my14k1.open();
    });
    $$('.pb-14k2').on('click', function () {
    my14k2.open();
    });
    $$('.pb-14k3').on('click', function () {
    my14k3.open();
    });
})

var my10k1 = myApp.photoBrowser({
    photos : [
        'pdf/2010-k1-01.jpg',
        'pdf/2010-k1-02.jpg',
        'pdf/2010-k1-03.jpg',
        'pdf/2010-k1-04.jpg',
        'pdf/2010-k1-05.jpg',
        'pdf/2010-k1-06.jpg',
        'pdf/2010-k1-07.jpg',
        'pdf/2010-k1-08.jpg',
        'pdf/2010-k1-09.jpg',
        'pdf/2010-k1-10.jpg',
        'pdf/2010-k1-11.jpg',
        'pdf/2010-k1-12.jpg',
        'pdf/2010-k1-13.jpg',
        'pdf/2010-k1-14.jpg',
        'pdf/2010-k1-15.jpg',
        'pdf/2010-k1-16.jpg',
        'pdf/2010-k1-17.jpg',
        'pdf/2010-k1-18.jpg',
        'pdf/2010-k1-19.jpg',
        'pdf/2010-k1-20.jpg',
        'pdf/2010-k1-21.jpg',
        'pdf/2010-k1-22.jpg',
        'pdf/2010-k1-23.jpg',
        'pdf/2010-k1-24.jpg',
        'pdf/2010-k1-25.jpg',
        'pdf/2010-k1-26.jpg',
        'pdf/2010-k1-27.jpg',
        'pdf/2010-k1-28.jpg',
    ]
});
var my10k2 = myApp.photoBrowser({
    photos : [
        
        'pdf/2010-k2-01.jpg',
        'pdf/2010-k2-02.jpg',
        'pdf/2010-k2-03.jpg',
        'pdf/2010-k2-04.jpg',
        'pdf/2010-k2-05.jpg',
        'pdf/2010-k2-06.jpg',
        'pdf/2010-k2-07.jpg',
        'pdf/2010-k2-08.jpg',
        'pdf/2010-k2-09.jpg',
        'pdf/2010-k2-10.jpg',
        'pdf/2010-k2-11.jpg',
        'pdf/2010-k2-12.jpg',
        'pdf/2010-k2-13.jpg',
        'pdf/2010-k2-14.jpg',
        'pdf/2010-k2-15.jpg',
        'pdf/2010-k2-16.jpg',
        'pdf/2010-k2-17.jpg',
        'pdf/2010-k2-18.jpg',
        'pdf/2010-k2-19.jpg',
        'pdf/2010-k2-20.jpg',
        'pdf/2010-k2-21.jpg',
        'pdf/2010-k2-22.jpg',
        'pdf/2010-k2-23.jpg',
        'pdf/2010-k2-24.jpg',
        'pdf/2010-k2-25.jpg',
        'pdf/2010-k2-26.jpg',
    ]
});
var my10k3 = myApp.photoBrowser({
    photos : [
        
        'pdf/2010-k3-01.jpg',
        'pdf/2010-k3-02.jpg',
        'pdf/2010-k3-03.jpg',
        'pdf/2010-k3-04.jpg',
        'pdf/2010-k3-05.jpg',
        'pdf/2010-k3-06.jpg',
        'pdf/2010-k3-07.jpg',
        'pdf/2010-k3-08.jpg',
        'pdf/2010-k3-09.jpg',
        'pdf/2010-k3-10.jpg',
        'pdf/2010-k3-11.jpg',
    ]
});
var my11k1 = myApp.photoBrowser({
    photos : [
        'pdf/2011-k1-01.jpg',
        'pdf/2011-k1-02.jpg',
        'pdf/2011-k1-03.jpg',
        'pdf/2011-k1-04.jpg',
        'pdf/2011-k1-05.jpg',
        'pdf/2011-k1-06.jpg',
        'pdf/2011-k1-07.jpg',
        'pdf/2011-k1-08.jpg',
        'pdf/2011-k1-09.jpg',
        'pdf/2011-k1-10.jpg',
        'pdf/2011-k1-11.jpg',
        'pdf/2011-k1-12.jpg',
        'pdf/2011-k1-13.jpg',
        'pdf/2011-k1-14.jpg',
        'pdf/2011-k1-15.jpg',
        'pdf/2011-k1-16.jpg',
        'pdf/2011-k1-17.jpg',
        'pdf/2011-k1-18.jpg',
        'pdf/2011-k1-19.jpg',
        'pdf/2011-k1-20.jpg',
        'pdf/2011-k1-21.jpg',
        'pdf/2011-k1-22.jpg',
        'pdf/2011-k1-23.jpg',
        'pdf/2011-k1-24.jpg',
        'pdf/2011-k1-25.jpg',
        'pdf/2011-k1-26.jpg',
        'pdf/2011-k1-27.jpg',
        'pdf/2011-k1-28.jpg',
        'pdf/2011-k1-29.jpg',
        'pdf/2011-k1-30.jpg',
        'pdf/2011-k1-31.jpg',
        'pdf/2011-k1-32.jpg',
        'pdf/2011-k1-33.jpg',
        'pdf/2011-k1-34.jpg',
        'pdf/2011-k1-35.jpg',
        ]
});

var my11k2 = myApp.photoBrowser({
    photos : [
        'pdf/2011-k2-01.jpg',
        'pdf/2011-k2-02.jpg',
        'pdf/2011-k2-03.jpg',
        'pdf/2011-k2-04.jpg',
        'pdf/2011-k2-05.jpg',
        'pdf/2011-k2-06.jpg',
        'pdf/2011-k2-07.jpg',
        'pdf/2011-k2-08.jpg',
        'pdf/2011-k2-09.jpg',
        'pdf/2011-k2-10.jpg',
        'pdf/2011-k2-11.jpg',
        'pdf/2011-k2-12.jpg',
        'pdf/2011-k2-13.jpg',
        'pdf/2011-k2-14.jpg',
        'pdf/2011-k2-15.jpg',
        'pdf/2011-k2-16.jpg',
        'pdf/2011-k2-17.jpg',
        'pdf/2011-k2-18.jpg',
        'pdf/2011-k2-19.jpg',
        'pdf/2011-k2-20.jpg',
        'pdf/2011-k2-21.jpg',
        'pdf/2011-k2-22.jpg',
        'pdf/2011-k2-23.jpg',
        'pdf/2011-k2-24.jpg',
        'pdf/2011-k2-25.jpg',
        'pdf/2011-k2-26.jpg',
        'pdf/2011-k2-27.jpg',
        ]
});

var my11k3 = myApp.photoBrowser({
    photos : [
        'pdf/2011-k3-01.jpg',
        'pdf/2011-k3-02.jpg',
        'pdf/2011-k3-03.jpg',
        'pdf/2011-k3-04.jpg',
        'pdf/2011-k3-05.jpg',
        'pdf/2011-k3-06.jpg',
        'pdf/2011-k3-07.jpg',
        'pdf/2011-k3-08.jpg',
        'pdf/2011-k3-09.jpg',
        'pdf/2011-k3-10.jpg',
        'pdf/2011-k3-11.jpg',
        'pdf/2011-k3-12.jpg',
        'pdf/2011-k3-13.jpg',
        ]
});

var my12k1 = myApp.photoBrowser({
    photos : [
        'pdf/2012-k1-01.jpg',
        'pdf/2012-k1-02.jpg',
        'pdf/2012-k1-03.jpg',
        'pdf/2012-k1-04.jpg',
        'pdf/2012-k1-05.jpg',
        'pdf/2012-k1-06.jpg',
        'pdf/2012-k1-07.jpg',
        'pdf/2012-k1-08.jpg',
        'pdf/2012-k1-09.jpg',
        'pdf/2012-k1-10.jpg',
        'pdf/2012-k1-11.jpg',
        'pdf/2012-k1-12.jpg',
        'pdf/2012-k1-13.jpg',
        'pdf/2012-k1-14.jpg',
        'pdf/2012-k1-15.jpg',
        'pdf/2012-k1-16.jpg',
        'pdf/2012-k1-17.jpg',
        'pdf/2012-k1-18.jpg',
        'pdf/2012-k1-19.jpg',
        'pdf/2012-k1-20.jpg',
        'pdf/2012-k1-21.jpg',
        'pdf/2012-k1-22.jpg',
        'pdf/2012-k1-23.jpg',
        'pdf/2012-k1-24.jpg',
        'pdf/2012-k1-25.jpg',
        'pdf/2012-k1-26.jpg',
        'pdf/2012-k1-27.jpg',
        'pdf/2012-k1-28.jpg',
        'pdf/2012-k1-29.jpg',
        'pdf/2012-k1-30.jpg',
        'pdf/2012-k1-31.jpg',
        'pdf/2012-k1-32.jpg',
        'pdf/2012-k1-33.jpg',
        'pdf/2012-k1-34.jpg',
        'pdf/2012-k1-35.jpg',
        ]
});

var my12k2 = myApp.photoBrowser({
    photos : [
        'pdf/2012-k2-01.jpg',
        'pdf/2012-k2-02.jpg',
        'pdf/2012-k2-03.jpg',
        'pdf/2012-k2-04.jpg',
        'pdf/2012-k2-05.jpg',
        'pdf/2012-k2-06.jpg',
        'pdf/2012-k2-07.jpg',
        'pdf/2012-k2-08.jpg',
        'pdf/2012-k2-09.jpg',
        'pdf/2012-k2-10.jpg',
        'pdf/2012-k2-11.jpg',
        'pdf/2012-k2-12.jpg',
        'pdf/2012-k2-13.jpg',
        'pdf/2012-k2-14.jpg',
        'pdf/2012-k2-15.jpg',
        'pdf/2012-k2-16.jpg',
        'pdf/2012-k2-17.jpg',
        'pdf/2012-k2-18.jpg',
        'pdf/2012-k2-19.jpg',
        'pdf/2012-k2-20.jpg',
        'pdf/2012-k2-21.jpg',
        'pdf/2012-k2-22.jpg',
        'pdf/2012-k2-23.jpg',
        'pdf/2012-k2-24.jpg',
        'pdf/2012-k2-25.jpg',
        'pdf/2012-k2-26.jpg',
        ]
});

var my12k3 = myApp.photoBrowser({
    photos : [
        'pdf/2012-k3-01.jpg',
        'pdf/2012-k3-02.jpg',
        'pdf/2012-k3-03.jpg',
        'pdf/2012-k3-04.jpg',
        'pdf/2012-k3-05.jpg',
        'pdf/2012-k3-06.jpg',
        'pdf/2012-k3-07.jpg',
        'pdf/2012-k3-08.jpg',
        'pdf/2012-k3-09.jpg',
        'pdf/2012-k3-10.jpg',
        'pdf/2012-k3-11.jpg',
        ]
});

var my13k1 = myApp.photoBrowser({
    photos : [
        'pdf/2013-k1-01.jpg',
        'pdf/2013-k1-02.jpg',
        'pdf/2013-k1-03.jpg',
        'pdf/2013-k1-04.jpg',
        'pdf/2013-k1-05.jpg',
        'pdf/2013-k1-06.jpg',
        'pdf/2013-k1-07.jpg',
        'pdf/2013-k1-08.jpg',
        'pdf/2013-k1-09.jpg',
        'pdf/2013-k1-10.jpg',
        'pdf/2013-k1-11.jpg',
        'pdf/2013-k1-12.jpg',
        'pdf/2013-k1-13.jpg',
        'pdf/2013-k1-14.jpg',
        'pdf/2013-k1-15.jpg',
        'pdf/2013-k1-16.jpg',
        'pdf/2013-k1-17.jpg',
        'pdf/2013-k1-18.jpg',
        'pdf/2013-k1-19.jpg',
        'pdf/2013-k1-20.jpg',
        'pdf/2013-k1-21.jpg',
        'pdf/2013-k1-22.jpg',
        'pdf/2013-k1-23.jpg',
        'pdf/2013-k1-24.jpg',
        'pdf/2013-k1-25.jpg',
        'pdf/2013-k1-26.jpg',
        'pdf/2013-k1-27.jpg',
        'pdf/2013-k1-28.jpg',
        'pdf/2013-k1-29.jpg',
        'pdf/2013-k1-30.jpg',
        'pdf/2013-k1-31.jpg',
        'pdf/2013-k1-32.jpg',
        'pdf/2013-k1-33.jpg',
        'pdf/2013-k1-34.jpg',
        ]
});

var my13k2 = myApp.photoBrowser({
    photos : [
        'pdf/2013-k2-01.jpg',
        'pdf/2013-k2-02.jpg',
        'pdf/2013-k2-03.jpg',
        'pdf/2013-k2-04.jpg',
        'pdf/2013-k2-05.jpg',
        'pdf/2013-k2-06.jpg',
        'pdf/2013-k2-07.jpg',
        'pdf/2013-k2-08.jpg',
        'pdf/2013-k2-09.jpg',
        'pdf/2013-k2-10.jpg',
        'pdf/2013-k2-11.jpg',
        'pdf/2013-k2-12.jpg',
        'pdf/2013-k2-13.jpg',
        'pdf/2013-k2-14.jpg',
        'pdf/2013-k2-15.jpg',
        'pdf/2013-k2-16.jpg',
        'pdf/2013-k2-17.jpg',
        'pdf/2013-k2-18.jpg',
        'pdf/2013-k2-19.jpg',
        'pdf/2013-k2-20.jpg',
        'pdf/2013-k2-21.jpg',
        'pdf/2013-k2-22.jpg',
        'pdf/2013-k2-23.jpg',
        'pdf/2013-k2-24.jpg',
        'pdf/2013-k2-25.jpg',
        'pdf/2013-k2-26.jpg',
        'pdf/2013-k2-27.jpg',
        'pdf/2013-k2-28.jpg',
        'pdf/2013-k2-29.jpg',
        'pdf/2013-k2-30.jpg',
        'pdf/2013-k2-31.jpg',
        ]
});

var my13k3 = myApp.photoBrowser({
    photos : [
        'pdf/2013-k3-01.jpg',
        'pdf/2013-k3-02.jpg',
        'pdf/2013-k3-03.jpg',
        'pdf/2013-k3-04.jpg',
        'pdf/2013-k3-05.jpg',
        'pdf/2013-k3-06.jpg',
        'pdf/2013-k3-07.jpg',
        'pdf/2013-k3-08.jpg',
        ]
});

var my14k1 = myApp.photoBrowser({
    photos : [
        'pdf/2014-k1-01.jpg',
        'pdf/2014-k1-02.jpg',
        'pdf/2014-k1-03.jpg',
        'pdf/2014-k1-04.jpg',
        'pdf/2014-k1-05.jpg',
        'pdf/2014-k1-06.jpg',
        'pdf/2014-k1-07.jpg',
        'pdf/2014-k1-08.jpg',
        'pdf/2014-k1-09.jpg',
        'pdf/2014-k1-10.jpg',
        'pdf/2014-k1-11.jpg',
        'pdf/2014-k1-12.jpg',
        'pdf/2014-k1-13.jpg',
        'pdf/2014-k1-14.jpg',
        'pdf/2014-k1-15.jpg',
        'pdf/2014-k1-16.jpg',
        'pdf/2014-k1-17.jpg',
        'pdf/2014-k1-18.jpg',
        'pdf/2014-k1-19.jpg',
        'pdf/2014-k1-20.jpg',
        'pdf/2014-k1-21.jpg',
        'pdf/2014-k1-22.jpg',
        'pdf/2014-k1-23.jpg',
        'pdf/2014-k1-24.jpg',
        'pdf/2014-k1-25.jpg',
        'pdf/2014-k1-26.jpg',
        'pdf/2014-k1-27.jpg',
        'pdf/2014-k1-28.jpg',
        'pdf/2014-k1-29.jpg',
        'pdf/2014-k1-30.jpg',
        'pdf/2014-k1-31.jpg',
        'pdf/2014-k1-32.jpg',
        ]
});

var my14k2 = myApp.photoBrowser({
    photos : [
        'pdf/2014-k2-01.jpg',
        'pdf/2014-k2-02.jpg',
        'pdf/2014-k2-03.jpg',
        'pdf/2014-k2-04.jpg',
        'pdf/2014-k2-05.jpg',
        'pdf/2014-k2-06.jpg',
        'pdf/2014-k2-07.jpg',
        'pdf/2014-k2-08.jpg',
        'pdf/2014-k2-09.jpg',
        'pdf/2014-k2-10.jpg',
        'pdf/2014-k2-11.jpg',
        'pdf/2014-k2-12.jpg',
        'pdf/2014-k2-13.jpg',
        'pdf/2014-k2-14.jpg',
        'pdf/2014-k2-15.jpg',
        'pdf/2014-k2-16.jpg',
        'pdf/2014-k2-17.jpg',
        'pdf/2014-k2-18.jpg',
        'pdf/2014-k2-19.jpg',
        'pdf/2014-k2-20.jpg',
        'pdf/2014-k2-21.jpg',
        'pdf/2014-k2-22.jpg',
        'pdf/2014-k2-23.jpg',
        'pdf/2014-k2-24.jpg',
        'pdf/2014-k2-25.jpg',
        'pdf/2014-k2-26.jpg',
        'pdf/2014-k2-27.jpg',
        'pdf/2014-k2-28.jpg',
        'pdf/2014-k2-29.jpg',
        ]
});

var my14k3 = myApp.photoBrowser({
    photos : [
        'pdf/2014-k3-01.jpg',
        'pdf/2014-k3-02.jpg',
        'pdf/2014-k3-03.jpg',
        'pdf/2014-k3-04.jpg',
        'pdf/2014-k3-05.jpg',
        'pdf/2014-k3-06.jpg',
        'pdf/2014-k3-07.jpg',
        'pdf/2014-k3-08.jpg',
        'pdf/2014-k3-09.jpg',
        ]
});

myApp.onPageInit('formula', function (page) {
    $$('.pb-f4').on('click', function () {
    myff4.open();
    });
    $$('.pb-f5').on('click', function () {
    myff5.open();
    });
})

var myff4 = myApp.photoBrowser({
    photos : [
        'pdf/f4-01.jpg',
        'pdf/f4-02.jpg',
        'pdf/f4-03.jpg',
        'pdf/f4-04.jpg',
        'pdf/f4-05.jpg',
        'pdf/f4-06.jpg',
        'pdf/f4-07.jpg',
        'pdf/f4-08.jpg',
        'pdf/f4-09.jpg',
        'pdf/f4-10.jpg',
        'pdf/f4-11.jpg',
        'pdf/f4-12.jpg',
        ]
});
var myff5 = myApp.photoBrowser({
    photos : [
        'pdf/f5-01.jpg',
        'pdf/f5-02.jpg',
        'pdf/f5-03.jpg',
        'pdf/f5-04.jpg',
        'pdf/f5-05.jpg',
        'pdf/f5-06.jpg',
        'pdf/f5-07.jpg',
        'pdf/f5-08.jpg',
        'pdf/f5-09.jpg',
        'pdf/f5-10.jpg',
        'pdf/f5-11.jpg',
        'pdf/f5-12.jpg',
        'pdf/f5-13.jpg',
        'pdf/f5-14.jpg',
        'pdf/f5-15.jpg',
        ]
});

myApp.onPageInit('menu', function (page) {
    $$('.pb-ptable').on('click', function () {
    myPtable.open();
    });
    
})

var myPtable = myApp.photoBrowser({
    photos : [
        'chapter/img/ptable.png',
        ]
});
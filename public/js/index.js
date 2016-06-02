var additionalInfo = $('#additionalInfo-single').val()
console.log(localStorage['cID']);
// personal ajax call
$('#personalbutton').click(function(){
  console.log(localStorage['cID']);
  console.log("clicked");
  $.ajax({
    method: "post",
    url: '/users/' + localStorage['cID'] + '/single',
    data: JSON.stringify({_creator: localStorage['cID'], title: $('#title-single').val(), personal: $('personal-single').val(), business:  $('business-single').val(), pages: $('#pages-single').val(), color: $('#color-single').val(), style: $('#style-single').val(), description: $('#description-single').val(), additionalInfo: $('#additionalInfo-single').val()}),
    contentType: 'application/json'
  }).done(function(result){
    console.log("done");
    if(result.error) {
      console.log("ERROR");
      alert("Please fill out all information")
    } else {
      $('#services').removeClass('hide')
      $("#personal").addClass('hide')
    }
  })
})
$('#ecombutton').click(function(){
  console.log("ecom clicked");
  $.ajax({
    method: "post",
    url: "/users/" + localStorage['cID'] + '/ecommerce',
    data: JSON.stringify({_creator: localStorage['cID'], title: $('#title-ecom').val(), product: $('#product-ecom').val(), color: $('#color-ecom').val(), style: $('#style-ecom').val(), pages: $('#pages-ecom').val(), users: $('#users-ecom').val(), company: $('#company-ecom').val(), onlinePayments: $('#paymenttype-ecom').val(), description: $('#description-ecom').val(), additionalInfo: $('#additionalInfo-ecom').val()}),
    contentType: 'application/json'
  }).done(function(result){
    if(result.error) {
      console.log("ERROR");
      alert("Please fill out all information")
    } else {
      $('#services').removeClass('hide')
      $("#ecommerce").addClass('hide')
    }
  })
})
$('#mobilebutton').click(function(){
  $.ajax({
    method: "post",
    url: "/users/" + localStorage['cID'] + '/mobile',
    data: JSON.stringify({_creator: localStorage['cID'], title: $('#title-mobile').val(), phoneType: $('#phone-mobile').val(), tabs: $('#pages-mobile').val(), type: $('#type-mobile').val(), color: $('#color-mobile').val(), style: $('#style-mobile').val(), description: $('#description-mobile').val(), additionalInfo: $('#additionalInfo-mobile').val(), other: $('#other-media').val()  }),
    contentType: 'application/json'
  }).done(function(result){
    if(result.error) {
      console.log("ERROR");
      alert("Please fill out all information")
    } else {
      $('#services').removeClass('hide')
      $("#mobile").addClass('hide')
    }
  })
})
$('#socialbutton').click(function(){
  console.log("social clicked");

  $.ajax({
    method: "post",
    url: '/users/' + localStorage['cID'] + '/social',
    data: JSON.stringify({_creator: localStorage['cID'], title: $('#title-social-media').val(), users: $('#users-social-media').val(), uniqueContent: $('#uniqueContent-social-media').val(), color: $('#color-social-media').val(), style: $('#style-social-media').val(), profile: $('#profile-social-media').val(), description: $('#description-social-media').val(), additionalInfo: $('#additionalInfo-social-media').val()}),
    contentType: 'application/json'
  }).done(function(result){
    if(result.error) {
      console.log("ERROR");
      alert("Please fill out all information")
    } else {
      $('#services').removeClass('hide')
      $("#social").addClass('hide')
    }
  })
})
// adds a hover effect to all the icons
$(".ball").hover(
  function(){
    $(this).toggleClass('fa-5x')
  })
  // puts a clicker on the build icons so when its clicked it will bring up its uild page
  function buildstep(click, remove) {
    $(click).click(function(){
      $(remove).removeClass('hide')
      $("#services").addClass('hide')
    })
  }
  // calls the clicker on all icons
  buildstep('#singleball', '#personal')
  buildstep('#socialball', '#social-media')
  buildstep('#ecommerceball', '#ecommerce')
  buildstep('#mobileball', '#mobile')

// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

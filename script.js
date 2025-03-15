var typed = new Typed('#element', {
    strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    typeSpeed: 50,
  });

  var tablinks=document.getElementsByClassName("tab-links");
  var tabcontents=document.getElementsByClassName("tab-contents");

  function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab")
  }
  }


 // document.addEventListener('DOMContentLoaded', function() {
 //   var elems = document.querySelectorAll('.sidenav');
//    var instances = M.Sidenav.init(elems, options);
//  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

//  $(document).ready(function(){
//    $('.sidenav').sidenav();
//  });
        

  document.querySelectorAll(".enlace").forEach(el => {
    el.addEventListener("mouseenter", function(e) {
  
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
  
      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
  
      ripple.style.width = ripple.style.height = size + "px";
  
      ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
      ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
  
      el.appendChild(ripple);
  
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
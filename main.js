function CheckCollapseCards(){
    if($("#collapseBullGym").hasClass("show")){
        $("#collapseBullGym").removeClass("show");
        console.log("Gym")
    }
    if($("#collapseMuseum").hasClass("show")){
        $("#collapseMuseum").removeClass("show");
        console.log("Museum")
    }
    if($("#collapseRing").hasClass("show")){
        $("#collapseRing").removeClass("show");
        console.log("Ring")
    }
}
function SearchFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('InputSearch');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

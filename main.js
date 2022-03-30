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

$("#btn-add").on("click", function(event){
    event.preventDefault();

    checkValues();

});

function buildStarString(inRating) {

    let outRating = ("&#x2B50;").repeat(Math.round(inRating));

    return outRating;
};

function checkValues(){
    let movieTitle = $("#movie-title").val();
    let movieRating = $('#movie-rating').val();


    if(movieTitle.length <1 && !(movieRating >=0 && movieRating <=10))
    {
        $("msg").text()("Movie titles must be at least 2 characters. Ratings must be a value between 0-10");
    }else {
        let movieDetails = `"${$("#movie-title").val()}"&nbsp;&nbsp;`
        movieDetails = movieDetails + `  ${buildStarString($("#movie-rating").val())}`

        let $movieDiv = $("<div>").html(movieDetails).addClass("movie-details");
        $("<button>").text("X").addClass("rmvbutton").appendTo($movieDiv);
        $(".movies").append($movieDiv);

        $('input').val('');
    }
}


$(".movies").on("click", ".rmvbutton", function () {

    $(this).parent().remove();

});
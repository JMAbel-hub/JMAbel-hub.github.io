$(document).ready(function() {
	$("#nav_list li").click(function() {
        // gets the correct json file 
        var title = "json_files/" + $(this).children("a").attr("title") + ".json";
        $.getJSON(title, function(data, status){
            // replaces contents for each speaker
            data = data['speakers'][0];
            $("main h1").html(data['title']);
            $("main h2").html(data['month']);
            $("main h3").html(data['speaker']);
            $("main img").attr("src", data.image);
            $("main p").html(data.text);
        });
    });
}); // end ready
console.log( $("#parag1").text() );

$("#parag1").text("Bonjour !");

//$("#parag2").remove();

//$("p").remove();


$("body").append("<p>Jogging avec Jules samedi 10h00</p>");


// NOMBRE DE PARAGRAPHES
console.log( $('p').length );


// AFFICHER CONTENU DES PARAGRAPHES
$("p").each(
    function()
    {
        //$(this).remove();
    }
);

//$('#parag1').click(
//    function()
//    {
//      console.log("click detecte !");
//    }
//);

$('p').click(
     function()
     {
        console.log( $(this).text() );
     }
 );

$('#parag1').parent().css("background-color", "yellow");

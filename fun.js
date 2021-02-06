
/* <script type="text/javascript">
 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
</script>

<nav id="menu">
    <ul>
        <li><a href="#yak1">Ссылка на якорь 1</a></li>
        <li><a href="#yak2">Ссылка на якорь 2</a></li>
        <li><a href="#yak3">Ссылка на якорь 3</a></li>
        <li><a href="#yak4">Ссылка на якорь 4</a></li>
    </ul>
</nav>
 */
 
 const btn = document.querySelector('button');
 
 btn.addEventListener('click', sendData);
 function sendData () {
	  const formab = document.querySelector('#forma');
	  var name = formab.querySelectorAll("input")[0].value;
	  var email = formab.querySelectorAll("input")[1].value;
	  var select = formab.querySelector("select").value;
	  var textarea = formab.querySelector("textarea").value;
	  
	  console.log(name);
	  console.log(email);
	  console.log(select);
	  console.log(textarea);
 }

 
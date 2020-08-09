
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
function openCity2(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openCity1(evt, cityName) {
  var i, tabcontent1, tablinks1;
  tabcontent1 = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }
  tablinks1 = document.getElementsByClassName("tablinks1");
  for (i = 0; i < tablinks1.length; i++) {
    tablinks1[i].className = tablinks1[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>
<script type="text/javascript">
            function add_number() {

            var first_number = parseInt(document.getElementById("tenthou").value);
            var second_number = parseInt(document.getElementById("fivethou").value);
			var third_number = parseInt(document.getElementById("twothou").value);
			var fourth_number = parseInt(document.getElementById("thou").value);
			var fifth_number = parseInt(document.getElementById("fivehun").value);
			var sixth_number = parseInt(document.getElementById("hun").value);
			var seventh_number = parseInt(document.getElementById("fifty").value);
            var result = (first_number*10000)+(second_number*5000)+(third_number*2000)+(fourth_number*1000)+(fifth_number*500)+
			(sixth_number*100)+(seventh_number*50);
            document.getElementById("txtresult").value = result;
        }	
        </script>
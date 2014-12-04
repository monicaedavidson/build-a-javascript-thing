<script src="jquery-1.11.1.min.js"></script>
       <script>
         $(function() {
          $("body").fadeToggle(800).fadeToggle(3000);
         });
         </script>
         <script>
         $(function() {

          $(".nav-hov").on("mouseover", function() {
            var navId = $(this).attr("data-navId");
            $("#"+navId).fadeOut(800).fadeIn(1200);
          });
        });


       </script>

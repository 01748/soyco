/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - Asraful Hoque
 * @created_at  - 
 * @modified_by -
 */


function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
  
    for (var i = 0; i < text2.length; i++) {
      if (checkBox.checked == true) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      } else if (checkBox.checked == false) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      }
    }
  }
  check();
  
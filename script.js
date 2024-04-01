function changeSection(sectionId) {
  var section1 = document.getElementById('rowWrapper1');
  var section2 = document.getElementById('rowWrapper2');
  
  if (sectionId === 'rowWrapper1') {
    var nonButton = document.getElementById("secondButton");
    nonButton.classList.remove("active");
    var selectedButton = document.getElementById("firstButton");
    selectedButton.click();
    selectedButton.classList.add("active");
    section1.style.display = 'block';
    section2.style.display = 'none';
  } else if (sectionId === 'rowWrapper2') {
    var nonButton = document.getElementById("firstButton");
    nonButton.classList.remove("active");
    var selectedButton = document.getElementById("secondButton");
    selectedButton.click();
    selectedButton.classList.add("active");
    section1.style.display = 'none';
    section2.style.display = 'block';
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  var secondButton = document.getElementById("secondButton");
  secondButton.click();
  secondButton.classList.add("active");
});
document.addEventListener('tubolinks:load', function() {
  document.querySelectorAll('td').forEach(function(td) {
    td.addEventListener('mouseover', function(e) {
      e.currentTarget.style.background-color = '#eff';
    });

    td.addEventListener('mouseout', function(e) {
      e.currentTarget.style.background-color = '';
    });
  });
});
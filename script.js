document.addEventListener('DOMContentLoaded', init);

function init() {
  document.getElementById('demo-form').addEventListener('submit', function (e) {
    
    // Allow default submission
    //e.preventDefault();
    let data = new FormData(e.target);
    let result = Object.fromEntries(data);
    document.getElementById('output').textContent = JSON.stringify(result, null, 2);
  });
}

<!-- Tambahkan sebelum </body> di index.html -->
<script>
document.addEventListener("DOMContentLoaded", function() {
  const fadeEls = document.querySelectorAll('.fade-scroll');
  function checkFade() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', checkFade);
  checkFade(); // initial check
});
</script>

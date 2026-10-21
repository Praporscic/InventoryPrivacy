// Language switcher: close the dropdown on outside click or Escape.
(function () {
  function closeAll(except) {
    var open = document.querySelectorAll("details.lang-switch[open]");
    for (var i = 0; i < open.length; i++) {
      if (open[i] !== except) open[i].removeAttribute("open");
    }
  }
  document.addEventListener("click", function (e) {
    var inside = e.target.closest ? e.target.closest("details.lang-switch") : null;
    closeAll(inside);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var open = document.querySelector("details.lang-switch[open]");
    if (!open) return;
    open.removeAttribute("open");
    var summary = open.querySelector("summary");
    if (summary) summary.focus();
  });
})();

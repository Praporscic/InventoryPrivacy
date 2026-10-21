// Language switcher: full-page modal (native <dialog>). Escape and the backdrop click close it.
(function () {
  var root = document.querySelector(".lang-switch");
  if (!root) return;
  var dialog = root.querySelector("dialog");
  var toggle = root.querySelector(".lang-toggle");
  if (!dialog || typeof dialog.showModal !== "function") return;

  function open() {
    dialog.showModal();
    document.documentElement.classList.add("lang-open");
    var current = dialog.querySelector('[aria-current="true"]');
    if (current) current.focus();
  }
  function close() {
    if (dialog.open) dialog.close();
  }

  toggle.addEventListener("click", open);
  dialog.querySelector(".lang-close").addEventListener("click", close);
  dialog.addEventListener("click", function (e) {
    // The dialog fills the viewport; a click on its own box (not the panel) is a backdrop click.
    if (e.target === dialog) close();
  });
  dialog.addEventListener("close", function () {
    document.documentElement.classList.remove("lang-open");
    toggle.focus();
  });
})();

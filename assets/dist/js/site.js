document.querySelectorAll(".pub_doi__ a").forEach((link) => {
  link.setAttribute("aria-label", "Open DOI record");
  link.setAttribute("title", "Open DOI record");
});

document.querySelectorAll(".pub_pdf__ a").forEach((link) => {
  link.setAttribute("aria-label", "Open PDF");
  link.setAttribute("title", "Open PDF");
});

document.querySelectorAll(".pub_web__ a").forEach((link) => {
  link.setAttribute("aria-label", "Open thesis or publication page");
  link.setAttribute("title", "Open thesis or publication page");
});

document.querySelectorAll(".pub_doi__ a i, .pub_pdf__ a i, .pub_web__ a i").forEach((icon) => {
  icon.setAttribute("aria-hidden", "true");
});

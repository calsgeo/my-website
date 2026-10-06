const publicationLinkLabels = document.documentElement.lang.startsWith("es")
  ? {
      doi: "Abrir registro DOI",
      pdf: "Abrir PDF",
      web: "Abrir página de la tesis o publicación",
    }
  : {
      doi: "Open DOI record",
      pdf: "Open PDF",
      web: "Open thesis or publication page",
    };

function setPublicationLinkLabel(selector, label) {
  document.querySelectorAll(selector).forEach((link) => {
    link.setAttribute("aria-label", label);
    link.setAttribute("title", label);
  });
}

setPublicationLinkLabel(".pub_doi__ a", publicationLinkLabels.doi);
setPublicationLinkLabel(".pub_pdf__ a", publicationLinkLabels.pdf);
setPublicationLinkLabel(".pub_web__ a", publicationLinkLabels.web);

document.querySelectorAll(".pub_doi__ a i, .pub_pdf__ a i, .pub_web__ a i").forEach((icon) => {
  icon.setAttribute("aria-hidden", "true");
});

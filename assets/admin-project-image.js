const projectsForm = document.querySelector("#projectsForm");

if (projectsForm && !projectsForm.elements.namedItem("image")) {
  const imageField = document.createElement("label");
  imageField.className = "full";
  imageField.append("URL gambar proyek (HTTPS)");

  const imageInput = document.createElement("input");
  imageInput.name = "image";
  imageInput.type = "url";
  imageInput.placeholder = "https://contoh.com/gambar-proyek.jpg";
  imageInput.autocomplete = "url";

  imageField.append(imageInput);
  const descriptionField = projectsForm.querySelector(".full");
  projectsForm.insertBefore(imageField, descriptionField || null);
}

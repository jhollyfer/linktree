function createProfile(name, bio, profileImage) {
  return {
    name,
    bio,
    profileImage,
  };
}

function createLink(title, url, icon = null) {
  return {
    title,
    url,
    icon,
  };
}

function createLinktreeData(profile, links) {
  return {
    profile,
    links,
  };
}

const profile = createProfile(
  "Jhollyfer Rodrigues",
  "Engenheiro de Software | Traficante do amor",
  "./foto.jpg"
);

const links = [
  createLink("Instagram", "https://instagram.com/_marcosjfr", "📸"),
  createLink("Email", "mailto:jhollyfer.fr@gmail.com", "✉️"),
  createLink("Portfolio", "https://jhollyfer.com.br", "✉️"),
  createLink("Minha empresa", "https://maiyu.com.br", "✉️"),
];
// github pages
const sampleData = createLinktreeData(profile, links);

function getLinktreeData() {
  return sampleData;
}

// github.com

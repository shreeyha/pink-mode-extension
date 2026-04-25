const style = document.createElement("style");

style.innerHTML = `
  html {
    filter: hue-rotate(300deg) saturate(1.2);
  }

  img, video {
    filter: hue-rotate(-300deg) saturate(1.2) !important;
  }

  body {
    background-color: #ffe4ec !important;
  }

  a {
    color: #ff1493 !important;
  }
`;

document.head.appendChild(style);

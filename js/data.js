/*
  Add or remove artwork here. Each category is an array of objects:
    { src: "path/to/image.jpg", title: "Piece Title" }

  - "src" should point to a file in the matching /images/<category>/ folder.
  - Use full-resolution images — the lightbox displays them at their native size.
  - Order in the array is the order pieces appear on the page.
*/
const PORTFOLIO_DATA = {
  "graphic-design": [
    { src: "images/graphic-design/01.svg", title: "Brand Identity System" },
    { src: "images/graphic-design/02.svg", title: "Poster Series" },
    { src: "images/graphic-design/03.svg", title: "Packaging Concept" },
    { src: "images/graphic-design/04.svg", title: "Editorial Layout" },
    { src: "images/graphic-design/05.svg", title: "Logo Exploration" },
    { src: "images/graphic-design/06.svg", title: "Typography Study" }
  ],
  "painting": [
    { src: "images/painting/01.svg", title: "Oil on Canvas No. 1" },
    { src: "images/painting/02.svg", title: "Watercolor Landscape" },
    { src: "images/painting/03.svg", title: "Acrylic Portrait" },
    { src: "images/painting/04.svg", title: "Abstract Study" },
    { src: "images/painting/05.svg", title: "Still Life" }
  ],
  "physical-media": [
    { src: "images/physical-media/01.svg", title: "Ceramic Sculpture" },
    { src: "images/physical-media/02.svg", title: "Wood Carving" },
    { src: "images/physical-media/03.svg", title: "Mixed Media Assemblage" },
    { src: "images/physical-media/04.svg", title: "Metalwork Piece" },
    { src: "images/physical-media/05.svg", title: "Textile Installation" }
  ],
  "digital-media": [
    { src: "images/digital-media/01.svg", title: "3D Render Study" },
    { src: "images/digital-media/02.svg", title: "Motion Graphics Frame" },
    { src: "images/digital-media/03.svg", title: "Digital Illustration" },
    { src: "images/digital-media/04.svg", title: "Concept Art" },
    { src: "images/digital-media/05.svg", title: "Generative Piece" }
  ]
};

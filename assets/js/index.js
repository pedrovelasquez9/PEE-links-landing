const circularNavigationElement = document.getElementById(
  "circular-navigation-container"
);
const NAVIGATION_CIRCLE_CLASS = "circular-navigation__circle";
const CIRCLE_CONTENT_CLASS = "circular-navigation__content";
const CIRCLE_IMAGE_CLASS = "network-link-img";

networks.forEach((network, index) => {
  const circleElement = document.createElement("div");
  const contentElement = document.createElement("div");
  const imageElement = document.createElement("img");
  const linkElement = document.createElement("a");
  const rotationDegree = (360 / networks.length) * index;

  circleElement.classList.add(NAVIGATION_CIRCLE_CLASS);
  circleElement.style.cssText = `transform: rotate(${rotationDegree}deg) translateX(-8rem);`;
  contentElement.classList.add(CIRCLE_CONTENT_CLASS);

  linkElement.href = network.link;
  linkElement.alt = network.name;

  imageElement.src = network.imageSrc;
  imageElement.alt = network.name;
  imageElement.classList.add(CIRCLE_IMAGE_CLASS);
  imageElement.style.cssText = `transform: rotate(-${rotationDegree}deg);`;

  linkElement.appendChild(imageElement);
  contentElement.appendChild(linkElement);
  circleElement.appendChild(contentElement);
  circularNavigationElement.appendChild(circleElement);
});

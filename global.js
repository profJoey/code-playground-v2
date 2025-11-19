const examples = [
  {
    name: "Coding Cookbook",
    fileName: "index.html",
    description:
      "This site features all kinds of short coding samples, often called code snippets. Like an ordinary cookbook, you are not looking for a recipe that can be made from a certain ingredient or using a certain utensil, but you are looking to perform a specific task. For each recipe, I try to present the simpliest possible version of the task. You can build upon each recipe based on your needs, skill level, and ambition.",
  },
  {
    name: "Click to toggle",
    fileName: "click-to-toggle.html",
    description: "",
    video: `<div style="max-width:608px"><div style="position:relative;padding-bottom:66.118421052632%"><iframe id="kaltura_player" src='https://cdnapisec.kaltura.com/p/1674401/embedPlaykitJs/uiconf_id/54887362?iframeembed=true&amp;entry_id=1_i988b6nn&amp;config%5Bprovider%5D=%7B%22widgetId%22%3A%221_gg74sr2e%22%7D&amp;config%5Bplayback%5D=%7B%22startTime%22%3A2%2C%22endTime%22%3A711%7D'  allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="coding-tut-click-to-toggle" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div></div>`,
  },
  {
    name: "Click to animate",
    fileName: "click-to-animate.html",
    description: "",
    video: `<div style="max-width: 608px">
        <div style="position: relative; padding-bottom: 66.118421052632%">
          <iframe
            id="kaltura_player"
            src="https://cdnapisec.kaltura.com/p/1674401/embedPlaykitJs/uiconf_id/54887362?iframeembed=true&amp;entry_id=1_47k6xqbc&amp;config%5Bprovider%5D=%7B%22widgetId%22%3A%221_zooewem4%22%7D&amp;config%5Bplayback%5D=%7B%22startTime%22%3A2%2C%22endTime%22%3A361%7D"
            allowfullscreen
            webkitallowfullscreen
            mozAllowFullScreen
            allow="autoplay *; fullscreen *; encrypted-media *"
            sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
            title="coding-tut-click-to-animate"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border: 0;
            "
          ></iframe>
        </div>
      </div>`,
  },
  {
    name: "ObservableAPI",
    fileName: "observableAPI.html",
    description: "",
  },
  {
    name: "Event Coordinates",
    fileName: "event-coordinates.html",
    description:
      "Create elements just by clicking! Use this pattern for things like drawing on screen. Your imagination is the only limit! Makes use of math expressions 'Math.floor' and 'Math.random'. Also, mouse event properties 'clientX' and 'clientY'. Also, the Array property 'length'.  ",
    video: `<div style="max-width:608px"><div style="position:relative;padding-bottom:66.118421052632%"><iframe id="kaltura_player" src='https://cdnapisec.kaltura.com/p/1674401/embedPlaykitJs/uiconf_id/54887362?iframeembed=true&amp;entry_id=1_6xjigb8a&amp;config%5Bprovider%5D=%7B%22widgetId%22%3A%221_hsu1ssbd%22%7D&amp;config%5Bplayback%5D=%7B%22startTime%22%3A2%2C%22endTime%22%3A1230%7D'  allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="coding-tut-event-coordinates" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div></div>`,
  },
  {
    name: "One state-change at a time",
    fileName: "one-at-a-time.html",
    description:
      "Change the state (styles) of any element that is clicked. Ensure that only one element changes state at a time. Makes use of DOM methods querySelector() and classList. Also, the Array methods forEach().",
  },
  {
    name: "Toggle State",
    fileName: "toggle-state.html",
    description:
      "This technique can change the content on the page without actually loading a new page. You can use this pattern to show/hide different elements. To do so, the event binded to each button element will change the css on another specififed element. This pattern makes use of the DOM methods addEventListener as well as classList() and it's add/remove properties. ",
  },
  {
    name: "Create HTML with data",
    fileName: "create-html-with-data.html",
    description:
      "Dynamically create html templates based on a dataset. Inject data into each html template. This examples makes us of Array methods such as forEach() and find(). Also, DOM methods such as createElement() and appendChild().",
  },
  {
    name: "Drag and drop",
    fileName: "drag-and-drop.html",
    description:
      "Move elements around the page using the 'drag' eventListeners. This pattern makes use of the DOM methods addEventListener() and getBoundingClientRect(). Also, the mouse event properties clientX and clientY. This one is a little complex because drag and drop uses several related event listeners. Also, because we need to calculate the new position of the drag and dropped element.",
  },
];

var nav = document.querySelector("nav");

var navHeading = document.createElement("h2");
navHeading.innerText = "Recipes";
nav.appendChild(navHeading);

var navButtonContainer = document.createElement("div");
navButtonContainer.id = "nav-buttons";
nav.appendChild(navButtonContainer);

var exampleList = document.createElement("ol");
exampleList.id = "examples-menu";
nav.appendChild(exampleList);

var currentURL = window.location.href;
var fileName = currentURL.substring(currentURL.lastIndexOf("/") + 1);

examples.forEach(function (example) {
  var menuItemPath;

  var exampleIndex = examples.indexOf(example);
  if (exampleIndex === 0) {
    menuItemPath = "../index.html";
  } else if (fileName === "index.html") {
    menuItemPath = "examples/" + example.fileName;
  } else {
    menuItemPath = example.fileName;
  }

  let li = document.createElement("li");
  let a = document.createElement("a");
  a.href = menuItemPath;
  a.innerText = example.name;
  li.appendChild(a);
  document.querySelector("#examples-menu").appendChild(li);
});

function findObjectByFileName(fileName) {
  return examples.find(function (obj) {
    return obj.fileName === fileName;
  });
}

var pageObject = findObjectByFileName(fileName);

if (pageObject) {
  createPageContent(pageObject);
  var pageIndex = examples.indexOf(pageObject);
  createPageNavigation(pageIndex);
} else {
  console.log("Object not found for filename:", fileName);
}

function createPageContent(object) {
  let examplesMenu = document.querySelector("#examples-menu");
  let header = document.querySelector("header");
  let h1 = document.createElement("h1");
  let video = object.video;
  h1.innerText = object.name;
  header.appendChild(h1);
  let description = document.createElement("p");
  description.innerText = object.description;
  header.appendChild(description);
  if (video) {
    examplesMenu.insertAdjacentHTML('afterbegin', video);
  }
  const title = document.querySelector("title");
  title.innerText = object.name;
}

function createPageNavigation(pageIndex) {
  var isFirstObject = pageIndex === 0;
  var isSecondObject = pageIndex === 1;
  var isLastObject = pageIndex === examples.length - 1;
  var navButtons = document.querySelector("#nav-buttons");
  var nextButton = document.createElement("a");
  var nextPagePath;
  var nextPageObject;

  if (isFirstObject) {
    nextButton.innerText = "Start";
    nextPagePath = "examples/" + examples[pageIndex + 1].fileName;
  } else if (isLastObject) {
    nextButton.innerText = "Home";
    nextPagePath = "../index.html";
    createBackButton();
  } else {
    nextButton.innerText = "Next";
    nextPagePath = examples[pageIndex + 1].fileName;
    createBackButton();
  }
  nextButton.href = nextPagePath;
  navButtons.appendChild(nextButton);

  var prePagePath;

  function createBackButton() {
    let previousPageObject = examples[pageIndex - 1];
    let backButton = document.createElement("a");
    backButton.innerText = "Back";

    if (isSecondObject) {
      prePagePath = "../" + previousPageObject.fileName;
    } else {
      prePagePath = previousPageObject.fileName;
    }

    backButton.href = prePagePath;
    navButtons.appendChild(backButton);
  }
}

const footer = document.querySelector("footer");
const footerContent = `
    <span>Footer copy goes here</span>
`;
footer.innerHTML = footerContent;

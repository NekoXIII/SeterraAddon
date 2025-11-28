// Things you might want change
// 0 = sound every time you restart, 1000 = echo, 1500 = slight echo, ~2700 = no echo
const UNMUTE_AFTER_MS_LONG = 1000;
const UNMUTE_AFTER_MS_SHORT = 300;

///  Form creation for user settings.
function createForm() {
  if (!document.getElementById("NekoAddon")) {
    const nekoMain = document.createElement("div");
    nekoMain.id = "NekoAddon";
    nekoMain.style.position = "absolute";
    nekoMain.style.top = "442px";
    nekoMain.style.left = "18px";

    const nekoHeader = document.createElement("h2");
    nekoHeader.textContent = "Neko's Seterra Addons";
    nekoHeader.style.paddingBottom = "10px";
    nekoHeader.id = "nekoheaderid";
    nekoMain.appendChild(nekoHeader);

    const nekoForm = document.createElement("form");
    nekoMain.appendChild(nekoForm);

    const checkboxes = [
      {
        id: "darkModeCbxId",
        text: "Dark mode",
        title:
          "Changes the background to a darker color, uncheck to set it to white.",
      },
      {
        id: "mapBgId",
        text: "Disable background",
        title: "Shows or hides the water background.",
      },
      {
        id: "mapPaddingCbxId",
        text: "Map padding",
        title:
          "Adds extra padding below the map for a less distracting user experience.",
      },
      {
        id: "mapResetCbxId",
        text: "Quick map reset",
        title: "Resets the map when the spacebar is pressed.",
      },
      {
        id: "removeLeftPaddingCbxId",
        text: "Center map",
        title: "Adds space on the left side of the map to center the map.",
      },
      {
        id: "hideEndModals",
        text: "Hide end modals",
        title:
          "Hides progression and 'more quizzes' modals.\nThey appear below and to the right of the score modal when you finish a quiz",
      },
      {
        id: "showScoresCbxId",
        text: "Show top 10",
        title:
          "Shows your top 10 best scores on the left of the map.\n!!! ONLY WORKS WHEN LOGGED IN",
      },
      {
        id: "showCursorLabelCbxId",
        text: "Show cursor label",
        title: "Shows or hides the label that tracks the cursor.",
      },
      {
        id: "boldNamesCbxId",
        text: "Show bold names",
        title: "Shows or hides bold names.",
      },
      {
        id: "showFlagCbxId",
        text: "Show area flags",
        title: "Shows or hides area flags.",
      },
      {
        id: "showNamesCbxId",
        text: "Show area names",
        title: "Shows or hides area names.",
      },
      {
        id: "remClickOnCbxId",
        text: 'Remove "Click on" text',
        title: 'Remove "Click on" text from cursor label',
      },
      {
        id: "moveCbxId",
        text: "Move extension down",
        title:
          "Moves the extension (and top 10 if applicable) downwards so it doesn't overlap with the map.",
      },
      {
        id: "oldFontCbxId",
        text: "Use old font",
        title: "Replaces all™ text with the old font.",
      },
    ];

    // Create a style element
    var style = document.createElement("style");

    // Set the type attribute
    style.setAttribute("type", "text/css");

    // Define the CSS rule to change the cursor for labels with the custom-label class
    var css = ".neko-help-class:hover { cursor: pointer; }"; // Changed selector here

    // Add the CSS rule to the style element
    if (style.styleSheet) {
      // For IE
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    // Append the style element to the document's head
    document.head.appendChild(style);

    checkboxes.forEach(({ id, text, title }, index) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;

      const label = document.createElement("label");
      label.textContent = text;
      label.htmlFor = id;

      const helpText = document.createElement("label");
      helpText.textContent = "?";
      helpText.title = title;
      helpText.classList.add("neko-help-class");

      checkbox.style.position = "relative";
      label.style.position = "relative";
      helpText.style.position = "absolute";
      label.style.left = "20px";
      helpText.style.right = "0";

      nekoForm.appendChild(checkbox);
      nekoForm.appendChild(label);
      nekoForm.appendChild(helpText);
      nekoForm.appendChild(document.createElement("br"));
    });

    const version = document.createElement("p");
    version.textContent = "v1.8.5.4 - 16th of May 2025 (Chromium)";
    version.style.fontSize = "12px";
    version.style.position = "absolute";
    version.style.left = "5px";
    version.id = "versionid";
    nekoMain.appendChild(version);

    const changelog = document.createElement("a");
    changelog.href =
      "https://github.com/NekoXIII/SeterraAddon/blob/main/changelog.md#1852";
    changelog.textContent = "Changelog";
    changelog.style.fontSize = "12px";
    changelog.style.position = "absolute";
    changelog.style.left = "5px";
    changelog.style.marginTop = "35px";
    changelog.id = "changelogid";
    changelog.target = "_blank";
    nekoMain.appendChild(changelog);

    document.body.appendChild(nekoMain);
  }
}
///  Custom highscore table positioning, uses the `unset` bool for looping, as it's not loaded instantaneously.
function customTable(bool) {
  if (bool) {
    if (document.getElementsByClassName("highscore_table__oKrYg")[0]) {
      document.getElementsByClassName(
        "highscore_heading__mqofP"
      )[0].style.position = "absolute";
      document.getElementsByClassName(
        "highscore_heading__mqofP"
      )[0].style.backgroundColor = "unset";
      document.getElementsByClassName(
        "highscore_heading__mqofP"
      )[0].style.left = "23px";
      document.getElementsByClassName(
        "highscore_heading__mqofP"
      )[0].style.color = "#FF006E";

      document.getElementsByClassName(
        "highscore_table__oKrYg"
      )[0].style.position = "absolute";
      document.getElementsByClassName(
        "highscore_table__oKrYg"
      )[0].style.backgroundColor = "unset";
      document.getElementsByClassName("highscore_table__oKrYg")[0].style.left =
        "0px";
      unset = false;
    }
  }
}
///
function remClickOn(bool) {
  if (bool) {
    if (document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]) {
      if (
        document
          .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
          .querySelector("span")
      ) {
        document
          .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
          .querySelector("span").childNodes[0].textContent = "";
      }
    }
  } else {
    if (document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]) {
      if (
        document
          .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
          .querySelector("span")
      ) {
        document
          .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
          .querySelector("span").childNodes[0].textContent = "Click on ";
      }
    }
  }
}
///  Map bottom padding.
function mapPadding(bool) {
  if (bool) {
    if (document.getElementsByClassName("extra-info_extraInfo__80Tci")) {
      let a = document.getElementsByClassName("extra-info_extraInfo__80Tci");
      if (a[0]) {
        a[0].style.marginTop = "200px";
      }
    }
  } else {
    if (document.getElementsByClassName("extra-info_extraInfo__80Tci")) {
      let a = document.getElementsByClassName("extra-info_extraInfo__80Tci");
      if (a[0]) {
        a[0].style.marginTop = "0px";
      }
    }
  }
}
function zoomFunc(amnt, px, zoom) {
  if (zoom == amnt) {
    if (
      document.querySelectorAll(
        "aside.seterra_sidebarLeft__wQo_r.seterra_sidebar__p6xf1.seterra_adContainerLeft__zTLsS"
      )[0]
    ) {
      document.querySelectorAll(
        "aside.seterra_sidebarLeft__wQo_r.seterra_sidebar__p6xf1.seterra_adContainerLeft__zTLsS"
      )[0].style.width = px + "px";
    }
    if (amnt <= 1.4) {
      if (
        document.querySelectorAll(
          "aside.seterra_sidebarRight__bXW1x.seterra_sidebar__p6xf1.seterra_adContainerRight__lDew4"
        )[0]
      ) {
        document.querySelectorAll(
          "aside.seterra_sidebarRight__bXW1x.seterra_sidebar__p6xf1.seterra_adContainerRight__lDew4"
        )[0].style.display = "block";
      }
    } else {
      if (
        document.querySelectorAll(
          "aside.seterra_sidebarRight__bXW1x.seterra_sidebar__p6xf1.seterra_adContainerRight__lDew4"
        )[0]
      ) {
        document.querySelectorAll(
          "aside.seterra_sidebarRight__bXW1x.seterra_sidebar__p6xf1.seterra_adContainerRight__lDew4"
        )[0].style.display = "none";
      }
    }
  }
}

///  Removal of empty space next to map.
function noLeftSpace(bool) {
  if (bool) {
    let zoom = window.devicePixelRatio.toFixed(1); // 100% = 1.0, 50% = 0.5

    zoomFunc(0.5, 410, zoom); // 50%
    zoomFunc(0.6, 410, zoom); // 50%
    zoomFunc(0.7, 400, zoom); // 70%
    zoomFunc(0.8, 400, zoom); // 80%
    zoomFunc(0.9, 400, zoom); // 90%
    zoomFunc(1.0, 400, zoom); // 100%
    zoomFunc(1.1, 400, zoom); // 110%
    zoomFunc(1.2, 380, zoom); // 120%
    zoomFunc(1.3, 315, zoom); // 130%
    zoomFunc(1.4, 267, zoom); // 140%
    zoomFunc(1.5, 267, zoom); // 150+%
  } else {
    if (
      document.querySelectorAll(
        "aside.seterra_sidebarLeft__wQo_r.seterra_sidebar__p6xf1.seterra_adContainerLeft__zTLsS"
      )[0]
    ) {
      document.querySelectorAll(
        "aside.seterra_sidebarLeft__wQo_r.seterra_sidebar__p6xf1.seterra_adContainerLeft__zTLsS"
      )[0].style.width = "160px";
    }
  }
}

///  Map reset function.
let unmuteTimeoutId;
function spaceKeyDownHandler(event) {
  if (event.code == "Space") {
    event.preventDefault();
    clearTimeout(unmuteTimeoutId);
    const quitButton = document.querySelector(
      ".game-header_quitGameButton__zTYUz"
    );
    if (quitButton) {
      quitButton.click();
    }
    // prevent "game end" sound
    const correctAnswersPercentage = document.querySelector(
      ".game-header_left__Psq9Q label:nth-of-type(2)"
    );
    const unmuteAfterMs =
      correctAnswersPercentage &&
      correctAnswersPercentage.textContent === "100%"
        ? UNMUTE_AFTER_MS_LONG
        : UNMUTE_AFTER_MS_SHORT;
    tryStartGame(unmuteAfterMs);
  }
}
const OVERLAY_CLASS = "game-overlay_wrapper__egT_7";
function tryStartGame(unmuteAfterMs) {
  const overlay = document.querySelector(".".concat(OVERLAY_CLASS));
  if (overlay) {
    // already available, no need to wait
    handleStartGame(overlay);
  } else {
    chrome.runtime.sendMessage({ action: "muteTab" });
    // wait for start button to appear
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.classList.contains(OVERLAY_CLASS)) {
            handleStartGame(node, observer, unmuteAfterMs);
          }
        }
      }
    });
    const gameWrapper = document.querySelector(".game-area_gameWrapper__QWih6");
    // const startButton = document.querySelector('[data-qa="start-quiz-button"]');
    observer.observe(gameWrapper, { subtree: true, childList: true });
  }
}
function handleStartGame(overlay, observer, unmuteAfterMs) {
  clearTimeout(unmuteTimeoutId);
  overlay.style.display = "none";
  const startButton = document.querySelector('[data-qa="start-quiz-button"]');
  if (startButton) {
    startButton.click();
    if (observer) {
      observer.disconnect();
    }
    unmuteTimeoutId = setTimeout(() => {
      chrome.runtime.sendMessage({ action: "unmuteTab" });
    }, unmuteAfterMs);
  }
}
///  Map reset check.
function mapReset(bool) {
  if (bool) {
    document.addEventListener("keydown", spaceKeyDownHandler);
  } else {
    document.removeEventListener("keydown", spaceKeyDownHandler);
  }
}
///  Toggle for dark mode.
function darkMode() {
  if (document.querySelectorAll("div.game-container_sizeSmall___C_u3")[0]) {
    if (
      document.querySelectorAll("div.game-container_sizeSmall___C_u3")[0].style
        .backgroundColor != "rgb(24, 26, 27)"
    ) {
      if (document.querySelectorAll("div.seterra_content__nGh5_")[0]) {
        document.querySelectorAll(
          "div.seterra_content__nGh5_"
        )[0].style.backgroundColor = "#181A1B";
      }
      if (document.querySelectorAll("div.game-container_sizeSmall___C_u3")[0]) {
        document.querySelectorAll(
          "div.game-container_sizeSmall___C_u3"
        )[0].style.backgroundColor = "#181A1B";
      }
      if (document.getElementsByClassName("game-header_wrapper__JDf24")[0]) {
        document.getElementsByClassName(
          "game-header_wrapper__JDf24"
        )[0].style.background = "rgba(24, 26, 27, 0.5)";
      }
      if (document.querySelectorAll("div.container_sizeMedium__Fwp9_")[0]) {
        document.querySelectorAll(
          "div.container_sizeMedium__Fwp9_"
        )[0].style.backgroundColor = "#181A1B";
      }
      document
        .querySelectorAll("a.games-list_viewAllLink__NQa_n b")
        .forEach(function (element) {
          element.style.color = "black";
        });
    }
  } else if (
    document.querySelectorAll("div.game-container_sizeMedium__ZYDZN")[0]
  ) {
    if (
      document.querySelectorAll("div.game-container_sizeMedium__ZYDZN")[0].style
        .backgroundColor != "rgb(24, 26, 27)"
    ) {
      if (document.querySelectorAll("div.seterra_content__nGh5_")[0]) {
        document.querySelectorAll(
          "div.seterra_content__nGh5_"
        )[0].style.backgroundColor = "#181A1B";
      }
      if (
        document.querySelectorAll("div.game-container_sizeMedium__ZYDZN")[0]
      ) {
        document.querySelectorAll(
          "div.game-container_sizeMedium__ZYDZN"
        )[0].style.backgroundColor = "#181A1B";
      }
      if (document.getElementsByClassName("game-header_wrapper__JDf24")[0]) {
        document.getElementsByClassName(
          "game-header_wrapper__JDf24"
        )[0].style.background = "rgba(24, 26, 27, 0.5)";
      }
      if (document.querySelectorAll("div.container_sizeMedium__Fwp9_")[0]) {
        document.querySelectorAll(
          "div.container_sizeMedium__Fwp9_"
        )[0].style.backgroundColor = "#181A1B";
      }
      document
        .querySelectorAll("a.games-list_viewAllLink__NQa_n b")
        .forEach(function (element) {
          element.style.color = "black";
        });
    }
  }
  document.querySelector(
    ".game-container_backgroundCard__k_11p"
  ).style.backgroundColor = "rgb(24, 26, 27)";

  if (document.getElementsByClassName("seterra_content__nGh5_")[0]) {
    document.getElementsByClassName(
      "seterra_content__nGh5_"
    )[0].style.backgroundColor = "#181A1B";
  }
  if (document.getElementsByClassName("container_sizeMedium__Fwp9_")[0]) {
    document.getElementsByClassName(
      "container_sizeMedium__Fwp9_"
    )[0].style.backgroundColor = "#181A1B";
  }

  if (document.querySelectorAll(".games-list_viewAllLink__NQa_n")) {
    document
      .querySelectorAll(".games-list_viewAllLink__NQa_n")
      .forEach(function (element) {
        element.style.background = "none";
      });
  }

  document.querySelectorAll(":not(a):not(input)").forEach(function (element) {
    element.style.color = "white";
  });
  if (document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]) {
    document.getElementsByClassName(
      "game-tooltip_tooltip__w_58_"
    )[0].style.background = "rgba(24, 26, 27, 0.75)";

    var spanElement = document
      .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
      .querySelector("span")
      .querySelector("strong");

    if (spanElement) {
      spanElement.style.color = "white";
      labelColor = false;
    }
  }
  if (document.getElementsByClassName("highscore_table__oKrYg")[0]) {
    document.getElementsByClassName(
      "highscore_table__oKrYg"
    )[0].style.backgroundColor = "rgba(0,0,0,0)";
  }
  if (document.getElementsByClassName("game-area_gameArea__G2ABs")[0]) {
    document
      .getElementsByClassName("game-area_gameArea__G2ABs")[0]
      .childNodes.forEach(function (element) {
        element.style.color = "black";
      });
  }
  document.getElementById("nekoheaderid").style.color = "#FF006E";
  document.getElementById("versionid").style.color = "#CC0058";
  if (document.getElementsByClassName("highscore_heading__mqofP")[0]) {
    document.getElementsByClassName("highscore_heading__mqofP")[0].style.color =
      "#FF006E";
  }
  if (document.querySelectorAll("div.container_content__Z3nYC")[0]) {
    document.querySelectorAll(
      "div.container_content__Z3nYC"
    )[0].style.backgroundColor = "#181A1B";
  }
  // homepage progression colors
  if (
    document.querySelectorAll("div.progression-banner-card-bar_title__OxvJn")
  ) {
    document
      .querySelectorAll("div.progression-banner-card-bar_title__OxvJn")
      .forEach(function (element) {
        element.style.color = "var(--seterra-color-link)";
      });
    document
      .querySelectorAll("div.progression-banner-card-bar_score__ws1hV span")
      .forEach(function (element) {
        element.style.color = "black";
      });
    document
      .querySelectorAll("div.progression-banner-card_title__xpkNo")
      .forEach(function (element) {
        element.style.color = "var(--seterra-color-orange)";
      });
  }
}
///  Toggle for light mode.
function lightMode() {
  if (document.querySelectorAll("div.game-container_sizeSmall___C_u3")[0]) {
    if (
      document.querySelectorAll("div.game-container_sizeSmall___C_u3")[0].style
        .backgroundColor == "rgb(24, 26, 27)"
    ) {
      if (document.querySelectorAll("div.seterra_content__nGh5_")[0]) {
        document.querySelectorAll(
          "div.seterra_content__nGh5_"
        )[0].style.backgroundColor = "#E7E5E4";
      }
      if (document.querySelectorAll("div.game-container_sizeSmall___C_u3")[0]) {
        document.querySelectorAll(
          "div.game-container_sizeSmall___C_u3"
        )[0].style.backgroundColor = "#E7E5E4";
      }
      if (document.getElementsByClassName("game-header_wrapper__JDf24")[0]) {
        document.getElementsByClassName(
          "game-header_wrapper__JDf24"
        )[0].style.background = "rgba(231, 229, 228, 0.5)";
      }
      if (document.querySelectorAll("div.container_sizeMedium__Fwp9_")[0]) {
        document.querySelectorAll(
          "div.container_sizeMedium__Fwp9_"
        )[0].style.backgroundColor = "#E7E5E4";
      }
      document
        .querySelectorAll("a.games-list_viewAllLink__NQa_n b")
        .forEach(function (element) {
          element.style.color = "white";
        });
    }
  } else if (
    document.querySelectorAll("div.game-container_sizeMedium__ZYDZN")[0]
  ) {
    if (
      document.querySelectorAll("div.game-container_sizeMedium__ZYDZN")[0].style
        .backgroundColor == "rgb(24, 26, 27)"
    ) {
      if (document.querySelectorAll("div.seterra_content__nGh5_")[0]) {
        document.querySelectorAll(
          "div.seterra_content__nGh5_"
        )[0].style.backgroundColor = "#E7E5E4";
      }
      if (
        document.querySelectorAll("div.game-container_sizeMedium__ZYDZN")[0]
      ) {
        document.querySelectorAll(
          "div.game-container_sizeMedium__ZYDZN"
        )[0].style.backgroundColor = "#E7E5E4";
      }
      if (document.getElementsByClassName("game-header_wrapper__JDf24")[0]) {
        document.getElementsByClassName(
          "game-header_wrapper__JDf24"
        )[0].style.background = "rgba(231, 229, 228, 0.5)";
      }
      if (document.querySelectorAll("div.container_sizeMedium__Fwp9_")[0]) {
        document.querySelectorAll(
          "div.container_sizeMedium__Fwp9_"
        )[0].style.backgroundColor = "#E7E5E4";
      }
      document
        .querySelectorAll("a.games-list_viewAllLink__NQa_n b")
        .forEach(function (element) {
          element.style.color = "white";
        });
    }
  }
  document.querySelector(
    ".game-container_backgroundCard__k_11p"
  ).style.backgroundColor = "#E7E5E4";

  if (document.getElementsByClassName("seterra_content__nGh5_")[0]) {
    document.getElementsByClassName(
      "seterra_content__nGh5_"
    )[0].style.backgroundColor = "#E7E5E4";
  }
  if (document.getElementsByClassName("container_sizeMedium__Fwp9_")[0]) {
    document.getElementsByClassName(
      "container_sizeMedium__Fwp9_"
    )[0].style.backgroundColor = "#E7E5E4";
  }

  if (document.querySelectorAll(".games-list_viewAllLink__NQa_n")) {
    document
      .querySelectorAll(".games-list_viewAllLink__NQa_n")
      .forEach(function (element) {
        element.style.background = "none";
      });
  }

  document.querySelectorAll(":not(a):not(input)").forEach(function (element) {
    if (
      !document
        .querySelector(".game-page_gameAreaWrapper__Faj76")
        .contains(element)
    )
      element.style.color = "black";
  });
  if (document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]) {
    document.getElementsByClassName(
      "game-tooltip_tooltip__w_58_"
    )[0].style.background = "rgba(231, 229, 228, 0.75)";

    var spanElement = document
      .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
      .querySelector("span")
      .querySelector("strong");

    if (spanElement) {
      spanElement.style.color = "black";
      labelColor = false;
    }
  }
  if (document.getElementsByClassName("highscore_table__oKrYg")[0]) {
    document.getElementsByClassName(
      "highscore_table__oKrYg"
    )[0].style.backgroundColor = "rgba(0,0,0,0)";
  }
  if (document.getElementsByClassName("game-area_gameArea__G2ABs")[0]) {
    document
      .getElementsByClassName("game-area_gameArea__G2ABs")[0]
      .childNodes.forEach(function (element) {
        element.style.color = "white";
      });
  }
  document.getElementById("nekoheaderid").style.color = "#FF006E";
  document.getElementById("versionid").style.color = "#CC0058";
  if (document.getElementsByClassName("highscore_heading__mqofP")[0]) {
    document.getElementsByClassName("highscore_heading__mqofP")[0].style.color =
      "#FF006E";
  }
  if (document.querySelectorAll("div.container_content__Z3nYC")[0]) {
    document.querySelectorAll(
      "div.container_content__Z3nYC"
    )[0].style.backgroundColor = "#E7E5E4";
  }
  // homepage progression colors
  if (
    document.querySelectorAll("div.progression-banner-card-bar_title__OxvJn")
  ) {
    document
      .querySelectorAll("div.progression-banner-card-bar_title__OxvJn")
      .forEach(function (element) {
        element.style.color = "var(--seterra-color-link)";
      });
    document
      .querySelectorAll("div.progression-banner-card-bar_score__ws1hV span")
      .forEach(function (element) {
        element.style.color = "black";
      });
    document
      .querySelectorAll("div.progression-banner-card_title__xpkNo")
      .forEach(function (element) {
        element.style.color = "var(--seterra-color-orange)";
      });
    document
      .querySelectorAll("div.switch_show__V6W5T + label.switch_label__KrnMF")
      .forEach(function (element) {
        element.style.color = "white";
      });
  }
  if (document.querySelector("div.score-modal_progressionTitle__D34Xw")) {
    document.querySelector(
      "div.score-modal_progressionTitle__D34Xw"
    ).style.color = "white";
  }
}
function hideEndModals(bool) {
  const style = bool ? "none" : "";
  const modals = document.querySelectorAll(
    ".score-modal-recommended_card__fzeLf,.score-modal_progressionModal__MCb4Y"
  );
  modals.forEach((modal) => (modal.style.display = style));
}
///  Toggle cursor label visibility.
function cursorLabel(bool) {
  if (bool) {
    if (document.getElementsByClassName("game-area_tooltip__Ns9Yi")[0]) {
      document.getElementsByClassName(
        "game-area_tooltip__Ns9Yi"
      )[0].style.display = "block";
    }
  } else {
    if (document.getElementsByClassName("game-area_tooltip__Ns9Yi")[0]) {
      document.getElementsByClassName(
        "game-area_tooltip__Ns9Yi"
      )[0].style.display = "none";
    }
  }
}
///  Toggle bold area names.
function boldNames(bool) {
  if (bool) {
    if (document.getElementsByClassName("game-header_withDivider__ZHYAO")[2]) {
      document.getElementsByClassName(
        "game-header_withDivider__ZHYAO"
      )[2].children[0].style.fontWeight = "bold";
    }
    if (document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]) {
      if (
        document
          .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
          .querySelector("span")
      ) {
        if (
          document
            .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
            .querySelector("span")
            .querySelector("strong")
        ) {
          document
            .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
            .querySelector("span")
            .querySelector("strong").style.fontWeight = "bold";
          if (
            document
              .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
              .querySelector("span")
              .querySelector("strong").style.fontWeight == "bold"
          ) {
            boldNamesOopsie = false;
          }
        }
      }
    }
  } else {
    if (document.getElementsByClassName("game-header_withDivider__ZHYAO")[2]) {
      document.getElementsByClassName(
        "game-header_withDivider__ZHYAO"
      )[2].children[0].style.fontWeight = "normal";
    }
    if (document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]) {
      if (
        document
          .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
          .querySelector("span")
      ) {
        if (
          document
            .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
            .querySelector("span")
            .querySelector("strong")
        ) {
          document
            .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
            .querySelector("span")
            .querySelector("strong").style.fontWeight = "normal";
          if (
            document
              .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
              .querySelector("span")
              .querySelector("strong").style.fontWeight == "normal"
          ) {
            boldNamesOopsie = false;
          }
        }
      }
    }
  }
}
///  Toggle area flags.
function flags(bool) {
  if (bool) {
    if (document.getElementsByClassName("corner-image_wrapper__ej_p1")[0]) {
      document.getElementsByClassName(
        "corner-image_wrapper__ej_p1"
      )[0].style.display = "flex";
    }
    if (document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]) {
      if (
        document
          .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
          .querySelector("img")
      ) {
        document
          .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
          .querySelector("img").style.display = "flex";
      }
    }
  } else {
    if (document.getElementsByClassName("corner-image_wrapper__ej_p1")[0]) {
      document.getElementsByClassName(
        "corner-image_wrapper__ej_p1"
      )[0].style.display = "none";
    }
    if (document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]) {
      if (
        document
          .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
          .querySelector("img")
      ) {
        document
          .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
          .querySelector("img").style.display = "none";
      }
    }
  }
}
///  Toggle area names.
function names(bool) {
  if (bool) {
    if (document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]) {
      if (
        document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
          .childNodes[0]
      ) {
        document.getElementsByClassName(
          "game-tooltip_tooltip__w_58_"
        )[0].childNodes[0].style.display = "block";
      }
    }
    if (document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]) {
      document.getElementsByClassName(
        "game-tooltip_tooltip__w_58_"
      )[0].style.paddingLeft = "8px"; // label padding
    }
    if (document.getElementsByClassName("game-header_withDivider__ZHYAO")[2]) {
      document.getElementsByClassName(
        "game-header_withDivider__ZHYAO"
      )[2].style.display = "block";
    }
  } else {
    if (document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]) {
      if (
        document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
          .childNodes[0]
      ) {
        if (
          document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
            .childNodes[0].childNodes[0]
        ) {
          document.getElementsByClassName(
            "game-tooltip_tooltip__w_58_"
          )[0].childNodes[0].style.display = "none";
        }
      }
    }
    if (document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]) {
      document.getElementsByClassName(
        "game-tooltip_tooltip__w_58_"
      )[0].style.paddingLeft = "0px";
    }
    if (document.getElementsByClassName("game-header_withDivider__ZHYAO")[2]) {
      document.getElementsByClassName(
        "game-header_withDivider__ZHYAO"
      )[2].style.display = "none";
    }
  }
}
///  Sets data if none is present. (defaults)
function setInitialData(data) {
  return chrome.storage.local.get(Object.keys(data)).then((result) => {
    for (let key in data) {
      if (!(key in result)) {
        result[key] = data[key];
      }
    }
    return chrome.storage.local.set(result);
  });
}
///  Grabs data from local storage.
function retrieveData(name) {
  return chrome.storage.local.get(name).then((result) => {
    return result[name];
  });
}
///  Spits out readable data from local storage.
function getData(name) {
  return retrieveData(name).then((value) => {
    return value;
  });
}
///  Constant loop for page checks.
function meow() {
  if (isSeterraMap(window.location.href)) {
    createForm();
    document.getElementById("NekoAddon").style.display = "block";
  } else {
    document.getElementById("NekoAddon").style.display = "none";
  }

  getData("darkMode").then((beans1) => {
    if (beans1) {
      document.getElementById("darkModeCbxId").checked = true;
      darkMode();
    } else {
      document.getElementById("darkModeCbxId").checked = false;
      lightMode();
    }
  });
  getData("mapBg").then((beans11) => {
    if (beans11) {
      document.getElementById("mapBgId").checked = true;
      mapBg(true);
    } else {
      document.getElementById("mapBgId").checked = false;
      mapBg(false);
    }
  });
  getData("mapPadding").then((beans2) => {
    if (beans2) {
      document.getElementById("mapPaddingCbxId").checked = true;
      mapPadding(true);
    } else {
      document.getElementById("mapPaddingCbxId").checked = false;
      mapPadding(false);
    }
  });
  getData("quickReset").then((beans3) => {
    if (beans3) {
      document.getElementById("mapResetCbxId").checked = true;
      mapReset(true);
    } else {
      document.getElementById("mapResetCbxId").checked = false;
      mapReset(false);
    }
  });
  getData("hideEndModals").then((doHide) => {
    document.getElementById("hideEndModals").checked = doHide;
    hideEndModals(doHide);
  });
  getData("removeLeft").then((beans4) => {
    if (beans4) {
      document.getElementById("removeLeftPaddingCbxId").checked = true;
      noLeftSpace(true);
    } else {
      document.getElementById("removeLeftPaddingCbxId").checked = false;
      noLeftSpace(false);
    }
  });
  getData("showTop10").then((beans5) => {
    if (beans5) {
      document.getElementById("showScoresCbxId").checked = true;
      customTable(true);
    }
  });
  getData("showCursorLabel").then((beans6) => {
    if (beans6) {
      document.getElementById("showCursorLabelCbxId").checked = true;
      cursorLabel(true);
    } else {
      document.getElementById("showCursorLabelCbxId").checked = false;
      cursorLabel(false);
    }
  });
  getData("showFlags").then((beans7) => {
    if (beans7) {
      document.getElementById("showFlagCbxId").checked = true;
      flags(true);
    } else {
      document.getElementById("showFlagCbxId").checked = false;
      flags(false);
    }
  });
  getData("showNames").then((beans8) => {
    if (beans8) {
      document.getElementById("showNamesCbxId").checked = true;
      names(true);
    } else {
      document.getElementById("showNamesCbxId").checked = false;
      names(false);
    }
  });
  getData("removeClickOn").then((beans80) => {
    if (beans80) {
      document.getElementById("remClickOnCbxId").checked = true;
      remClickOn(true);
    } else {
      document.getElementById("remClickOnCbxId").checked = false;
      remClickOn(false);
    }
  });
  getData("boldNames").then((beans9) => {
    if (beans9) {
      document.getElementById("boldNamesCbxId").checked = true;
      boldNames(true);
    } else {
      document.getElementById("boldNamesCbxId").checked = false;
      boldNames(false);
    }
  });
  getData("moveEx").then((beans924) => {
    if (beans924) {
      document.getElementById("moveCbxId").checked = true;
      moveExtension(true);
    } else {
      document.getElementById("moveCbxId").checked = false;
      moveExtension(false);
    }
  });
  getData("useOldFont").then((beans9241) => {
    if (beans9241) {
      document.getElementById("oldFontCbxId").checked = true;
      useOldFont(true);
    } else {
      document.getElementById("oldFontCbxId").checked = false;
      useOldFont(false);
    }
  });
  if (src && !toggled) {
    toggled = true;
    setInterval(compareBestTime, 2000);
  }

  getData("initialReload").then((beans90) => {
    if (!beans90) {
      chrome.storage.local.set({
        initialReload: true,
      });
      location.reload();
    }
  });
}

const seterraUrlRegex =
  /https:\/\/www\.geoguessr\.com\/([a-zA-Z]{2}\/)?(vgp|fl)\/\d+/;
function isSeterraMap(url) {
  return seterraUrlRegex.test(url);
}

///  Applies the user's stored settings. (executes functions)
function setSettings() {
  getData("showTop10").then((beans5) => {
    if (beans5) {
      document.getElementById("showScoresCbxId").checked = true;
      customTable(true);
    }
  });

  document.getElementById("nekoheaderid").style.color = "#FF006E";
  document.getElementById("versionid").style.color = "#CC0058";

  if (window.find("Uh oh! Got lost on your way?", true)) {
    location.reload();
  }

  if (!eventListenersAdded) {
    handleCheckboxChange("darkModeCbxId", "darkMode", darkMode);
    handleCheckboxChange("mapBgId", "mapBg", mapBg);
    handleCheckboxChange("mapPaddingCbxId", "mapPadding", mapPadding);
    handleCheckboxChange("mapResetCbxId", "quickReset", mapReset);
    handleCheckboxChange("removeLeftPaddingCbxId", "removeLeft", noLeftSpace);
    handleCheckboxChange("showScoresCbxId", "showTop10", customTable, true);
    handleCheckboxChange(
      "showCursorLabelCbxId",
      "showCursorLabel",
      cursorLabel
    );
    handleCheckboxChange("hideEndModals", "hideEndModals", hideEndModals);
    handleCheckboxChange("boldNamesCbxId", "boldNames", boldNames);
    handleCheckboxChange("showFlagCbxId", "showFlags", flags);
    handleCheckboxChange("showNamesCbxId", "showNames", names);
    handleCheckboxChange("remClickOnCbxId", "removeClickOn", remClickOn);
    handleCheckboxChange("moveCbxId", "moveEx", moveExtension);
    handleCheckboxChange("oldFontCbxId", "useOldFont", useOldFont);

    eventListenersAdded = true;
  }
  if (document.getElementsByClassName("seterra_adFooter__4glju")[0]) {
    document.getElementsByClassName("seterra_adFooter__4glju")[0].remove();
  }
  meow();
}

function moveExtension(bool) {
  if (bool) {
    document.getElementById("NekoAddon").style.top = "1250px";
    getData("showTop10").then((beans5467) => {
      if (beans5467) {
        // move top 10 down
        if (document.getElementsByClassName("highscore_heading__mqofP")[0]) {
          if (document.getElementsByClassName("highscore_heading__mqofP")[0]) {
            document.getElementsByClassName(
              "highscore_heading__mqofP"
            )[0].style.top = 808 + 800 + "px";
          }
          if (document.getElementsByClassName("highscore_table__oKrYg")[0]) {
            document.getElementsByClassName(
              "highscore_table__oKrYg"
            )[0].style.top = 824 + 800 + "px";
          }
        }
      } else {
        if (document.getElementsByClassName("highscore_heading__mqofP")[0]) {
          if (document.getElementsByClassName("highscore_heading__mqofP")[0]) {
            document.getElementsByClassName(
              "highscore_heading__mqofP"
            )[0].style.top = "808px";
          }
          if (document.getElementsByClassName("highscore_table__oKrYg")[0]) {
            document.getElementsByClassName(
              "highscore_table__oKrYg"
            )[0].style.top = "824px";
          }
        }
      }
    });
  } else {
    if (document.getElementsByClassName("highscore_heading__mqofP")[0]) {
      document.getElementById("NekoAddon").style.top = "442px";
      if (document.getElementsByClassName("highscore_heading__mqofP")[0]) {
        document.getElementsByClassName(
          "highscore_heading__mqofP"
        )[0].style.top = "808px";
      }
      if (document.getElementsByClassName("highscore_table__oKrYg")[0]) {
        document.getElementsByClassName("highscore_table__oKrYg")[0].style.top =
          "824px";
      }
    }
  }
}

const oldFontstyle = document.createElement("style");
oldFontstyle.type = "text/css";

const importRule = `
@import url('https://fonts.cdnfonts.com/css/neo-sans-pro');
`;

if (oldFontstyle.styleSheet) {
  oldFontstyle.styleSheet.cssText = importRule; // For IE8 and earlier
} else {
  oldFontstyle.appendChild(document.createTextNode(importRule));
}

document.head.appendChild(oldFontstyle);

function useOldFont(bool) {
  var elements = document.querySelectorAll("*");

  if (bool) {
    elements.forEach(function (element) {
      var computedStyle = window.getComputedStyle(element);
      if (
        element.textContent.trim() !== "" ||
        computedStyle.content !== "none"
      ) {
        element.style.fontFamily = "Neo Sans Pro, sans-serif";
      }
    });
  } else {
    elements.forEach(function (element) {
      var computedStyle = window.getComputedStyle(element);
      if (
        element.textContent.trim() !== "" ||
        computedStyle.content !== "none"
      ) {
        element.style.fontFamily = "__ggFont_3c514f";
      }
    });
  }
}

function handleCheckboxChange(
  checkboxId,
  storageKey,
  callback,
  reload = false
) {
  document.getElementById(checkboxId).addEventListener("change", function () {
    let isChecked = document.getElementById(checkboxId).checked;
    let storageObj = {};
    storageObj[storageKey] = isChecked;

    chrome.storage.local.set(storageObj);

    if (
      reload &&
      !isChecked &&
      document.getElementsByClassName("highscore_table__oKrYg")[0]
    ) {
      location.reload();
    } else {
      callback(isChecked);
    }
  });
}

setInitialData({
  darkMode: true,
  mapBg: false,
  mapPadding: true,
  quickReset: true,
  removeLeft: true,
  showTop10: true,
  hideEndModals: true,
  showCursorLabel: true,
  boldNames: true,
  showFlags: true,
  showNames: true,
  removeClickOn: false,
  moveEx: false,
  useOldFont: true,
  initialReload: false,
}).then(() => {
  setSettings();
  meow();
});

function findMS(value) {
  const dotPosition = value.indexOf(".");

  if (dotPosition === -1) {
    return 0;
  }

  const substringAfterDot = value.substring(dotPosition + 1);

  return substringAfterDot.length;
}

function getOrdinalSuffix(num) {
  const j = num % 10,
    k = num % 100;

  if (k === 11 || k === 12 || k === 13) {
    return num + "th";
  }

  switch (j) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}

function compareBestTime() {
  // cheat sheet
  // all levels: https://www.speedrun.com/api/v1/games/nd28p43d/levels

  // europe countries: https://www.speedrun.com/api/v1/leaderboards/nd28p43d/category/jdz0yzv2
  // argentinia provinces (pin) : https://www.speedrun.com/api/v1/leaderboards/nd28p43d/level/ewpg2rkw/5dwvozlk

  if (window.location.pathname == "/vgp/3007") {
    // eur countr
    // Fetch the leaderboard data from the API

    var existingSrcLink = Array.from(
      document
        .getElementsByClassName("highscore_heading__mqofP")[0]
        .parentElement.getElementsByTagName("a")
    ).find((a) => a.textContent === "Visit SRC Page");

    if (existingSrcLink) {
      existingSrcLink.setAttribute(
        "href",
        "https://www.speedrun.com/seterra?h=Europe_Countries_with_Kosovo-pin-Website&x=jdz0yzv2-7893xeq8.qj77360q-j84vge28.q8kk983q"
      );
      existingSrcLink.setAttribute("target", "_blank");
    }

    fetch(
      "https://www.speedrun.com/api/v1/leaderboards/nd28p43d/category/jdz0yzv2"
    )
      .then((response) => response.json())
      .then((leaderboardData) => {
        const specificKey = "7893xeq8";
        const pinValue = "qj77360q";

        const filteredRuns = leaderboardData.data.runs.filter(
          (run) => run.run.values[specificKey] === pinValue
        );
        let j = 1;
        let num = 0;

        if (document.getElementsByClassName("highscore_table__oKrYg")[0]) {
          var timeString = document.getElementsByClassName(
            "highscore_table__oKrYg"
          )[0].childNodes[1].childNodes[0].childNodes[2].innerText;
          let pb =
            parseFloat(timeString.split(":")[0]) * 60 +
            parseFloat(timeString.split(":")[1]);

          for (let i = 0; i < filteredRuns.length; i++) {
            num = pb - parseFloat(filteredRuns[i].run.times.primary_t);

            if (
              num < 0.0 &&
              !document
                .getElementsByClassName("highscore_table__oKrYg")[0]
                .childNodes[1].childNodes[0].childNodes[2].innerText.includes(
                  "(~"
                )
            ) {
              document.getElementsByClassName(
                "highscore_table__oKrYg"
              )[0].childNodes[1].childNodes[0].childNodes[2].innerText +=
                ` (~` + getOrdinalSuffix(j) + `)*`;
            }

            j++;
          }
        }
      })
      .catch((error) =>
        console.error("Error fetching leaderboard data:", error)
      );
  } else if (window.location.pathname == "/vgp/3008") {
    // swe prov
    // Fetch the leaderboard data from the API
    var existingSrcLink = Array.from(
      document
        .getElementsByClassName("highscore_heading__mqofP")[0]
        .parentElement.getElementsByTagName("a")
    ).find((a) => a.textContent === "Visit SRC Page");

    if (existingSrcLink) {
      existingSrcLink.setAttribute(
        "href",
        "https://www.speedrun.com/seterra?h=Sweden_Provinces-Pin-Website&x=l_y9ml341w-5dwvozlk-j84vge28.q8kk983q"
      );
      existingSrcLink.setAttribute("target", "_blank");
    }

    fetch(
      "https://www.speedrun.com/api/v1/leaderboards/nd28p43d/level/y9ml341w/5dwvozlk"
    )
      .then((response) => response.json())
      .then((leaderboardData) => {
        const filteredRuns = leaderboardData.data.runs.filter(
          (run) => run.run.values
        );

        // console.log(filteredRuns);

        let j = 1;
        let num = 0;

        if (document.getElementsByClassName("highscore_table__oKrYg")[0]) {
          let timeString = document.getElementsByClassName(
            "highscore_table__oKrYg"
          )[0].childNodes[1].childNodes[0].childNodes[2].innerText;
          let pb =
            parseFloat(timeString.split(":")[0]) * 60 +
            parseFloat(timeString.split(":")[1]);
          let conditionMet = false; // Flag to check if condition is met at least once

          for (let i = 0; i < filteredRuns.length; i++) {
            if (findMS(filteredRuns[i].run.times.primary_t.toString()) <= 2) {
              num = pb - parseFloat(filteredRuns[i].run.times.primary_t + `0`);
            } else {
              num = pb - parseFloat(filteredRuns[i].run.times.primary_t);
            }

            if (
              num < 0.0 &&
              !document
                .getElementsByClassName("highscore_table__oKrYg")[0]
                .childNodes[1].childNodes[0].childNodes[2].innerText.includes(
                  "(~"
                )
            ) {
              document.getElementsByClassName(
                "highscore_table__oKrYg"
              )[0].childNodes[1].childNodes[0].childNodes[2].innerText +=
                ` (~` + getOrdinalSuffix(j) + `)*`;
              conditionMet = true;
            }

            j++;
          }

          // If condition was never met, set j to filteredRuns.length + 1
          if (
            !conditionMet &&
            !document
              .getElementsByClassName("highscore_table__oKrYg")[0]
              .childNodes[1].childNodes[0].childNodes[2].innerText.includes(
                "(~"
              )
          ) {
            j = filteredRuns.length + 1;
            document.getElementsByClassName(
              "highscore_table__oKrYg"
            )[0].childNodes[1].childNodes[0].childNodes[2].innerText +=
              ` (~` + getOrdinalSuffix(j) + `)*`;
          }
        }
      })
      .catch((error) =>
        console.error("Error fetching leaderboard data:", error)
      );
  } else if (window.location.pathname == "/vgp/3081") {
    // argentinia prov
    // Fetch the leaderboard data from the API
    fetch(
      "https://www.speedrun.com/api/v1/leaderboards/nd28p43d/level/ewpg2rkw/5dwvozlk"
    )
      .then((response) => response.json())
      .then((leaderboardData) => {
        const filteredRuns = leaderboardData.data.runs.filter(
          (run) => run.run.values
        );

        // console.log(filteredRuns);

        let j = 1;
        let num = 0;

        if (document.getElementsByClassName("highscore_table__oKrYg")[0]) {
          let timeString = document.getElementsByClassName(
            "highscore_table__oKrYg"
          )[0].childNodes[1].childNodes[0].childNodes[2].innerText;
          let pb =
            parseFloat(timeString.split(":")[0]) * 60 +
            parseFloat(timeString.split(":")[1]);
          let conditionMet = false; // Flag to check if condition is met at least once

          for (let i = 0; i < filteredRuns.length; i++) {
            if (findMS(filteredRuns[i].run.times.primary_t.toString()) <= 2) {
              num = pb - parseFloat(filteredRuns[i].run.times.primary_t + `0`);
            } else {
              num = pb - parseFloat(filteredRuns[i].run.times.primary_t);
            }

            if (
              num <= 0.0 &&
              !document
                .getElementsByClassName("highscore_table__oKrYg")[0]
                .childNodes[1].childNodes[0].childNodes[2].innerText.includes(
                  "(#"
                )
            ) {
              document.getElementsByClassName(
                "highscore_table__oKrYg"
              )[0].childNodes[1].childNodes[0].childNodes[2].innerText +=
                ` (#` + j + `)`;
              conditionMet = true; // Set flag to true if condition is met
            }

            j++;
          }

          // If condition was never met, set j to filteredRuns.length + 1
          if (
            !conditionMet &&
            !document
              .getElementsByClassName("highscore_table__oKrYg")[0]
              .childNodes[1].childNodes[0].childNodes[2].innerText.includes(
                "(#"
              )
          ) {
            j = filteredRuns.length + 1;
            document.getElementsByClassName(
              "highscore_table__oKrYg"
            )[0].childNodes[1].childNodes[0].childNodes[2].innerText +=
              ` (#` + j + `)`;
          }
        }
      })
      .catch((error) =>
        console.error("Error fetching leaderboard data:", error)
      );
  }
}

function mapBg(bool) {
  if (bool) {
    getData("darkMode").then((beans0) => {
      if (beans0) {
        if (document.getElementById(`WATER`)) {
          document.getElementById(`WATER`).style.fill = "none";
        }
        if (document.getElementById(`BACKGROUND`)) {
          document.getElementById(`BACKGROUND`).style.fill = "none";
        }
        if (document.getElementById(`WATER_1_`)) {
          document.getElementById(`WATER_1_`).style.fill = "none";
        }
        if (document.getElementById(`WATER_2_`)) {
          document.getElementById(`WATER_2_`).style.fill = "none";
        }
        if (document.getElementById(`WATER_3_`)) {
          document.getElementById(`WATER_3_`).style.fill = "none";
        }
      }
    });
  } else {
    if (document.getElementById(`WATER`)) {
      document.getElementById(`WATER`).style.fill = "#a4d1dc";
    }
    if (document.getElementById(`BACKGROUND`)) {
      document.getElementById(`BACKGROUND`).style.fill = "#a4d1dc";
    }
    if (document.getElementById(`WATER_1_`)) {
      document.getElementById(`WATER_1_`).style.fill = "#a4d1dc";
    }
    if (document.getElementById(`WATER_2_`)) {
      document.getElementById(`WATER_2_`).style.fill = "#a4d1dc";
    }
    if (document.getElementById(`WATER_3_`)) {
      document.getElementById(`WATER_3_`).style.fill = "#a4d1dc";
    }
  }
}

function ApplyColors() {
  if (document.getElementsByClassName("game-page_gameAreaWrapper__Faj76")[0]) {
    document.getElementsByClassName(
      "game-page_gameAreaWrapper__Faj76"
    )[0].style.boxShadow = "none";
  }

  getData("darkMode").then((isDarkMode) => {
    const settings = document.querySelector(
      ".modal_content__ZijTp:has(.settings-button_settingsModal__069ma)"
    );
    if (settings && isDarkMode) settings.style.background = "rgba(24, 26, 27)";
  });

  if (document.querySelectorAll('div[data-qa="score-modal"]')[0]) {
    getData("darkMode").then((beans0) => {
      if (beans0) {
        const closeImgEndScreen = document.querySelector(
          ".score-modal_closeButton__BQ2GE>img"
        );
        if (closeImgEndScreen) closeImgEndScreen.style.filter = "invert(0)";
        // end screen \/
        document.querySelectorAll(
          'div[data-qa="score-modal"]'
        )[0].style.background = "rgba(24, 26, 27, 0.55)";
        // cursor label \/
        if (document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]) {
          document.getElementsByClassName(
            "game-tooltip_tooltip__w_58_"
          )[0].style.background = "rgba(24, 26, 27, 0.75)";

          var spanElement = document
            .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
            .querySelector("span")
            .querySelector("strong");

          if (spanElement) {
            spanElement.style.color = "white";
            labelColor = false;
          }
        }
      } else {
        const closeImgEndScreen = document.querySelector(
          ".score-modal_closeButton__BQ2GE>img"
        );
        if (closeImgEndScreen) closeImgEndScreen.style.filter = "";
        // end screen \/
        document.querySelectorAll(
          'div[data-qa="score-modal"]'
        )[0].style.background = "rgba(255, 255, 255, 0.55)";
        // cursor label \/
        if (document.getElementsByClassName("game-tooltip_tooltip__w_58_")[0]) {
          document.getElementsByClassName(
            "game-tooltip_tooltip__w_58_"
          )[0].style.background = "rgba(255, 255, 255, 0.75)";

          var spanElement = document
            .getElementsByClassName("game-tooltip_tooltip__w_58_")[0]
            .querySelector("span")
            .querySelector("strong");

          if (spanElement) {
            spanElement.style.color = "black";
            labelColor = false;
          }
        }
      }
    });
  }
}

///  Bools for existance checks.
var unset = true;
var boldNamesOopsie = true;
var labelColor = true;
var src = true;
var toggled = false;
var eventListenersAdded = false;

var refreshRate = 100;

/// setSettings => remFooter => meow
createForm();
setSettings();

setInterval(setSettings, refreshRate);
setInterval(ApplyColors, refreshRate);

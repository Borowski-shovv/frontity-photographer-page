import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const homeHandler = {
  pattern: "/",
  func: ({ state }) => {
    state.source.data["/"].isFrontPage = true;
    state.source.data["/"].isArchive = false;
  }
}

const fotografiaHandler = {
  pattern: "/fotografia/",
  func: ({ state }) => {
    state.source.data["/astrofoto/"].isShovvPage = true;
    state.source.data["/astrofoto/"].isArchive = false;
  }
}

const podlasieHandler = {
  pattern: "/podlasie/",
  func: ({ state }) => {
    state.source.data["/podlasie/"].isPodlasiePage = true;
    state.source.data["/podlasie/"].isArchive = false;
  }
}
const astroHandler = {
  pattern: "/astrofoto/",
  func: ({ state }) => {
    state.source.data["/astrofoto/"].isAstroPage = true;
  }
}
const goryHandler = {
  pattern: "/gory/",
  func: ({ state }) => {
    state.source.data["/gory/"].isGoryPage = true;


  }
}
const wadirumHandler = {
  pattern: "/wadirum/",
  func: ({ state }) => {
    state.source.data["/wadirum/"].isWadirumPage = true;
  }
}

const colaboHandler = {
  pattern: "/wspolpraca/",
  func: ({ state }) => {
    state.source.data["/wspolpraca/"].isColaboPage = true;
  }
}
const timelapseHandler = {
  pattern: "/timelapse/",
  func: ({ state }) => {
    state.source.data["/timelapse/"].isTimelapsePage = true;
  }
}
const commercialHandler = {
  pattern: "/komercyjne/",
  func: ({ state }) => {
    state.source.data["/komercyjne/"].isCommercialPage = true;
  }
}
const goPodlasieHandler = {
  pattern: "/go-podlasie/",
  func: ({ state }) => {
    state.source.data["/go-podlasie/"].isGoPodlasiePage = true;
  }
}

const contactHandler = {
  pattern: "/kontakt/",
  func: ({ state }) => {
    state.source.data["/kontakt/"].isContactPage = true;
  }
}

const privacyPolicyHandler = {
  pattern: "/polityka-prywatnosci/",
  func: ({ state }) => {
    state.source.data["/polityka-prywatnosci/"].isPolitykaPage = true;
  }
}


const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    actions: {

    },
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      init: ({ libraries }) => {
        // Use html2react to process the <img> tags inside the content HTML.
        libraries.html2react.processors.push(image);

        // Add the handler to wp-source.
        libraries.source.handlers.push(homeHandler);
        libraries.source.handlers.push(fotografiaHandler);
        libraries.source.handlers.push(podlasieHandler);
        libraries.source.handlers.push(astroHandler);
        libraries.source.handlers.push(goryHandler);
        libraries.source.handlers.push(wadirumHandler);
        libraries.source.handlers.push(colaboHandler);
        libraries.source.handlers.push(timelapseHandler);
        libraries.source.handlers.push(commercialHandler);
        libraries.source.handlers.push(goPodlasieHandler);
        libraries.source.handlers.push(contactHandler);
        libraries.source.handlers.push(privacyPolicyHandler);
      },
      
      beforeSSR: async ({actions}) => {
         await actions.source.fetch("/contact");
        }
      },
    },
    
    libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};


export default marsTheme;

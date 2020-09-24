import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    obtenhaConfig();
  }, []);

  function obtenhaConfig() {
    (function(_, m) {
      var cssChanges =
        ".km-carousel-card-title-wrapper {   display: flex;  justify-content: center;} .km-carousel-card-header-without-img{height: 0.15em} .km-carousel-card-header-with-img {height:25em} .km-carousel-card-img{height: 100%} ";

      var kommunicateSettings = {
        appId: "d118248f66cc6c4efa1c9523ce51e4fc",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
        onInit: function() {
          Kommunicate.customizeWidgetCss(cssChanges);
        },
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  return <div></div>;
};

Chatbot.schema = {
  title: "editor.chatbot.title",
  description: "editor.chatbot.description",
  type: "object",
  properties: {},
};

export default Chatbot;

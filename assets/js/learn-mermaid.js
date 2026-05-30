/**
 * Organic Mermaid theme for learn pages.
 * Requires mermaid@11 (CDN) loaded before this script.
 * Colors mirror styles/_tokens.scss — keep in sync when tokens change.
 *
 * Optional classDefs for diagrams (paste after flowchart edges):
 *   classDef learnStep fill:#FEFEFA,stroke:#5D7052,stroke-width:2px,color:#2C2C24
 *   classDef learnHandoff fill:#E6DCCD,stroke:#C18C5D,stroke-width:2px,color:#4A4A40
 */
(function () {
  if (typeof mermaid === "undefined") {
    return;
  }

  if (!document.querySelector(".mermaid")) {
    return;
  }

  const colors = {
    background: "#FDFCF8",
    foreground: "#2C2C24",
    primary: "#5D7052",
    secondary: "#C18C5D",
    accent: "#E6DCCD",
    accentForeground: "#4A4A40",
    muted: "#F0EBE5",
    mutedForeground: "#78786C",
    border: "#DED8CF",
    card: "#FEFEFA",
  };

  mermaid.initialize({
    startOnLoad: true,
    securityLevel: "loose",
    look: "handDrawn",
    theme: "base",
    themeVariables: {
      fontFamily: "Nunito, system-ui, sans-serif",
      fontSize: "14px",
      primaryColor: colors.card,
      primaryTextColor: colors.foreground,
      primaryBorderColor: colors.primary,
      secondaryColor: colors.accent,
      secondaryTextColor: colors.accentForeground,
      secondaryBorderColor: colors.secondary,
      tertiaryColor: colors.muted,
      tertiaryTextColor: colors.foreground,
      tertiaryBorderColor: colors.border,
      lineColor: colors.primary,
      arrowheadColor: colors.primary,
      defaultLinkColor: colors.primary,
      edgeLabelBackground: colors.background,
      nodeTextColor: colors.foreground,
      mainBkg: colors.card,
      textColor: colors.foreground,
      titleColor: colors.foreground,
    },
    flowchart: {
      curve: "basis",
      padding: 24,
      htmlLabels: true,
      nodeSpacing: 28,
      rankSpacing: 40,
      diagramPadding: 12,
    },
    themeCSS: `
      .node rect, .node circle, .node ellipse, .node polygon {
        filter: drop-shadow(0 4px 12px rgba(93, 112, 82, 0.12));
      }
      .edgePath path {
        stroke-width: 2px;
      }
      .edgeLabel {
        background-color: ${colors.background} !important;
        color: ${colors.mutedForeground} !important;
        font-family: Nunito, system-ui, sans-serif;
      }
      .label, .nodeLabel {
        font-family: Nunito, system-ui, sans-serif !important;
        font-weight: 600;
      }
    `,
  });
})();

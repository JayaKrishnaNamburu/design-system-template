import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, DefaultTheme } from "../src/theme";

import { ExpandableCard } from "../src";

storiesOf("Expandable Card Default Theme", module)
  .add("Regular", () => (
    <ThemeProvider theme={DefaultTheme}>
      <ExpandableCard heading="Heading for the Expandable Card">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ExpandableCard>
    </ThemeProvider>
  ))
  .add("Flat Card", () => (
    <ThemeProvider theme={DefaultTheme}>
      <ExpandableCard heading="Heading for the Expandable Card" flatCard>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ExpandableCard>
    </ThemeProvider>
  ));
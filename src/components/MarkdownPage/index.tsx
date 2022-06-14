import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import { Page } from "../Page";

export const MarkdownPage = ({ location }: { location: string }) => {
  const [postMarkdown, setPostMarkdown] = useState("");

  // useEffect with an empty dependency array (`[]`) runs only once
  useEffect(() => {
    fetch(location)
      .then((response) => response.text())
      .then((text) => {
        // Logs a string of Markdown content.
        // Now you could use e.g. <rexxars/react-markdown> to render it.
        // console.log(text);
        setPostMarkdown(text);
      });
  }, [location]);

  return postMarkdown ? (
    <>
      <Page>
        <Markdown>{postMarkdown}</Markdown>
      </Page>
    </>
  ) : (
    <></>
  );
};

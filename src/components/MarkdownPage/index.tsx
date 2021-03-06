import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import { Page } from "../Page";
import { useT86Title } from "../../hooks/useT86Title";

export const MarkdownPage = ({
  location,
  title,
}: {
  location: string;
  title: string;
}) => {
  useT86Title(title);
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

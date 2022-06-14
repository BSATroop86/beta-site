import { Page } from "../../components/Page";
import { useT86Title } from "../../hooks/useT86Title";

export const HomePage = () => {
  useT86Title("Home");
  return (
    <Page>
      <div> Sup</div>
    </Page>
  );
};

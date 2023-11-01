import Banner from "../components/banner";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeNewFly from "../components/rodape-newfly";

export default function Home() {
  return (
    <>
      <Menu />
      <a id="banner"></a>
      <Banner />
      <Rodape />
      <Whats />
      <RodapeNewFly />
    </>
  );
}

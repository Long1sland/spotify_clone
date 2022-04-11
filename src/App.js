import Main from "./Components/Main/main";
import SideBar from "./Components/SideBar/sidebar";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import { GlobalStyle } from "./GlobalStyles";
import { Wrapper } from "./Wrapper.styles";
import { useState } from "react";

function App() {
  const [currentTrackLocation, setCurrentTrackLocation] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Wrapper>
        <SideBar></SideBar>
        <Header></Header>

        <Main
          setCurrentTrackLocation={setCurrentTrackLocation}
          setIsPlaying={setIsPlaying}
          currentTrackLocation={currentTrackLocation}
          isPlaying={isPlaying}
        ></Main>

        <Footer
          currentTrackLocation={currentTrackLocation}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        ></Footer>
        <GlobalStyle></GlobalStyle>
      </Wrapper>
    </>
  );
}

export default App;

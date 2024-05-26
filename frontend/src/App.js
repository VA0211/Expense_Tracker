import styled from "styled-components";
import bg from './img/bg.jpg'
import { MainLayout } from "./styles/Layouts";
import Navigation from "./Components/Navigation/Navigation";
import { useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Incomes/Income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const[active, setActive] = useState(1)

  const global =  useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Income />
      case 3:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }
  
  return (
    <AppStyled bg={bg} className="App">
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image:  url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(200, 246, 255, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  };
`;

const Content = styled.div`
  transform: scale(0.88); /* Scale down the content */
`;

export default App;

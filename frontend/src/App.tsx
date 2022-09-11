
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Header from "./componentes/Header"
import SalesCard from "./componentes/SalesCard/idex"


function App() {
  return(
     <>
      <ToastContainer/>
      <Header />
      <main>
        <section id="sales">
            <div className="DsMeta-Container">
              <SalesCard/>

            </div>
          </section>
      </main>
      </>
  )
}

export default App

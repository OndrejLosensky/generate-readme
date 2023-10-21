import CreateReadme from "./components/createReadme/CreateReadme";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";

function App() {

  return (
    <section className='bg-darkBg w-full h-full'>
        <Hero/>
        {/*<CreateReadme/>*/}
        <Footer/>
    </section>
  );
}

export default App;
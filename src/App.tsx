import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Sidebar />
            {/* ROUTER GOES HERE */}
            <Footer />
        </div>
    );
};

export default App;

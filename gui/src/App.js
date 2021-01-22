import './App.css';
import './style.css';
import Table from "./components/Table";

function App() {
    return (
        <div className="App">
            <p>My Token = {window.token}</p>
            <Table/>
        </div>
    );
}

export default App;

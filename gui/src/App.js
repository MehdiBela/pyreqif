import './App.css';
import './style.css';
import Table from "./components/table/Table";
import Form from "./components/form/Form";
import Header from "./components/Header";


function App() {
    return (
        <div className="App">
            <Header/>
            <Form/>
            <br/>
            <Table/>
        </div>
    );
}

export default App;

import './App.css';
import './style.css';
import Table from "./components/table/Table";
import Form from "./components/form/Form";

function App() {
    // store the name and the file data
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    return (
        <div className="App">
            <Form/>
            <br/>
            <Table/>
        </div>
    );
}

export default App;

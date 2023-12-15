import './App.css';
import {Header} from './layout/header/Header'
import {Main} from "./layout/section/main/Main";
import {Skills} from "./layout/section/skills/Skills";
import {Works} from "./layout/section/works/Works";
import {Testimony} from "./layout/section/testimony/Testimony";
import {Contact} from "./layout/section/contacts/Contact";
import {Slogan} from "./layout/section/slogan/Slogan";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
        </div>
    );
}

export default App;

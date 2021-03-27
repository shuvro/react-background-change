import logo from './logo.svg';
import './App.css';
import backgrounds from "./backgrounds";
import React, {useState} from "react";
import path from 'path';

function App() {
    const [selectedValue, setSelectedValue] = useState('/yeti-village.jpg');
    const selectBackground = (value) => {
        setSelectedValue(value);
    };
    const imageExt = ['.jpg', '.png', '.jpeg'];
    const videoExt = ['.mp4'];
    return (
        <div className="App-header" key={'parent'}>
            {imageExt.includes(path.extname(selectedValue)) && <img src={selectedValue} alt="image"/>}
            {videoExt.includes(path.extname(selectedValue)) &&
            <video width="320" height="240" controls muted autoPlay loop>
                <source src={selectedValue} type="video/mp4"/>
            </video>
            }
            <select value={selectedValue} name="select-bg" id="select-bg"
                    onChange={e => selectBackground(e.target.value)}>
                {backgrounds.length && backgrounds.map((bg, index) => {
                    return <option value={'/' + bg.name + '.' + bg.type} key={index}>
                        {bg.name} {' | '} {bg.type}
                    </option>
                })}
            </select>
        </div>
    );
}

export default App;

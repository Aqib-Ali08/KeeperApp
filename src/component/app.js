import React from "react";
import Footer from "./footer";
import Header from "./header";
import Note from "./note";
import notes from "../notes"



function App() {
    return (<div>
        <Header />
        {notes.map(props => (
            <Note title={props.title}
                content={props.content} />
        )
        )}
        <Footer />
    </div>)
}
export default App;
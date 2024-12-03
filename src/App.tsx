import React from 'react';
import Contact from "./components/Contact";

function App() {
    const contactItems = [
        {
            id: 1,
            name: "Bryan Curry",
            phone: "082235436577"
        },
        {
            id: 2,
            name: "Steve Cox",
            phone: "081546978608"
        },
        {
            id: 3,
            name: "Mark Alexander",
            phone: "085876980707"
        }
    ]
    return (
        <div>
            {contactItems.map((item, index) => (
                <Contact name={item.name} phone={item.phone} key={index} />
            ))}
        </div>
    );
}

export default App;

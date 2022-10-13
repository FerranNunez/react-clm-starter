import React, {useState} from 'react';

const PopupContext = React.createContext(null);

export default function PopupProvider({ children }) {
    const [ currentPopup, showPopup ] = useState(null);

    return (
        <PopupContext.Provider value={{ currentPopup, showPopup }}>
            { children }
        </PopupContext.Provider>
    );
}

function withPopup(Component) {
    return (props) => {
        return (
            <PopupContext.Consumer>
                { ({ currentPopup, showPopup }) => (
                    <Component currentPopup={currentPopup} showPopup={showPopup} { ...props } />
                )}
            </PopupContext.Consumer>
        );
    }
}

export { withPopup };
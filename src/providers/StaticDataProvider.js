import React from 'react';

const DataContext = React.createContext(null);

export default function StaticDataProvider({ data, children }) {
    return (
        <DataContext.Provider value={{...data}}>
            { children }
        </DataContext.Provider>
    );
}

function withData(Component) {
    return (props) => {
        return (
            <DataContext.Consumer>
                { data => (
                    <Component data={data} { ...props } />
                )}
            </DataContext.Consumer>
        );
    }
}

export { withData };
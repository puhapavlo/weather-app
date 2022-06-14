import React from 'react';

const Loader = ({ isLoading }) => {
    if (!isLoading) {
       return null;
    }

    return (
        <div>
            <h1>Loading data...</h1>
        </div>
    );
};

export default Loader;
import React from 'react';

const Confirm = () => {
    return (
        <React.Fragment>
            <h2>Confirm Email</h2>
            <form>
            <div>
                <label>Code</label>
                <input type="texts" />
            </div>
            <div>
                <button>Confirm</button>
            </div>
            </form>
        </React.Fragment>
    );
};

export default Confirm;
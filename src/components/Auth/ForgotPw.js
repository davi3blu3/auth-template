import React from 'react';

const ForgotPw = () => {
    return (
        <React.Fragment>
        <h2>Forgot Password?</h2>
            <form>
            <div>
                <label>Email</label>
                <input type="email" />
            </div>
            <div>
                <button>Retrieve</button>
            </div>
            </form>
        </React.Fragment>
    );
};

export default ForgotPw;
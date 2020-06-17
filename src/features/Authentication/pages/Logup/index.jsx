import React from 'react';
import PropTypes from 'prop-types';
import LogupForm from 'features/Authentication/components/LogupForm';


Logup.propTypes = {
    
};

function Logup(props) {
    return (
        <div className="logup">
          <div className="logup_form">
            <LogupForm
            //   initialValues={initialValues}
            //   onSubmit={handleSubmit}
            //   isAddMode = {isAddMode}
            />
          </div>
        </div>
    );
}

export default Logup;
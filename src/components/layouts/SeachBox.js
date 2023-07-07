import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { searchLogs } from '../../actions/logActions';


const SeachBox = ({ searchLogs, logs }) => {

    const text = useRef('');

    const onChange = e => {
        searchLogs(text.current.value);
    }
    return (
        <nav style={{ marginBottom: "30px", cursor: "pointer" }} className="blue">
            <div class="nav-wrapper">
                <form>
                    <div class="input-field">
                        <input ref={text} onChange={onChange} placeholder='search logs...' id="search" type="search" />
                        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                        <i class="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}



export default connect(null, { searchLogs })(SeachBox);

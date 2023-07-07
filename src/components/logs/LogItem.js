import React from 'react';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions';
import PropTypes from 'prop-types'

import M from 'materialize-css/dist/js/materialize.min.js';
import Moment from 'react-moment';

const LogItem = ({ log, deleteLog, setCurrent }) => {

    //onDelete method
    const onDelete = () => {
        deleteLog(log.id)

        M.toast({ html: `Log NO:${log.id} Deleted by ${log.tech}` })
    }

    return (
        <li className="collection-item avatar">
            <i className="material-icons circle">folder</i>
            <a
                href="#edit-log-modal"
                className={`modal-trigger ${
                    log.attention ? 'red-text' : 'blue-text'
                    }`}
                onClick={() => setCurrent(log)}
            >
                {log.message}
            </a>
            <br />
            <span className="grey-text">
                <span className="black-text">
                    ID #{log.id}{' '}
                </span>last updated by {' '}
                <span className="black-text">
                    {log.tech}
                </span> {' '} on {' '}
                <Moment format='MMMM Do YYYY, h:mm:ss a'></Moment>
            </span>

            <a href="#!" className="secondary-content" onClick={onDelete}><i className="material-icons">delete</i></a>
        </li>
    )
}
LogItem.propTypes = {
    deleteLog: PropTypes.func.isRequired,
    log: PropTypes.array.isRequired,
    setCurrent: PropTypes.func.isRequired
}

export default connect(null, { deleteLog, setCurrent })(LogItem);

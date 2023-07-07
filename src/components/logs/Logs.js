import React, { useEffect } from 'react'
import LogItem from './LogItem';
import Preloader from '../layouts/Preloader';
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logActions';

import { connect } from 'react-redux';

const Logs = ({ logs: { logs, loading }, getLogs }) => {

    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, [])

    if (loading || logs === null) { return <Preloader /> }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">All System Logs</h4>
            </li>

            {!loading && logs.length === 0 ? (
                <p className="center">
                    No Logs to Show...
                </p>
            ) : (
                    logs.map(log =>
                        <LogItem key={log.id} log={log} />)
                )}
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    logs: state.log
})
export default connect(
    mapStateToProps,
    { getLogs }
)(Logs);

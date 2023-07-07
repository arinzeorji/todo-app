import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions';
import { getTechs } from '../../actions/techActions';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';
import TechSelectOptions from '../techs/TechSelectOptions';

const AddLogModal = ({ addLog, getTechs, tech: { techs, loading } }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        getTechs();
    })

    const onSubmit = () => {
        if (message === '') {
            M.toast({ html: 'Couldnt Save, No Message and/or Technician' })
        } else {
            const log = {
                message,
                tech,
                attention,
                date: new Date()
            }

            addLog(log);

            M.toast({ html: `New Log Added by ${tech}` })
            console.log(message, tech, attention);

            //Clear fields
            setMessage('');
            setAttention(false);
            setTech('');

        }
    }
    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type='text'
                            name='message'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <label htmlFor="message">Log Message</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech}
                            classname='browser-default'
                            onChange={e => setTech(e.target.value)}
                        >
                            <option value="" >Select Technician</option>
                            {
                                !loading && techs !== null && techs.map(tec => (
                                    <option key={tec.id}> {tec.firstname}</option>
                                ))
                            }

                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!"
                    onClick={onSubmit}
                    className="modal-close waves-effect blue waves-light btn"> Enter </a>
            </div>
        </div>
    )
}
AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired,
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

const mapStateToProps = state => ({
    tech: state.tech
})
export default connect(mapStateToProps, { addLog, getTechs })(AddLogModal);
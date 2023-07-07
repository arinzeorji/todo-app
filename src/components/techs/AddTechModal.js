import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTechs } from '../../actions/techActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTechs }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [role, setRole] = useState('');

    const onSubmit = () => {
        if (firstname === '' || lastname === '', role === '') {
            M.toast({ html: 'Couldnt Save Log Without a fastname and/or a lastname' })
        } else {

            const techs = {
                firstname,
                lastname,
                role
            }


            addTechs(techs);
            M.toast({ html: `New Technician Added` });

            setFirstname('');
            setLastname('');
            setRole('');
        }
    }
    return (
        <div id='add-tech-modal' className='modal'>
            <div className="modal-content">
                <h4>Add New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type='text'
                            name='firstname'
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)}
                        />
                        <label htmlFor="firstname">Technician Firstname</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input
                            type='text'
                            name='lastname'
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                        />
                        <label htmlFor="lastname">Technician Lastname</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input
                            type='text'
                            name='role'
                            value={role}
                            onChange={e => setRole(e.target.value)}
                        />
                        <label htmlFor="lastname">Technician Role</label>
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!"
                    onClick={onSubmit}
                    className="modal-close waves-effect blue waves-light btn"> Add Technician </a>
            </div>
        </div>
    )
}

AddTechModal.propTypes = {
    addTechs: PropTypes.func.isRequired
}

export default connect(null, { addTechs })(AddTechModal);

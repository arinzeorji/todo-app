import React from 'react';
import { deleteTech } from '../../actions/techActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, deleteTech }) => {

    const removeTech = () => {
        deleteTech(tech.id);
        M.toast({ html: `Technician ${tech.firstname} Deleted by ${tech.lastname}` })
    }

    return (
        <li className="collection-item">
            {tech.firstname}{' '}{tech.lastname}
            <a onClick={removeTech} href="#!" className="secondary-content"><i className="material-icons">delete</i></a>

        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired
}

export default connect(null, { deleteTech })(TechItem);

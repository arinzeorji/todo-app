import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);

    return (
        !loading && techs !== null &&
        techs.map(tec => (
            <option key={tec.id} value={`${tec.firstname} ${tec.lastname}`}>
                {tec.firstname} {tec.lastname}
            </option>
        ))
    );
};

TechSelectOptions.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tech: state.tech
})
export default connect(mapStateToProps, { getTechs })(TechSelectOptions);

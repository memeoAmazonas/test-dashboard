import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {photoshootsDaily} from '../actions';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 1,
            offset: 0,
            list: [],
            detail: {}
        };
        this.props.photoshootsDaily(1);
        this.setState({list: this.props.photoshootsDaily(this.state.limit, this.state.offset)});
        this.setState({detail: this.props.photoshootsDaily(1)});
    }

    render() {
        console.log(this.state);
        return (
            <div>
            </div>
        );
    }
}

Home.propTypes = {
    photoshootsDaily: PropTypes.func,
    shotsDailyList: PropTypes.any,
    shotsDailyListError: PropTypes.object,
    shotsDailyListLoading: PropTypes.bool,

    shotsDailyDetail: PropTypes.object,
    shotsDailyDetailError: PropTypes.object,
    shotsDailyDetailLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
    shotsDailyList: state.photoshootsDaily.shotsDailyList,
    shotsDailyListError: state.photoshootsDaily.shotsDailyListError,
    shotsDailyListLoading: state.photoshootsDaily.shotsDailyListLoading,

    shotsDailyDetail: state.photoshootsDaily.shotsDailyDetail,
    shotsDailyDetailError: state.photoshootsDaily.shotsDailyDetailError,
    shotsDailyDetailLoading: state.photoshootsDaily.shotsDailyDetailLoading,
});
const mapDispatchToProps = {
    photoshootsDaily
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);


import React from 'react';
import {css} from '@emotion/core';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Table from '../components/table';
import Loading from '../components/loading';
import {photoshootsDaily} from '../actions';
import {headerPhoto, headerUSer} from '../utils/data';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            limit: 3500,
            offset: 0,
            list: [],
            detail: {}
        };
    }

    componentDidMount() {
        this.props.photoshootsDaily(this.state.limit, this.state.offset);
    }

    render() {
        const data = this.props.shotsDailyList !== [] ? this.props.shotsDailyList : [];
        if (this.props.shotsDailyListLoading) {
            return (<Loading/>);
        } else {
            return (
                <div className="container">
                    <Table columns={headerPhoto} data={data.list}>
                    </Table>
                    <hr/>
                    <Table columns={headerUSer} data={data.userData}>
                    </Table>
                </div>
            );

        }
    }
}

Home.propTypes = {
    photoshootsDaily: PropTypes.func,
    photoshootsDetails: PropTypes.func,
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
    photoshootsDaily,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);


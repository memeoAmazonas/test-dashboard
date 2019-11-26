import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import {ClipLoader} from 'react-spinners';
import { PulseLoader } from 'halogenium';
import ClipLoader from 'react-spinners/ClipLoader';

import Table from '../components/table';
import TableUser from '../components/tableUsers';
import { dayOfWeek, column } from '../utils/data';
import { photoshootsDaily, photoshootsDetails } from '../actions';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            limit: 3000,
            offset: 0,
            list: [],
            detail: {}
        };
        this.setData = this.setData.bind(this);
    }

    componentDidMount() {
        this.props.photoshootsDaily(this.state.limit, this.state.offset);
    }

    setData() {

        return this.props.shotsDailyList !== [] ? this.props.shotsDailyList.filter(item => item.day_of_the_week === 'FRIDAY') : [];
    }

    render() {
        const data = this.props.shotsDailyList !== [] ? this.props.shotsDailyList : [];
        if (this.props.shotsDailyListLoading) {
            return (<div className='sweet-loading'>
                <PulseLoader color="#26A65B" size="16px" margin="4px" />
            </div>)
        } else {
            return (<div>
                <Table columns={dayOfWeek} data={data.list}>
                </Table>
                <Table columns={dayOfWeek} data={data.userData}>
                </Table>
            </div>)

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
    photoshootsDetails
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);


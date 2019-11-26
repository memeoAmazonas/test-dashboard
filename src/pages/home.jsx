import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { photoshootsDaily } from '../actions';
import Table from '../components/table';
import { dayOfWeek, column, colum } from '../utils/data';
class Home extends React.Component {

 constructor(props) {
        super(props);
        this.state = {
            limit: 100,
            offset: 0,
            list: [],
            detail: {}
        };
        this.setData = this.setData.bind(this);
    }

    componentDidMount(){
        this.props.photoshootsDaily(this.state.limit, this.state.offset);
    }
     setData(){
         this.props.shotsDailyList !== [] ? this.props.shotsDailyList.filter(item => item.type === colum[0] ) : [];
     } 
    render() {
        return (
            <div>
                <Table columns={dayOfWeek}></Table>

                <hr />
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


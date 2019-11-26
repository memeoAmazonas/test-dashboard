import React from 'react';
import {css} from '@emotion/core';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {ClipLoader} from 'react-spinners';
 import ClipLoader from 'react-spinners/ClipLoader';

import Table from '../components/table';
import {photoshootsDaily} from '../actions';
import {dayOfWeek, column} from '../utils/data';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            limit: 20,
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

        return this.props.shotsDailyList !== [] ? this.props.shotsDailyList.filter(item=> item.day_of_the_week === 'FRIDAY') : [];
    }

    render() {
        console.log(this.setData());
        return (
            <div>
                {this.props.shotsDailyList !== [] ?
                    <Table columns={dayOfWeek}>

                    </Table> :
                    <div className='sweet-loading'>
                        <ClipLoader
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            loading={this.props.shotsDailyList !== []}
                        />
                    </div>
                }
                <hr/>
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


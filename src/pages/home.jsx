import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPhotoList, getPhotoListDetail, getPhotoById} from '../actions';

class Home extends React.Component {
    componentWillMount() {
        this.props.getPhotoList(this.state.limit, this.state.offset);
        this.props.getPhotoListDetail(this.state.limit, this.state.offset);
        this.props.getPhotoById(this.state.limit);
    }

    constructor(props) {
        super(props);
        this.state = {
            limit: 1,
            offset: 0
        };
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

Home.propTypes = {
    getPhotoList: PropTypes.func,
    getPhotoListDetail: PropTypes.func,
    getPhotoById: PropTypes.func,
    photo: PropTypes.object,
    photoList: PropTypes.array,
    loading: PropTypes.bool,
};

const mapStateToProps = state => ({
    loading: state.photoshotDaily.loading,
    photo: state.photoshotDaily.photo,
    photoList: state.photoshotDaily.photoList,
    photoListDetail: state.photoshotDaily.photoListDetail,
    photoDetail: state.photoshotDaily.photoListDetail,
});
const mapDispatchToProps = {
    getPhotoList,
    getPhotoListDetail,
    getPhotoById
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);


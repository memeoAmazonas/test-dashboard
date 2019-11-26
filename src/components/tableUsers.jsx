import React from 'react'
import PropTypes from 'prop-types';

class TableUsers extends React.PureComponent {
    render() {
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            {
                                this.props.columns.map(item => {
                                    return <th key={item}>{item}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map(item => {
                                return (
                                    <tr key={item}>
                                        <td scope="row">{item.name}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}
TableUsers.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.object,
};

export default TableUsers;
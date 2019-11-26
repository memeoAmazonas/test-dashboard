import React from 'react'
import PropTypes from 'prop-types';

class Table extends React.PureComponent {

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
                </table>
            </div>
        )
    }

}
Table.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.object,
};

export default Table;

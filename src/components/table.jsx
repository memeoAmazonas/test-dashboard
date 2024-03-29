import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            init: 0,
            end: 10,
        };
    }

    render() {
        return (
            <div className="container">
                <div className="table-responsive ">
                    <table className="table table-dark">
                        <thead className="thead-dark">
                        <tr>
                            {
                                this.props.columns.map(item => {
                                    return <th key={item}>{item}</th>;
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.data.slice(this.state.init, this.state.end).map(item => {
                                return (
                                    <tr key={item.name}>
                                        <td scope="row">{item.name}</td>
                                        <td>{item.day.monday !== 0 ? item.day.monday : "-"}</td>
                                        <td>{item.day.tuesday !== 0 ? item.day.tuesday : "-"}</td>
                                        <td>{item.day.wednesday !== 0 ? item.day.wednesday : "-"}</td>
                                        <td>{item.day.thursday !== 0 ? item.day.thursday : "-"}</td>
                                        <td>{item.day.friday !== 0 ? item.day.friday : "-"}</td>
                                        <td>{item.day.saturday !== 0 ? item.day.saturday : "-"}</td>
                                        <td>{item.day.sunday !== 0 ? item.day.sunday : "-"}</td>
                                    </tr>
                                );
                            })
                        }

                        </tbody>
                    </table>
                    {this.props.data.length > 10 &&
                    <div style={{display: 'flex', justifyItems: 'center'}}>
                        <button onClick={() => {
                            this.setState({init: this.state.init - 10, end: this.state.end-10})
                        }} className="btn btn-primary" style={{marginRight: '10px'}} disabled={this.state.init <= 0}>up
                        </button>
                        <button onClick={() => {
                            this.setState({init: this.state.init + 10, end: this.state.end+10 });
                        }} className="btn btn-primary" disabled={this.state.end >= this.props.data.length}> down
                        </button>
                    </div>
                    }
                </div>
            </div>
        );
    }

}

Table.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
};

export default Table;

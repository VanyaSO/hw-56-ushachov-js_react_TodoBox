import React from 'react'

class TodoItem extends React.Component{
    render() {
        const { item, onRemove } = this.props;
        return(
            <div>
                <div className="row">
                    <div className="col-auto">
                        <button onClick={onRemove(item.id)} id={item.id} type="button" className="btn btn-primary btn-sm">-</button>
                    </div>
                    <div className="col">{item.value}</div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default TodoItem;

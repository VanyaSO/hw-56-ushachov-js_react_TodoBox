import React from 'react'

const TodoItem = props => {
    const {item, onRemove} = props
    const removeItem = onRemove(item.id)

    return(
        <div>
            <div className="row">
                <div className="col-auto">
                    <button onClick={removeItem}
                            id={item.id}
                            type="button"
                            className="btn btn-primary btn-sm"
                    >-</button>
                </div>
                <div className="col">{item.value}</div>
            </div>
            <hr/>
        </div>
    )
}

export default TodoItem;

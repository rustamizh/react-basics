import React from 'react';
import PropTypes from 'prop-types';
 
function Stats(props) {
    let total = props.todos.length;
    let done = props.todos.filter(todo => todo.completed).length;
    let undone = total - done;

        return  (
            <table className="stats">
                <tbody>
                    <tr>
                        <th>Всего задач</th>
                        <td>{total}</td>
                    </tr>
                    <tr>
                        <th>Выполнено</th>
                        <td>{done}</td>
                    </tr>
                    <tr>
                        <th>Осталось</th>
                        <td>{undone}</td>
                    </tr>
                </tbody>
            </table>
        );
}

Stats.propTypes = {
    todos: PropTypes.array.isRequired 
};

export default Stats;
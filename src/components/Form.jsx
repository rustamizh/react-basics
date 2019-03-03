import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}; 
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        let title = this.refs.title.value;

        if(title) {
            this.props.onAdd(title);
            this.refs.title.value = "";
            this.refs.title.blur();
        }
    }

    render() {
        return (
        <form action="" className="todo-form" onSubmit={this.handleSubmit}>
            <input type="text" ref="title" placeholder="Что нужно сделать?"/>
            <Button type="submit">Добавить</Button>
        </form>
        )
    }
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default Form;
import {Component} from 'react';
import './style.css';
import {TodoList} from './todolist';

export class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(!this.state.text.length) {
            return;
        }
        const newItem = {
            id: Date.now(),
            text: this.state.text,
        }
        this.setState(prev => ({
            items: prev.items.concat(newItem),
            text: ''
        }));
    }
}




// ========================================

// ReactDOM.render(
//     <Todo />,
//     document.getElementById('root')
// );

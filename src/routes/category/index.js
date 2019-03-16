import { h, Component } from 'preact';
import style from './style';
import { connect } from 'preact-redux';
import reduce from '../../store/reducers';
import * as actions from '../../store/actions';

@connect(reduce, actions)
export default class Category extends Component {
	state = {
		time: Date.now(),
		count: 10
	};

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};


	// gets called when this route is navigated to
	componentDidMount() {

		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUpdate() {
		console.log('dede');
		console.log(this.props);
		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ cat }, { time, count }) {
		return (
			<div class={style.profile}>
				<h1>Category: {cat}</h1>
				<p>This is the user Category for a user named {cat}.</p>

				<div>Current time: {new Date(time).toLocaleString()}</div>

				<p>
					<button onClick={this.increment}>Click Me</button>
					{' '}
					Clicked {count} times.
				</p>
			</div>
		);
	}
}

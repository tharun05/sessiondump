var GreeterForm = React.createClass({

	onFormSubmit:function(e){
		e.preventDefault();
		var name = this.refs.animal.value;
		if(name.length >0){
			this.refs.animal.value = '';
			this.props.onNewName(name)

		}
	},
	render:function(){
		return (
			<form action="" onSubmit={this.onFormSubmit}>
			<input type="text" ref="animal"/>
			<input type="submit" name="" id="" value="set animal name"/>
		</form>
		)
	}
})

var GreeterMessage = React.createClass({
	render:function(){
		var name = this.props.name;
		return (
			<div>
				<div>hello {name}</div>
				<p>this is from message component</p>
			</div>
		)
	}
})


var Greeter = React.createClass({
	
	getDefaultProps:function(){
		return{
			name:'reactesh',
			message:'this is degault message'
		}
	},

	getInitialState:function(){
		return {
			name:this.props.name
		}
	},
	handleNewName:function(name){
		this.setState({
			name:name
		});
	},
	render:function(){
		var name = this.state.name;
		var message = this.props.message;

		return (
			<div>
			<GreeterMessage name={name}/>
			<GreeterForm onNewName={this.handleNewName}/>
			</div>
		);
	}
});

var name = 'tharunesh'
ReactDOM.render(
		<Greeter name={name} />,
		document.getElementById('app')
	);
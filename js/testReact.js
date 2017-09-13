//render的第二个参数必须使用原生的getElementById方法，不能使用JQuery来选取DOM节点
//React.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点
React.render(
	<h1>Hello,World!</h1>,
	document.getElementById('container');
);


// JSX  --  HTML和JavaScript的混写

var names = ['Jack','Tom','Alice'];

	React.render(
		<div>
		{
			names.map(function(name){
				return <div>Hello,{name}!</div>
			});
		}
		</div>,
		document.getElementById('container')
	);

//直接在模板插入JS变量，该变量若为一个数组，则自动展开该数组的所有成员
var arr = [<h1>Hello world!</h1>,<h1>React is perfect!</h1>];
React.render(
	<div>{arr}</div>,
	document.getElementById('container')
);

//组件
var Greet = React.createClass({
	render:function(){
		return <h1>Hello {this.props.name}</h1>
	}	
});

React.render(
	<Greet name="Jack" />,
	document.getElementById('container');
);

//组件-->状态机

var InputState = React.createClass({
	//在组件初始化的时候执行
	getInitialState:function(){
		return {enable:false};
	},
	handleClick:function(event){
		this.setState({!this.state.enable});
	},
	render:function(){

		return (
			<p>
				<input type="text" disabled={this.state.enable} />
				<button onClick={this.handleClick}>Change State</button>
			</p>
			);
	}
});

React.render(
	<InputState />,
	document.getElementById('container')
);

//组件的生命周期

3个状态
Mounting: 已插入真是的DOM
Updating: 正在被重新渲染
Unmounting: 已移出真实DOM

3个状态对应5种处理函数（will函数为进入某状态前，did为进入某状态后）
* componentWillMount()
* componentDidMount()

* componentWillUpdate()
* componentDidUpdate()

* componentWillUnmount()

-- 特殊状态的处理函数
* componentWillReceiveProps(object netProps):已加载组件收到新的参数时调用
* shouldComponentUpdate(object nextProps,object nextState):组件判断是否重新渲染时调用

eg：
var Hello = React.createClass({
	getInitialState:function(){
		return{
			opacity:1.0
		};
	},

	componentDidMount:function(){
		this.timer = setInterval(function(){
			var opacity = this.state.opacity;
			opacity -= .05;
			if (opacity < 0.1) {
              opacity = 1.0;
            }
            this.setState({
            	opacity:opacity;
            });
		}.bind(this),100);
	},

	render:function(){
		return {
			<div style={{opacity:this.state.opacity}}>
				Hello {this.props.name}
			</div>
		};
	}
});

React.render(
	<Hello name="world" />,
	document.body
);

-- 组件嵌套

var TodoList = React.createClass({
	render:function(){
		var createItem = function(itemText){
			return <li>{itemText}</li>;
		};
		return <ul>{this.props.items.map(createItem)}</ul>
	}
});
var TodoApp = React.createClass({
	getInitialState:function(){
		return {items:[],text:''};
	},
	onChange: function(e){
		this.setState({text:e.target.value});
	}
});

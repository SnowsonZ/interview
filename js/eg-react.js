var CommentBox = React.createClass({
	getInitialState:function(){
		return {data:[]};
	},
	loadCommentFromServer:function(){
		$.ajax({
			url:this.props.url,
			dataType:'json',
			cache:false,
			success:function(data){
				this.setState({data:data});
			},
			error:function(xhr,status,err){
				console.error(this.props.url,status,err.toString());
			}.bind(this)});

	},
	componentDidMount:function(){
		this.loadCommentFromServer();
		setInterval(this.loadCommentFromServer,this.props.intervaltime);
	},
	handleCommentSubmit:function(comment){
		var comments = this.state.data;
		var newComments = comments.concat([comment]);
		this.setState({data:newComments});
		$.ajax({
			url:this.props.url,
			dataType:'json',
			type:'POST',
			data:comment,
			success:function(data){
				this.setState({data:data})
			}.bind(this),
			error:function(){

			}.bind(this)});
	},
	render:function(){
		return (
			<div className="commentBox">
				<h1>Comment</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
});

ReactDOM.render(<CommentBox url="/api/comments" intervaltime={2000}/>,document.getElementById('content'));

var CommentList = React.createClass({
	render:function(){
		var commentNodes = this.props.data.map(function(comment){
			return (
					<Comment auth={comment.auth}>
						{comment.text}
					</Comment>
				);
		});
		return(
			<div className="commentList">
				<Comment auth="test">1234556</Comment>
			</div>
		);
	}
});

var CommentForm = React.createClass({

	handleSubmit:function(e){
		e.preventDefault();
		var auth = this.refs.auth.value.trim();
		var text = this.refs.text.value.trim();
		if(!auth || !text){
			return;
		}
		this.props.onCommentSubmit({auth:auth,text:text});
		this.refs.auth.value = '';
		this.refs.text.value = '';
		return;
	}
	render:function(){
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Your name" ref="auth"/>
				<input type="text" placeholder="Say someting" ref="text"/>
				<input type="submit" value="Post">
			</form>
		);
	}
});

var Comment = React.createClass({

	rawMarkup:function(){
		var md_text = marked({this.props.children.toString()},{sanitize: true});
		return md_text；
	},
	render:function(){
		<div className="comment>
			<h1 className="auth">{this.props.auth}</h1>
			<span dangerouslySetInnerHTML={this.rawMarkup()} />
		</div>
	}
});


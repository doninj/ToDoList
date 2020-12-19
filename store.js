
export default class TodoStore{

	 static i=0
	   increment(){
		if(this.i===undefined){
			this.i=0
		}
		return this.i++
	}
 list=[]
	addTodo(title){
	this.list=[{
			id:this.list.length,
			title:title,
			completed:false
		}, ...this.list.reverse()]
		console.log(this.list)
	}
	
	removeTodo=(todo)=>{
		console.log("dd")
		this.list= this.list.filter(t=>t!==todo)
	}
	toggleTodo(todo,completed=true){
this.list= this.list.map(t=>t===todo ? {...t,completed}:t)
	}
	updateTodo(todo,title){
	this.list = this.list.map(t=>t===todo ? {...t,title}:t)
	}
	cleanTodo(){
		this.list= this.list.filter(t=>!t.completed)
	}






}
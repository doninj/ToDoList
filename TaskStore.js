import { makeObservable, observable, computed, action } from "mobx"
import { TouchableHighlightBase } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

class Store {
		list=[]
		listTacheTerminer=[]
		static i = 0
    constructor(value) {
        makeObservable(this, {
            list: observable.ref,
						getList: computed,
						getTaskFinished:computed,
						increment:action,
						addTodo: action,
						removeTodo:action,
						getTaskTodo:computed
        })
    }

		addTodo(title,description,priorite,status){
			this.increment()
		this.list=[{
				id:this.i,
				title:title,
				description:description,
				priorite:priorite,
				status:status,
				completed:false
			}, ...this.list]
		}
		get getList(){
			return this.list
		}
		get getTaskFinished(){
			console.log("tâche finis: "+ this.list.filter(t=>t.completed==true))
			return this.list.filter(t=>t.completed==true)
		}
		get getTaskTodo(){
			console.log("yoyoy: "+ this.list.filter(t=>t.completed==false))
			return this.list.filter(t=>t.completed==false)
		}
		removeTodo=(todo)=>{
			this.list= this.list.filter(t=>t!==todo)
			console.log(this.list)
		}
		 increment () {
			return this.i++
		}

		toggleTodo(todo,completed=true)
		{
			this.list= this.list.map(t=>t===todo ? {...t,completed}:t)
		}
		toggleFinish(todo,completed=false)
		{
			this.list= this.list.map(t=>t===todo ? {...t,completed}:t)
		}
		
}
const ListStore= new Store();
export  {ListStore};
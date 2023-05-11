const {createApp} = Vue;

createApp({
    data(){
        return {
            newTask: {
                text: "",
                status: false
            },
            taskList: [
                {text: "studiare", status: true},
                {text: "fare i compiti", status: false},
                {text: "esercitarsi a programmare", status: false}
            ]
        }
    },
    methods: {
        addTask(){
            let newTaskToPush ={...this.newTask}
            this.taskList.unshift(newTaskToPush);
            this.newTask.text ="";
        },
        changeStatus(posizione){
            this.taskList[posizione].status = !this.taskList[posizione].status;
        },
        removeTask(posizione){
            this.taskList.splice(posizione, 1);
        },
        getClass(i){
            let classe ="";
            if(this.taskList[i].status){
                classe="done";
            } else{
                classe="notDone";
            }
            return classe;
        }
        
    }
}).mount('#app');
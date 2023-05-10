const {createApp} = Vue;

createApp({
    data(){
        return {
            newTask: "",
            inputError: false,
            taskList: [
                {text: "fare i compiti", done: false},
                {text: "studiare", done: true},
                {text: "esercitarsi a programmare", done: false}
            ]
        }
    },
    methods: {
        addTask(){
            if (this.newTask.lenght > 5){
                this.inputError = false;

                let newTask = {
                    text: this.newTask,
                    done: false
                };
                
                this.taskList.unshift(newTask);
                this.newTask ="";
            } else {
                this.inputError = true;
            }
        },
        removeTask(posizione){
            this.taskList.splice(posizione, 1);
        },
        changeStatus(posizione){
            this.taskList[posizione].done = !this.taskList[posizione].done;
        },
        
    }
}).mount('#app');
class Task {
    static id = 1
    static all = []

    constructor(title, description){
        this.id = Task.id++
        this.title = title
        this.description = description
        this.complete = false
        Task.all.push(this)
    }

    static find(id){
        return Task.all.find(task => task.id === id)
    }

    static delete(id){
        Task.all = Task.all.filter(task => task.id !== id)
    }

    static complete(id){
        const task = Task.find(id)
        task.complete = !task.complete
        return task
    }
}

module.exports = Task
import { Injectable } from '@nestjs/common';
import {Task,TaskStatus} from './task.model';
import {v4 as uuid} from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
    private tasks: Task[]  = []

    getAllTasks(): Task[] {
        return this.tasks;
    }
    
    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[]{
        const {search, status} = filterDto;

        // define a temporary array to hold the result
        let tasks = this.getAllTasks();

        // do something with status

        if (status) {
            tasks = tasks.filter(task=> task.status === status);
        }
        
        // do somethign with search

        if (search) {
            tasks = tasks.filter(task=> {
                if (task.title.includes(search) || task.description.includes(search)) {
                    return true;
                }else{
                    return false;
                }
            });
            
        }

        //console.log(tasks, search, status)
        // return final result

        return tasks;
        
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task=> task.id === id);
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.tasks.push(task);
        return task
    }

    updateTaskStatus(id: string, status:TaskStatus): Task {
        
        let task = this.getTaskById(id);
        task.status = status;
        return task;
    }

    deleteTaskById(id: string): void {

        this.tasks = this.tasks.filter(task=> task.id != id);
    }
}

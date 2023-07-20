import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { title } from 'process';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(): Task[] {
        title
        return this.tasksService.getAllTasks()
    }

    @Post()
    createTask(
        @Body('title') title: string,
        @Body('description') description: string
    ): Task {
        console.log('title, description', title, description);
        return this.tasksService.createTask(title, description);
        
    }
}

import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { log } from 'console';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
        // if we have any filters defined, call tasksService.getTaskWithFilters
        // otherwise, just get all tasks
        
        if (Object.keys(filterDto).length) {
            // call filter functions
           return this.tasksService.getTasksWithFilters(filterDto)

        }else{
            return this.tasksService.getAllTasks()
        }

    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        
        return this.tasksService.getTaskById(id)
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        console.log('title, description', createTaskDto);
        return this.tasksService.createTask(createTaskDto);
        
    }
    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status') status: TaskStatus
    ): Task {
 
        return this.tasksService.updateTaskStatus(id, status);
        
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: string): Boolean {
        
        this.tasksService.deleteTaskById(id);
        return true;
    }
}

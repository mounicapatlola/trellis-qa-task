import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  get() {
    return this.appService.getData();
  }

  @Post('add')
  add(@Body() todo) {
    return this.appService.addTodo(todo);
  }

  @Delete('delete/:id')
  delete(@Param() { id }) {
    return this.appService.deleteTodo(id);
  }

  @Post('toggle')
  toggle(@Body() { id }) {
    return this.appService.toggleCompleted(id);
  }
}

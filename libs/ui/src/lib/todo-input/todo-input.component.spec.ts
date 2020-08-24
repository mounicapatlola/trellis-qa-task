import {createComponentFactory, Spectator} from "@ngneat/spectator/jest";
import { TodoInputComponent } from './todo-input.component';

describe('TodoInputComponent', () => {
  const createComponent = createComponentFactory({
    component: TodoInputComponent
  });
  let spectator: Spectator<TodoInputComponent>;
  beforeEach(() => spectator = createComponent())

  //test to check web page is launched successfully.
  it('should create app', () => {
    const app = spectator.component;
    expect(app).toBeTruthy();
  });
  it('check input text field', () => {
    expect(spectator.query('input')).toExist();
  });
  it('check button', () => {
    expect(spectator.query('button')).toExist();
  });
});

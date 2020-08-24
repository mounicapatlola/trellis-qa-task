import { TodosComponent } from './todos.component';
import { createComponentFactory, Spectator  } from '@ngneat/spectator/jest'

describe('TodosComponent', () => {
  const createComponent = createComponentFactory({
    component: TodosComponent
  });
  let spectator: Spectator<TodosComponent>;
  beforeEach(() => spectator = createComponent())

  //test to check web page is launched successfully.
  it('should create app', () => {
    const app = spectator.component;
    expect(app).toBeTruthy();
  });
  it('check todos list', () => {
    expect(spectator.query('.todos')).toExist();
  })
});

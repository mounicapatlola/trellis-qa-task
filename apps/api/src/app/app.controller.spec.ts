const supertest  = require('supertest')
const request = supertest('http://localhost:4200');

const todoItem = {title: "todo 57"};

describe('supertest api testing', () => {
  test('get todo items', done => {
    request.get('/api/todos').then((response) => {
      expect(response.body.length).toBeGreaterThan(-1);
      done();
    });
  });
  test('add todo item', done => {
    request.post('/api/add').send(todoItem).then((response) => {
      expect(response.body['title']).toEqual(todoItem.title);
      done();
    });
  });
  test('mark todo item complete', done => {
    request.post('/api/add').send(todoItem).then((response) => {
      return response.body['id'];
    }).then((todo_item_id) => {
      request.post('/api/toggle').send({id: todo_item_id}).then((response) => {
        var matchFound = false;
        response.body.forEach(function (item) {
          if(todo_item_id == item['id']) {
            expect(item['completed']).toEqual(true);
            matchFound = true;
          }
        })
        if(!matchFound) {
          fail('No match found for the item using id.');
        }
        done();
      });
    });
  });
  test('delete todo item', done => {
    request.post('/api/add').send(todoItem).then((response) => {
      return response.body['id'];
    }).then((todo_item_id) => {
      request.delete('/api/delete/'+todo_item_id).then((response) => {
        var matchFound = false;
        response.body.forEach(function (item) {
          if(todo_item_id == item['id']) {
            fail('Todo item with the id found. Todo item is not deleted.');
            matchFound = true;
          }
        })
        if(!matchFound) {
          expect(1).toEqual(1);
        }
        done();
      });
    });
  });
});

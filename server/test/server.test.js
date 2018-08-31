const expect= require('expect');
const supertest= require('supertest');

const app =require('./../server.js');
const Todo= require('./../models/todo.js');

describe("POST /todos", () => {
	it("Should create a new todo", () => {
		var text = "Some text here";
		
		request(app)
		.post('/todos')
		.send({text})
		.expect(200)
		.expect((res) => {
			expect(res.body.text).toBe(text)
		})
		.end
	});
});







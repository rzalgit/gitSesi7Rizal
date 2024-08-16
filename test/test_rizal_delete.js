const request = require('supertest');
const assert = require('assert');

describe('API Test for "reqres.in"', () => {
    const BASE_URL = "https://reqres.in/";

    it('Tugas Hapus User', async () => {
        const response = await request(BASE_URL).delete("api/users/2");

        console.log(response.statusCode);

        // Assert status code
        assert.equal(response.statusCode, 204); // Expecting 204 No Content

        // Since the response should be empty, no further assertions on the body are necessary
        assert.equal(Object.keys(response.body).length, 0, "Response body should be empty");
    });
});

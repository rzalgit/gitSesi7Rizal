const request = require('supertest');
const assert = require('assert');
const { validate } = require('jsonschema');

describe('API Test for "reqres.in"', () => {
    const BASE_URL = "https://reqres.in/"
    
    it('POST Data User', async () => {
        const body = {
            "name": "Fahrizal Darmawan",
            "job": "Quality Assurance (PUT)"
        };

        const updateuser = {                
            "type": "object",
            "properties": {
                "name": {
                "type": "string"
                },
                "job": {
                "type": "string"
                }
            },
            "required": [
                "name",
                "job"
            ]
        };

        const response = await request(BASE_URL)
            .put("api/users/2")
            .send(body);

        console.log(response.statusCode);
        console.log(response.body);

        // Assert the status code
        assert.equal(response.statusCode, 200);

        // Validate the response body against the schema
        const validationResult = validate(response.body, updateuser);
        assert(validationResult.valid, `Schema validation failed: ${JSON.stringify(validationResult.errors)}`);
    });
});

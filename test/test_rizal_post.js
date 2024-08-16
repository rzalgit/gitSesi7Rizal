const request = require('supertest');
const assert = require('assert');
const { validate } = require('jsonschema');

describe('API Test for "reqres.in"', () => {
    const BASE_URL = "https://reqres.in/"
    
    it('POST Data User', async () => {
        const body = {
            "name": "Rizal",
            "job": "Quality Assurance"
        };

        const userschema = {                
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
            .post("api/users")
            .send(body);

        console.log(response.statusCode);
        console.log(response.body);

        // Assert the status code
        assert.equal(response.statusCode, 201);  // Expecting 201 Created

        // Validate the response body against the schema
        const validationResult = validate(response.body, userschema);
        assert(validationResult.valid, `Schema validation failed: ${JSON.stringify(validationResult.errors)}`);
    });
});

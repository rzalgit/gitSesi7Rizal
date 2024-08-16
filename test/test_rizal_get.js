const request = require('supertest');
const assert = require('assert');
const { validate } = require('jsonschema');

    describe('API Test for "reqres.in"', () => {
        const BASE_URL = "https://reqres.in/"
        it('Tugas GET List Users', async() => {    
            const schema = {
                "type": "object",
                "properties": {
                  "page": {
                    "type": "integer"
                  },
                  "per_page": {
                    "type": "integer"
                  },
                  "total": {
                    "type": "integer"
                  },
                  "total_pages": {
                    "type": "integer"
                  },
                  "data": {
                    "type": "array",
                    "items": 
                      {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer"
                          },
                          "email": {
                            "type": "string"
                          },
                          "first_name": {
                            "type": "string"
                          },
                          "last_name": {
                            "type": "string"
                          },
                          "avatar": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "id",
                          "email",
                          "first_name",
                          "last_name",
                          "avatar"
                        ]
                      }
                    
                  },
                  "support": {
                    "type": "object",
                    "properties": {
                      "url": {
                        "type": "string"
                      },
                      "text": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "url",
                      "text"
                    ]
                  }
                },
                "required": [
                  "page",
                  "per_page",
                  "total",
                  "total_pages",
                  "data",
                  "support"
                ]
              }

            const response = await request(BASE_URL).get("api/users?page=2")
                console.log(response.statusCode);
                console.log(response.body);
                                                
            //assertion dengan asser syntax
            assert.equal(response.statusCode, 200);

            // Validate the response body against the schema
                const validationResult = validate(response.body, schema);
                assert(validationResult.valid, `Schema validation failed: ${JSON.stringify(validationResult.errors)}`);
            // Assertion data yang sesuai
            assert.equal(response.body.data[1].email,"lindsay.ferguson@reqres.in")

            // Assertion data yang tidak sesuai ekspektasi
            // assert.equal(response.body.data[5].email,"lindsay.ferguson@reqres.in")
                    
        });
    }); 



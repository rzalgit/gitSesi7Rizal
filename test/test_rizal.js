// describe('Test Auto',()=> {
//     it('Test Case 1', ()=>{
//         console.log("Isi dari test case 1")
//     });

//     it('Test Case 2', ()=>{
//         console.log("Isi dari test case 1")
//     });

//     describe('Test di dalam test case 1',() =>{
//         it('Test case di dalam',()=> {
//             console.log("isi dari dalam test case 1");
//         });
//     });
// });

// describe('Test Auto',()=> {
//         it('Test Case 3', ()=>{
//             console.log("Isi dari test case 1")
//         });
    
//         it('Test Case 4', ()=>{
//             console.log("Isi dari test case 1")
//         });
    
//     });
    
//     const request = require('supertest');
    
//     describe('API Test for "restful-api.dev', () => {
//         it('GET objects', async() => {
//             const response = await request("https://api.restful-api.dev/")
//                 .get("objects");
            
//         });
//     });

    const request = require('supertest');

    describe('API Test for "restful-api.dev', () => {
        it('GET objects', async() => {
                    const response = await request("https://api.restful-api.dev/")
                        .get("objects");
                        
                    //assertion dengan asser syntax
                    assert.equal(response.status, 200);
                    
                    //assertion dengan expect syntax
                    expect(response.status).to.equal(200);
                    
                    //assertion dengan should syntax
                    should(response.status === 200);
                });
                

        // it('POST objects', async() => {
        //     const body={
        //         "name": "Macbook Pro 2024",
        //         "data" : {
        //             "year": 2024,
        //             "price": 1849.99,
        //             "CPU model": "Intel Core i9",
        //             "Hard Disk size": "1 TB"
        //         }
        //     }
        // const response = await request("https://api.restful-api.dev/")
        //     .post("objects")
        //     .send(body);
            
        // });
    });
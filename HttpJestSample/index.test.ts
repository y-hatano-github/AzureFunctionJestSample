import httpTrigger from './index';

const context =  { log: jest.fn() } as any;


test('Request with query [name=test], It should be status:200', async () => {

    const request = {
        query: { name: 'test' }
    };

    await httpTrigger(context, request);

    expect(context.res.status).toEqual(200);
    expect(context.res.body.message).toEqual("name is [" + request.query.name + "]");
});

test('Request without query, It should be status:400', async () => {

    const request = {};

    await httpTrigger(context, request);

    expect(context.res.status).toEqual(400);
    expect(context.res.body.message).toEqual("Bad Request");
});


import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query && req.query.name || '');
    if (name == '') {
        context.res = {
            status: 400,
            body: { message : "Bad Request"}
        };
        return;
    }

    context.res = {
        status:200,
        body: { message : "name is [" + name + "]"}
    };

};

export default httpTrigger;
// isme hum handle karenge sabhi API errors ko

class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong ",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode;
        this.data=null
        this.message=message
        this.success = false;
        this.errors = errors 

        if(statck){
            this.stack=statck
        }else{
            Error.capturestackTrace(this, this.constructor);
        }
    }
}

export {ApiError}
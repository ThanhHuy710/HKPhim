import { statusCodes } from "./status-code.helper.js"

//https://docs.nestjs.com/exception-filters#throwing-standard-exceptions

export class BadRequestException extends Error{
    constructor(message = "BadRequestException") {
        super(message)
        this.code = statusCodes.BAD_REQUEST
    }
}

export class UnauthorizedException extends Error{
    constructor(message = "UnauthorizedException") {
        super(message)
        this.code = statusCodes.UNAUTHORIZED
    }
}

export class ForbiddenException extends Error{
    constructor(message = "ForbiddenException") {
        super(message)
        this.code = statusCodes.FORBIDDEN
    }
}


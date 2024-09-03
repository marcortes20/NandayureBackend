import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  // HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    //const exceptionResponse = exception.getResponse();
    //console.log(exceptionResponse);

    // let mensaje: string;
    // switch (status) {
    //   case HttpStatus.BAD_REQUEST:
    //     mensaje =
    //       'Solicitud Incorrecta: El servidor no pudo entender la solicitud.';
    //     break;
    //   case HttpStatus.UNAUTHORIZED:
    //     mensaje =
    //       'No Autorizado: Se requiere autenticación para acceder a este recurso.';
    //     break;
    //   case HttpStatus.FORBIDDEN:
    //     mensaje = 'Prohibido: No tienes permiso para acceder a este recurso.';
    //     break;
    //   case HttpStatus.NOT_FOUND:
    //     mensaje =
    //       'No Encontrado: El recurso solicitado no pudo ser encontrado.';
    //     break;
    //   case HttpStatus.INTERNAL_SERVER_ERROR:
    //     mensaje =
    //       'Error Interno del Servidor: Ocurrió un error inesperado en el servidor.';
    //     break;
    //   default:
    //     mensaje = 'Ocurrió un error.';
    // }

    // Registra el error para análisis y depuración
    // this.logger.error(`Excepción HTTP: ${mensaje}`, exception.stack);

    response.status(status).json({
      statusCode: status,
      // message: mensaje,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

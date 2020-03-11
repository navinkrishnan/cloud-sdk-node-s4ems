import { Controller, Get, Post, Body, Headers, Param, Res, Req, Options, HttpStatus, HttpException } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { Response, Request } from 'express';

const ALLOWED_REQUEST_ORIGINS = ['enterprise-messaging-pubsub.cfapps.sap.hana.ondemand.com',
	  'enterprise-messaging-pubsub.cfapps.eu10.hana.ondemand.com'
	];

@Controller()
export class EmsEventsController {

  @Post('ems-events')
  receiveEmsEvents(@Body() requestBody: string, @Req() req:Request) {
  	Logger.log("Event Received with Data:");
  	Logger.log(requestBody);
  	Logger.log(req.body);
  	Logger.log("Log over--");
  	Logger.log(Object.keys(req));

    return {};
  }

  @Options('ems-events')
  doHandshake(@Headers() headers, @Res() res: Response){
  	Logger.log('Entered OPTIONS Handshake');
  	let webhookRequestOriginHeader = headers['webhook-request-origin'];
  	Logger.log(webhookRequestOriginHeader);
  	if (ALLOWED_REQUEST_ORIGINS.indexOf(webhookRequestOriginHeader) > -1) {
  		Logger.log("setting the response header");
  		res.set('WebHook-Allowed-Origin', webhookRequestOriginHeader);
  		Logger.log('Handshake completed');
  	}
  	let webhookRequestCallback = headers['webhook-request-callback'];
  	Logger.log('Header webhook-request-callback:');
  	Logger.log(webhookRequestCallback);
  	res.status(HttpStatus.OK).send();
  	return {};
  }


}
import { Controller, Get, HttpException } from '@nestjs/common';
import { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';

@Controller()
export class BusinessPartnerController {
  @Get('business-partners')
  getBusinessPartners() {
    return getAllBusinessPartners()
    .catch(error => {
      throw new HttpException(`Failed to get business partners - ${error.message}`, 500);
    });
  }


}


function getAllBusinessPartners(): Promise<BusinessPartner[]> {
  return BusinessPartner.requestBuilder()
    .getAll()
    .execute({
      destinationName: 'MockServer',
      jwt: "my-jwt"
    });
}
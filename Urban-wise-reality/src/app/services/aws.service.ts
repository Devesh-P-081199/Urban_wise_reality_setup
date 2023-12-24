import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AwsService {
  uploading = new Subject();
  bucketCred = environment.bucketCredentials;
  bucketName = environment.bucketName;
  constructor() {}

  async uploadImage(file: any) {
    const contentType = file.type;
    const bucket = new S3({ ...this.bucketCred });
    // const bucket = 'hereneor';
    const params = {
      Bucket: this.bucketName,
      Key: file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType,
    };
    console.log(contentType, 'type');
    let url = await bucket
      .upload(params)
      .on('httpUploadProgress', ($event: any) => {
        let percent = (($event.loaded * 100) / $event.total).toFixed(2);
        this.uploading.next(percent);
      })
      .promise();
    return url;
  }
}

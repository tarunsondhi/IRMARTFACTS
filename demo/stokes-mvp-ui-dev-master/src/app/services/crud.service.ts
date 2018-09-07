import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UtilService} from "./util.service";
import {NgxSpinnerService} from "ngx-spinner";
import {config} from "../../config/config.js";

@Injectable()
export class CrudService {

  constructor(private http: HttpClient,
              private utilService: UtilService,
              private spinner: NgxSpinnerService) {
  }

  login(data) {
    return this.http.post(this.utilService.getBaseUrl() + "login", data)
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        console.error(err);
      });
  }

  createArtWork(data: any) {
    this.spinner.show();
    return this.http.post(config.API_BASE_URL + config.ENDPOINT.artwork, data, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        this.spinner.hide();
        return res;
      }).catch(err => {
        this.spinner.hide();
        console.error(err);
        return [];
      });
  }

  getAllArtwork() {
    return this.http.get(config.API_BASE_URL + config.ENDPOINT.artwork, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        console.error(err);
        return [];
      });
  }

  getArtworkById(id: any) {
    return this.utilService.sleep(config.CLOUDANT_WAIT_TIME).then(() => {
      return this.http.get(config.API_BASE_URL + config.ENDPOINT.artwork + id, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
        .toPromise()
        .then(res => {
          return res;
        }).catch(err => {
          this.spinner.hide();
          console.error(err);
          return [];
        });
    });
  }

  findArtwork(type: string, data: string) {
    return this.http.get(config.API_BASE_URL + config.ENDPOINT.findArtwork + type + "=" + data, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        this.spinner.hide();
        console.error(err);
        return [];
      });
  }

  requestConditionReport(data: any) {
    return this.http.post(config.API_BASE_URL + config.ENDPOINT.requestConditionReport, data, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        this.spinner.hide();
        console.error(err);
        return [];
      });
  }

  conditionReportRequests() {
    return this.http.get(config.API_BASE_URL + config.ENDPOINT.requestConditionReport, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        console.error(err);
        return [];
      });
  }

  submitConditionReport(data) {
    
    return this.http.post(config.API_BASE_URL + config.ENDPOINT.submitConditionReport, data, {
      headers: new HttpHeaders({
        'org': 'Art Handler'
      })
    })
      .toPromise()
      .then(res => {
        
        return res;
      }).catch(err => {
        this.spinner.hide();
        console.error(err);
        return [];
      });
  }

  getConditionReport(crRefID: string) {
    return this.http.get(config.API_BASE_URL + config.ENDPOINT.getConditionReport + crRefID, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        console.error(err);
        return [];
      });
  }

  requestOwnership(data: any) {
    return this.http.post(config.API_BASE_URL + config.ENDPOINT.requestOwnership, data, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        this.spinner.hide();
        console.error(err);
        return [];
      });
  }

  actionOnOwnershipRequest(data: any) {
    return this.http.post(config.API_BASE_URL + config.ENDPOINT.ownershipAction, data, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        this.spinner.hide();
        console.error(err);
        return [];
      });
  }

  updateTransportation(data: any) {
    return this.http.post(config.API_BASE_URL + config.ENDPOINT.updateTransportation, data, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        this.spinner.hide();
        console.error(err);
        return [];
      });
  }

  crossCheckConditionReport(data) {
    return this.http.post(config.API_BASE_URL + config.ENDPOINT.crossCheckCr, data, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        
        return res;
      }).catch(err => {
        this.spinner.hide();
        console.error(err);
        return [];
      });
  }

  viewArtistName() {
    return this.http.get(config.API_BASE_URL + config.ENDPOINT.viewArtistName, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        console.error(err);
        return [];
      });
  }

  viewArtImage() {
    return this.http.get(config.API_BASE_URL + config.ENDPOINT.viewArtImage, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        console.error(err);
        return [];
      });
  }

  viewArtWork() {
    return this.http.get(config.API_BASE_URL + config.ENDPOINT.viewArtWork, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        console.error(err);
        return [];
      });
  }

  getArtistDash() {
    var org = localStorage.getItem('org');

    return this.http.get(config.API_BASE_URL + config.ENDPOINT.artistDash, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        console.error(err);
        return [];
      });
  }

  getHandlerDash() {
    return this.http.get(config.API_BASE_URL + config.ENDPOINT.handlerDash)
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        console.error(err);
        return [];
      });
  }

  getManagerDash() {
    return this.http.get(config.API_BASE_URL + config.ENDPOINT.managerDash)
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        console.error(err);
        return [];
      });
  }

  transportationRequest(artworkId: string) {
    return this.http.post(config.API_BASE_URL + config.ENDPOINT.transportationRequest, {artworkID: artworkId})
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        console.error(err);
        return [];
      });
  }

  transportationUpdate(data: any) {
    return this.http.post(config.API_BASE_URL + config.ENDPOINT.transportationUpdate, data)
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        console.error(err);
        return [];
      });
  }

  receiveArtwork(artworkID: string) {
    return this.http.post(config.API_BASE_URL + config.ENDPOINT.receiveArtwork, {'artworkID': artworkID}, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        console.error(err);
        return [];
      });
  }

  deliverArtwork(data: any){
    return this.http.post(config.API_BASE_URL + config.ENDPOINT.deliverArtwork, data, {
      headers: new HttpHeaders({
        'user': localStorage.getItem('org')
      })
    })
      .toPromise()
      .then(res => {
        return res;
      }).catch(err => {
        console.error(err);
        return [];
      });
  }
}


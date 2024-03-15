import { Component } from '@angular/core';
import { faUsers, faUser, faRightToBracket, faPhoneVolume, faLocationDot, faEnvelope, faLock,faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  users = faUsers;
  login = faRightToBracket;
  user = faUser;
  phonevolume = faPhoneVolume;
  address = faLocationDot;
  phone=faPhone;

 

}

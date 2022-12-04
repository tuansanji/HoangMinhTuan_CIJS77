//Khởi tạo thư viện icon của riêng bạn
import { library } from "@fortawesome/fontawesome-svg-core";

//Import các icon mà bạn muốn sử dụng trong từng gói
import {
  faStore,
  faBars,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faGithub,
  faFacebook,
  faTwitter,
  faWeibo,
} from "@fortawesome/free-brands-svg-icons";
//Add các icon đã được import vào trong thư viện của bạn
library.add(
  faGoogle,
  faGithub,
  faFacebook,
  faTwitter,
  faWeibo,
  faStore,
  faBars,
  faAngleLeft,
  faAngleRight
);

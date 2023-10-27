import LocationDarkGreen from '../assets/icons/svg/ic_location_dark_green.svg';
import BagDarkGreen from '../assets/icons/svg/ic_bag_dark_green.svg';
import HeartDarkGreen from '../assets/icons/svg/ic_heart_dark_green.svg';
import WalletDarkGreen from '../assets/icons/svg/ic_wallet_dark_green.svg';
import CouponDarkGreen from '../assets/icons/svg/ic_coupon_dark_green.svg';
import BellDarkGreen from '../assets/icons/svg/ic_bell_dark_green.svg';
import ChatDarkGreen from '../assets/icons/svg/ic_chat_dark_green.svg';
import {STANDARD_VECTOR_ICON_SIZE} from '../config/Constants';

const MyProfileData = [
  {
    leftIcon: (
      <LocationDarkGreen
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    ),
    label: 'Adresses',
  },
  {
    leftIcon: (
      <BagDarkGreen
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    ),
    label: 'Commandes',
  },
  {
    leftIcon: (
      <HeartDarkGreen
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    ),
    label: 'Liste de souhaits',
  },
  {
    leftIcon: (
      <WalletDarkGreen
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    ),
    label: 'Portefeuille',
  },
  {
    leftIcon: (
      <CouponDarkGreen
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    ),
    label: 'Coupons',
  },
  {
    leftIcon: (
      <BellDarkGreen
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    ),
    label: 'Notifications',
  },
  {
    leftIcon: (
      <ChatDarkGreen
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    ),
    label: 'Messages',
  },
];

// Exporting
export default MyProfileData;

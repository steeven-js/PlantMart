import AvatarMan1 from '../assets/avatars/svg/av_man_1.svg';
import AvatarWoman1 from '../assets/avatars/svg/av_woman_1.svg';
import AvatarMan2 from '../assets/avatars/svg/av_man_2.svg';
import AvatarWoman2 from '../assets/avatars/svg/av_woman_2.svg';
import AvatarMan3 from '../assets/avatars/svg/av_man_3.svg';
import {STANDARD_USER_AVATAR_WRAPPER_SIZE} from '../config/Constants';

const BuyerReviewsData = [
  {
    id: 1,
    buyerAvatarSvg: (
      <AvatarMan1
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    buyerName: 'Jhon Doe',
    reviewAge: '2 mins ago',
    rating: 5,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    id: 2,
    buyerAvatarSvg: (
      <AvatarWoman1
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    buyerName: 'Milinda Doe',
    reviewAge: '15 mins ago',
    rating: 3,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    id: 3,
    buyerAvatarSvg: (
      <AvatarMan2
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    buyerName: 'Rhonie Irani',
    reviewAge: '5 days ago',
    rating: 4,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    id: 4,
    buyerAvatarSvg: (
      <AvatarWoman2
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    buyerName: 'James Smith',
    reviewAge: '12 days ago',
    rating: 5,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    id: 5,
    buyerAvatarSvg: (
      <AvatarMan3
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    buyerName: 'Jhonatan Tret',
    reviewAge: '2 months ago',
    rating: 5,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
];

// Exporting
export default BuyerReviewsData;

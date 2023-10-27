import AvatarMan1 from '../assets/avatars/svg/av_man_1.svg';
import AvatarWoman1 from '../assets/avatars/svg/av_woman_1.svg';
import AvatarMan2 from '../assets/avatars/svg/av_man_2.svg';
import AvatarWoman2 from '../assets/avatars/svg/av_woman_2.svg';
import AvatarMan3 from '../assets/avatars/svg/av_man_3.svg';
import AvatarWoman3 from '../assets/avatars/svg/av_woman_3.svg';
import {STANDARD_USER_AVATAR_WRAPPER_SIZE} from '../config/Constants';

const MessagesData = [
  {
    id: 1,
    avatarSvg: (
      <AvatarMan1
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    senderName: 'Ethan Brown',
    messageAge: '5 minutes ago',
    message:
      'Hey, just wanted to let you know that I won the lottery last night! I can finally quit my job and travel the world.',
  },
  {
    id: 2,
    avatarSvg: (
      <AvatarWoman1
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    senderName: 'Ava Patel',
    messageAge: '5 minutes ago',
    message:
      'Sorry to bother you, but I think I left my pet alligator in your backyard last time I was over. Could you check for me?',
  },
  {
    id: 3,
    avatarSvg: (
      <AvatarMan2
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    senderName: 'Lucas Nguyen',
    messageAge: '5 minutes ago',
    message:
      "Hey, it's the President of the United States here. Just wanted to say that I think you're doing a great job.",
  },
  {
    id: 4,
    avatarSvg: (
      <AvatarWoman2
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    senderName: 'Isabella Smith',
    messageAge: '5 minutes ago',
    message:
      "Did you hear the news? Aliens have landed in Times Square and they're looking for a human representative to communicate with.",
  },
  {
    id: 5,
    avatarSvg: (
      <AvatarMan3
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    senderName: 'William Lee',
    messageAge: '5 minutes ago',
    message:
      "Hey, I need your help. I accidentally signed up for a marathon next weekend and I haven't trained at all. Do you have any advice?",
  },
  {
    id: 6,
    avatarSvg: (
      <AvatarWoman3
        width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
        height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
      />
    ),
    senderName: 'Sophia Jones',
    messageAge: '5 minutes ago',
    message:
      "I can't believe it! I just found out that I'm actually a long-lost relative of the royal family. Time to start practicing my curtsy.",
  },
];

// Exporting
export default MessagesData;

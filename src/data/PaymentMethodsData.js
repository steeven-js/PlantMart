import GoogleSvg from '../assets/icons/svg/ic_pay_method_google.svg';
import AmazonSvg from '../assets/icons/svg/ic_pay_method_amazon.svg';
import MasterCardSvg from '../assets/icons/svg/ic_pay_method_master_card.svg';
import CreditCardSvg from '../assets/icons/svg/ic_pay_method_credit_card.svg';
import UpiSvg from '../assets/icons/svg/ic_pay_method_upi.svg';
import {STANDARD_VECTOR_ICON_WRAPPER_SIZE} from '../config/Constants';

const PaymentMethodsData = [
  {
    id: 1,
    sectionTitle: 'Recommended',
    methods: [
      {
        id: 1,
        iconSvg: (
          <GoogleSvg
            width={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
            height={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
          />
        ),
        label: 'Google Pay',
        isChecked: false,
      },
      {
        id: 2,
        iconSvg: (
          <AmazonSvg
            width={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
            height={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
          />
        ),
        label: 'Amazon Pay',
        isChecked: false,
      },
      {
        id: 3,
        iconSvg: (
          <MasterCardSvg
            width={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
            height={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
          />
        ),
        label: 'Master Card',
        isChecked: false,
      },
      // {
      //   id: 4,
      //   iconSvg: (
      //     <UpiSvg
      //       width={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
      //       height={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
      //     />
      //   ),
      //   label: 'UPI',
      //   isChecked: false,
      // },
    ],
  },
  {
    id: 2,
    sectionTitle: 'Other options',
    methods: [
      {
        id: 1,
        iconSvg: (
          <CreditCardSvg
            width={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
            height={STANDARD_VECTOR_ICON_WRAPPER_SIZE}
          />
        ),
        label: 'Credit/Debit Card',
        isChecked: true,
      },
    ],
  },
];

// Exporting
export default PaymentMethodsData;

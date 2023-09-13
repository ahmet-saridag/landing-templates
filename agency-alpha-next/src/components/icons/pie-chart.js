import React from 'react';
import { rgba } from 'polished';

const PieChart = ({ fill, ...props }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill={fill ?? rgba('#FFFFFF', 0.3)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4319 2.75436e-07V13.5545H30C29.9971 9.9581 28.5662 6.51013 26.022 3.9684C23.4777 1.42666 20.0283 -0.00072392 16.4319 2.75436e-07ZM13.5681 30C17.1666 30 20.6178 28.5705 23.1623 26.0259C25.7069 23.4814 27.1364 20.0304 27.1364 16.4319H13.5681L13.5545 2.87725C11.7736 2.87815 10.0104 3.22978 8.36543 3.91213C6.72043 4.59448 5.22589 5.59421 3.96723 6.85414C2.70858 8.11406 1.71042 9.60948 1.02972 11.2552C0.349025 12.9008 -0.000893663 14.6646 1.71398e-06 16.4455C0.00089709 18.2264 0.352531 19.9896 1.03488 21.6346C1.71723 23.2796 2.71696 24.7741 3.97689 26.0328C5.23681 27.2914 6.73223 28.2896 8.37791 28.9703C10.0236 29.651 11.7872 30.0009 13.5681 30Z"
      />
    </svg>
  );
};

export default PieChart;
import { bemJoin } from 'bem-join';
import React from 'react';
import { FiCheck, FiMinus, FiX } from 'react-icons/fi';

import './CapabilityList.scss';

const b = bemJoin('capability-list');

type CapabilityListIcon = 'check' | '-' | 'x'

interface CapabilityListProps {
  className?: string;
  capabilities: Array<{
    icon?: CapabilityListIcon;
    text: string | React.ReactElement ;
  }>;
}

const getIcon = (icon: CapabilityListIcon | undefined): JSX.Element => {
  switch (icon) {
    case 'x':
      return <FiX />;
    case '-':
      return <FiMinus className={b('highlighted')} />;
    default:
      return <FiCheck className={b('highlighted')} />;
  }
};

const CapabilityList = ({ className = '', capabilities }: CapabilityListProps): JSX.Element => (
  <ul className={`${b()} ${className}`}>
    {capabilities.map(({ icon, text }, key) => (
      <li key={key.toString()}>
        {getIcon(icon)}
        {text}
      </li>
    ))}
  </ul>
);

export default CapabilityList;

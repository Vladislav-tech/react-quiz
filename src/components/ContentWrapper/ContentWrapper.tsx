import { motion, AnimatePresence } from 'framer-motion';

import './ContentWrapper.scss';

interface ContentWrapperProps {
  children: React.ReactNode;
  classList?: string,
  animSettings?: object
}

function ContentWrapper({ children, classList = '', animSettings }: ContentWrapperProps) {

  const createClass = (): string => {
    return `contentWrapper p-3 ${classList}`;
  }

  return (
    <motion.div 
    {...animSettings}
    className={createClass()}>{ children }</motion.div>
  )
}

export default ContentWrapper
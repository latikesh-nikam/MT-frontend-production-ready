import Box from '@mui/material/Box';
import styles from './card.module.scss';
import { ICardProps } from './card.types';

const Card = ({ children }: ICardProps) => {
  return <Box className={styles.card}>{children}</Box>;
};

export default Card;

import styles from '../styles/components/CompletedChellenges.module.css';

export function CompletedChellenges() {
  return(
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}
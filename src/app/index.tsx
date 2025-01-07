import { Link } from 'expo-router';
import { Text } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';

export default function StartupMenu() {
  return (
    <Container>
      <Text className={styles.title}>Welcome to MinMaxLife!</Text>
      <Text className={styles.subtitle}>Choose an option to get started:</Text>
      <Link href="/" asChild>
        <Button title="View Details" />
      </Link>
      <Link href="/" asChild>
        <Button title="Home" />
      </Link>
    </Container>
  );
}

const styles = {
  title: 'text-2xl font-bold text-center mb-4',
  subtitle: 'text-lg text-center mb-6',
};

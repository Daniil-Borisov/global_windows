import styles from './layouts.module.scss';

export const Container = ({ children }: React.PropsWithChildren) => {
	return <div className={styles.container}>{children}</div>;
};

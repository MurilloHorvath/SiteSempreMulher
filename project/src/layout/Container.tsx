import styles from "./Container.module.css"

interface ContainerProps {
    children: React.ReactNode;
    customClass?: string;
}

function Container(props: ContainerProps) {
    return (
        <div className={`${styles.container} ${styles[props.customClass || ""]}`}>
            {props.children}
        </div>
    )
}

export default Container
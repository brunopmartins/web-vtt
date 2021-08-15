import React from "react";
import styles from "./../styles/UserHomePage.module.css";

export default function Colmeia(props) {
    const objects = props.objects;
    const scale = props.scale ? props.scale : 20;
    const n_cols = props.n_cols ? props.n_cols : 11;
    return (
        <div className={styles.colmeia}>
            <div className="colmeia">
                {objects.map((item) => (
                    <div key={item.id} className="hex-cell">
                        <div>
                            <img layout="fill" src={item.img}  alt={item.name} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


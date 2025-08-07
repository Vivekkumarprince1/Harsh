import styles from './style.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../../../common/RoundedButton';
import Magnetic from '../../../../common/Magnetic';
import { usePathname } from 'next/navigation';

export default function index() {
  return (
    <>
    <div className={styles.footer}>
      <Magnetic>
        <div className={styles.el}>
        <a href='https://www.linkedin.com/in/harsh0911/' target='_blank'>LinkedIn</a>
        <div className={styles.indicator}></div>
        </div>
      </Magnetic>
      <Magnetic>
        <div className={styles.el}>
        <a href='https://github.com/Harsh-9110' target='_blank'>GitHub</a>
        <div className={styles.indicator}></div>
        </div>
      </Magnetic>
      <Magnetic>
        <div className={styles.el}>
        <a href='https://x.com/harsh09trivedi' target='_blank'>X</a>
        <div className={styles.indicator}></div>
        </div>
      </Magnetic>
      <Magnetic>
        <div className={styles.el}>
        <a href='https://drive.google.com/file/d/1Xwnen0wSsMGxJgqt5JSC54Ucsk5gaBMu/view?usp=drive_link' target='_blank'>Resume</a>
        <div className={styles.indicator}></div>
        </div>
      </Magnetic>
    </div>
    </>
  )
}
